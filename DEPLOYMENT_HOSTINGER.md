# Production Deployment Guide: Hostinger Node.js Web App

This guide walks you through deploying the **Navadoy Seva Niketan (NSN)** web application onto **Hostinger Node.js Web App** hosting (Cloud, Business, or VPS plans with Node.js support).

---

## 1. Project Architecture Overview

- **Frontend:** React 19 + TypeScript + Vite + Tailwind CSS (compiled into static bundle in `dist/`).
- **Production Server:** Node.js + Express (`server.js`) serving the production build, API health check (`/api/health`), and handling SPA client-side routing.
- **Node.js Compatibility:** Node.js 18.x, 20.x, or 22.x.
- **Port:** Automatically binds to `process.env.PORT` (assigned by Hostinger/Passenger) or falls back to port `3000`.

---

## 2. Prerequisites on Hostinger

1. A Hostinger hosting account with **Node.js support** (Hostinger Cloud Hosting, Business Shared Hosting with Node.js manager, or VPS).
2. A connected domain name (e.g., `navadoysevaniketan.org` or `yourdomain.com`).
3. An active SSL Certificate (free Lifetime SSL available in Hostinger hPanel).

---

## 3. Step-by-Step Deployment via Hostinger hPanel

### Step 1: Upload or Clone the Code to Hostinger

You can deploy the code using either **Git (Recommended)** or **File Manager / FTP**:

#### Option A: Via GitHub (Recommended)
1. In Hostinger **hPanel**, go to **Advanced** → **Git**.
2. Paste your repository URL: `https://github.com/your-username/navadoy-seva-niketan.git`.
3. Set the target directory (usually `/public_html` or `/public_html/app`).
4. Select the branch (e.g., `main`).
5. Click **Create** to clone the repository.
6. Whenever you push to GitHub, click **Deploy** to pull latest changes.

#### Option B: Via File Manager / ZIP
1. Compress your project files into a `.zip` archive (do **NOT** include `node_modules` or `.git`).
2. Upload and extract the archive into your domain's root directory in Hostinger File Manager.

---

### Step 2: Configure the Node.js Application in hPanel

1. In **hPanel**, navigate to **Advanced** → **Node.js** (or search "Node.js" in the top search bar).
2. Click **Create Application** (or manage existing).
3. Fill in the configuration details:
   - **Node.js Version:** Select **22.x** (recommended) or **20.x**.
   - **Application Mode:** Select **Production**.
   - **Application Root:** Enter the directory where files are located (e.g., `public_html`).
   - **Application Startup File:** Enter **`server.js`** *(Critical: Ensure this is set to `server.js`)*.
4. Click **Create** or **Save**.

---

### Step 3: Configure Environment Variables

In the Node.js configuration section under **Environment Variables**, add the following:

| Variable | Recommended Value | Note |
|---|---|---|
| `NODE_ENV` | `production` | Enables optimized production mode |
| `PORT` | *(Leave default or set 3000)* | Hostinger injects dynamic port |
| `APP_URL` | `https://yourdomain.com` | Your live site address |
| `GEMINI_API_KEY` | *(Optional)* | For AI-assisted features |

---

### Step 4: Install Dependencies & Build Production Assets

1. Under your Node.js application in hPanel, find the action buttons:
2. Click **Run NPM Install** (or use the SSH/Terminal command: `npm install`).
3. After installation completes, run the build:
   - If Hostinger provides a **Run Script** or **Run NPM Build** button, run `build`.
   - Alternatively, open **SSH / Terminal** in hPanel, navigate to your app directory (`cd ~/domains/yourdomain.com/public_html`), and run:
     ```bash
     npm run build
     ```
   - This command generates the optimized `dist/` directory with all static assets.

---

### Step 5: Start or Restart the Node.js Application

1. In hPanel Node.js section, click **Restart Application** (or **Start Application**).
2. Open your website in a browser (e.g., `https://yourdomain.com`).
3. You should see the full Navadoy Seva Niketan platform live!

---

## 4. Verification & Health Check

Test that the application is running normally by checking the health endpoint:

```text
GET https://yourdomain.com/api/health
```

Expected JSON response:
```json
{
  "status": "ok",
  "service": "Navadoy Seva Niketan (NSN) Web Platform",
  "timestamp": "2026-09-19T...",
  "environment": "production",
  "uptimeSeconds": 45,
  "nodeVersion": "v20.x.x"
}
```

---

## 5. Troubleshooting Common Hostinger Issues

### 1. "Build Required" Screen Appears
- **Cause:** The `dist/` directory is missing because `npm run build` has not run yet.
- **Solution:** Connect via Hostinger SSH/Terminal or File Manager and execute `npm run build`. Then click **Restart Application** in hPanel.

### 2. Deep Links or Language Pages Return 404 (e.g. `/hi`, `/bn`)
- **Solution:** Our `server.js` contains a built-in catch-all route `app.get('*')` that automatically serves `dist/index.html` for single-page routing, so all language and section URLs resolve seamlessly.

### 3. Application Not Starting / Port Conflict
- **Cause:** Trying to hardcode a specific port.
- **Solution:** Our `server.js` uses `process.env.PORT || 3000`. On Hostinger, Passenger assigns an internal port or socket automatically.

### 4. Need to Update the Site in Future
When you push code changes to GitHub:
1. In Hostinger Git section, click **Deploy**.
2. In SSH / Terminal:
   ```bash
   npm install
   npm run build
   ```
3. In hPanel Node.js, click **Restart**.
