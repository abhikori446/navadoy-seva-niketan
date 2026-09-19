import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env if present
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Hostinger passes process.env.PORT via Phusion Passenger or reverse proxy
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const HOST = '0.0.0.0';

// Basic security and performance response headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// JSON and URL-encoded body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check API endpoint for Hostinger / uptime monitoring
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'Navadoy Seva Niketan (NSN) Web Platform',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production',
    uptimeSeconds: Math.floor(process.uptime()),
    nodeVersion: process.version
  });
});

// Path to compiled frontend assets
const distPath = path.resolve(__dirname, 'dist');
const indexPath = path.resolve(distPath, 'index.html');

// Serve static assets from the 'dist' directory created by 'npm run build'
if (fs.existsSync(distPath)) {
  app.use(
    express.static(distPath, {
      maxAge: '1d',
      setHeaders: (res, filePath) => {
        // Aggressively cache hashed Vite assets
        if (filePath.includes('/assets/')) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (filePath.endsWith('.html')) {
          // Never cache index.html so users always get the latest version
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
      }
    })
  );

  // SPA fallback: Route all unmatched GET requests to index.html (supports /hi, /bn, deep links)
  app.get('*', (req, res) => {
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(503).send('Application build in progress. Please refresh momentarily.');
    }
  });
} else {
  // Helpful fallback in case Hostinger starts the server before 'npm run build' has completed
  app.get('*', (req, res) => {
    res.status(200).send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Navadoy Seva Niketan - Build Required</title>
          <style>
            body { font-family: system-ui, -apple-system, sans-serif; background-color: #090d16; color: #f1f5f9; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 1.5rem; box-sizing: border-box; }
            .card { background: #131c2e; border: 1px solid #1e293b; border-radius: 1rem; max-width: 560px; width: 100%; padding: 2.5rem; text-align: center; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.5); }
            .badge { display: inline-block; background: #064e3b; color: #34d399; font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 9999px; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; }
            h1 { font-size: 1.5rem; margin: 0 0 1rem; color: #ffffff; }
            p { font-size: 0.95rem; line-height: 1.6; color: #94a3b8; margin: 0 0 1rem; }
            .cmd-box { background: #0b1120; border: 1px solid #334155; border-radius: 0.5rem; padding: 1rem; margin: 1.5rem 0; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.9rem; color: #38bdf8; text-align: left; }
            .footer-note { font-size: 0.8rem; color: #64748b; margin-top: 1.5rem; }
          </style>
        </head>
        <body>
          <div class="card">
            <span class="badge">Hostinger Node.js Server Active</span>
            <h1>Navadoy Seva Niketan Web App</h1>
            <p>The Node.js server is running successfully, but the static production assets (<code>dist/</code> directory) have not been compiled yet.</p>
            <p>To finish setting up the app, please execute the build command in your Hostinger Terminal or SSH:</p>
            <div class="cmd-box">
              $ npm run build
            </div>
            <p>After building, restart the Node.js application in your Hostinger hPanel to load the website.</p>
            <div class="footer-note">Node.js ${process.version} • Environment: ${process.env.NODE_ENV || 'production'}</div>
          </div>
        </body>
      </html>
    `);
  });
}

// Start HTTP listener
const server = app.listen(PORT, HOST, () => {
  console.log(`====================================================`);
  console.log(`  Navadoy Seva Niketan (NSN) Production Server      `);
  console.log(`  Listening on http://${HOST}:${PORT}              `);
  console.log(`  Node.js Version: ${process.version}               `);
  console.log(`  Environment:     ${process.env.NODE_ENV || 'production'}`);
  console.log(`  Dist Available:  ${fs.existsSync(distPath)}       `);
  console.log(`====================================================`);
});

// Handle graceful termination for zero-downtime restarts on Hostinger
const handleShutdown = (signal) => {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP server closed. Exiting process.');
    process.exit(0);
  });
  // Force exit after timeout if sockets remain open
  setTimeout(() => {
    console.error('Forced shutdown due to timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));

export default app;
