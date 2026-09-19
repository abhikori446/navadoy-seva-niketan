# Navadoy Seva Niketan (NSN) - Web Platform

Official web application for **Navadoy Seva Niketan (NSN)**, an accredited non-governmental organization registered under the Societies Registration Act XXI of 1860, dedicated to transforming rural lives across West Bengal through quality education, rural healthcare, women empowerment, clean water, and disaster relief.

---

## ✨ Features

- **Trilingual Localization:** Seamless instant switching between **English**, **Hindi (हिन्दी)**, and **Bengali (বাংলা)**.
- **Section 80G Tax Exemption Donation Flow:** Multi-step donation workflow with instant official 80G tax receipt generation (eligible for 50% tax deduction under Indian Income Tax Act).
- **Historical Receipt Lookup:** Instant search and download of past 80G tax exemption certificates by donor PAN, Mobile, or Email.
- **Grassroots Program Showcases:** 10 core focus areas (Education, Health, Women SHGs, Child Nutrition, Blindness Eradication, Water Kiosks, Environment, Disaster Relief, Youth Skilling, Legal Aid).
- **Volunteer & Internship Portal:** Interactive volunteer application form with skills selection and availability management.
- **CSR & Corporate Partnerships:** Dedicated CSR section compliant with Section 135 of the Companies Act, 2013 and MCA Form CSR-1 registration (`CSR00041285`).
- **Official Brand Emblem:** Responsive SVG logo configured via a single centralized constant (`src/config/branding.ts`).
- **Production-Ready Node.js Server:** Built with Express (`server.js`) to serve production static assets with aggressive asset caching, SPA fallback, and health check monitoring (`/api/health`).

---

## 🛠️ Technology Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Lucide React, Motion
- **Backend / Production Runtime:** Node.js (18+ / 20+ / 22+), Express 4
- **Styling & Fonts:** Tailwind CSS, Google Fonts (Plus Jakarta Sans, Playfair Display, Noto Sans Bengali)

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/navadoy-seva-niketan.git
cd navadoy-seva-niketan
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
The development server will start at `http://localhost:3000`.

### 4. Build for production
```bash
npm run build
```
This compiles the frontend assets into the `dist/` folder.

### 5. Run production server locally
```bash
npm start
```
Starts the Node.js Express server on `http://localhost:3000` (or the port defined in `PORT`).

---

## 📦 Hostinger Production Deployment

This project is configured out-of-the-box for **Hostinger Node.js Web App**.

1. Connect your GitHub repository to Hostinger hPanel under **Advanced** → **Git**.
2. Open **Advanced** → **Node.js** in Hostinger hPanel and configure:
   - **Node.js Version:** 20.x or 18.x
   - **Application Mode:** Production
   - **Application Root:** `public_html` (or your chosen path)
   - **Application Startup File:** `server.js`
3. Click **Run NPM Install**, then in the terminal execute `npm run build`.
4. Click **Start Application** / **Restart Application**.

> 📖 **Full Deployment Instructions:** Refer to [DEPLOYMENT_HOSTINGER.md](./DEPLOYMENT_HOSTINGER.md) for step-by-step guidance and troubleshooting.

---

## ⚙️ NPM Scripts

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `vite --port=3000 --host=0.0.0.0` | Starts local development server |
| `npm run build` | `vite build` | Compiles production assets into `dist/` |
| `npm start` | `node server.js` | Starts Node.js Express production server |
| `npm run preview` | `vite preview --port=3000 --host=0.0.0.0` | Previews built distribution bundle |
| `npm run lint` | `tsc --noEmit` | Validates TypeScript syntax without emitting code |
| `npm run clean` | `rm -rf dist` | Cleans production build output |

---

## 📁 Project Structure

```text
├── DEPLOYMENT_HOSTINGER.md # Detailed Hostinger setup guide
├── README.md               # Project documentation
├── .env.example            # Environment variables template
├── .gitignore              # Git ignored files & directories
├── index.html              # HTML entry point with meta tags & fonts
├── metadata.json           # Application metadata
├── package.json            # Project dependencies & scripts
├── public/                 # Static assets & SVG logo files
│   ├── nsn-logo.svg        # Official NSN circular emblem
│   └── nsn-placeholder-logo.svg
├── server.js               # Node.js Express production server for Hostinger
├── src/                    # React application source code
│   ├── components/         # Modular UI components
│   ├── config/             # Global branding & logo configuration
│   ├── data/               # Program data, metrics & translations
│   ├── types.ts            # TypeScript interfaces and types
│   ├── App.tsx             # Main layout & state coordinator
│   └── main.tsx            # React application entry point
├── tsconfig.json           # TypeScript compiler configuration
└── vite.config.ts          # Vite build & Tailwind configuration
```

---

## 🏛️ Statutory Credentials

- **Registration No:** `S/1L/74829` (Societies Registration Act XXI of 1860)
- **NITI Aayog Darpan ID:** `WB/2019/0239148`
- **Income Tax Section 80G:** `AACTN5892QF20215` (50% Tax Exemption)
- **Income Tax Section 12A:** `AACTN5892QE20214`
- **MCA CSR-1 Registration:** `CSR00041285`
- **PAN:** `AACTN5892Q`

---

## 📄 License

This repository is maintained for the non-profit welfare activities of Navadoy Seva Niketan. All rights reserved.
