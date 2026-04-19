# 🌐 Masthan Mohammed — Portfolio Website

Personal portfolio with Google Calendar booking, hosted on GitHub Pages.

---

## 🚀 Deploy to GitHub Pages (3 Steps)

### Step 1 — Create Your Repository
1. Go to [github.com](https://github.com) and log in
2. Click **+** → **New repository**
3. Name it **`masthanmohammed.github.io`** (your site will live at that URL)
   - Or name it `portfolio` → site will be at `https://yourusername.github.io/portfolio`
4. Set to **Public** → **Create repository**

### Step 2 — Upload the Files
**Via GitHub website (easiest):**
1. Open your new repo → **Add file** → **Upload files**
2. Drag in all 3 files: `index.html`, `style.css`, `script.js`
3. Click **Commit changes**

**Via Git (terminal):**
```bash
git init
git add .
git commit -m "Launch Masthan Mohammed portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/masthanmohammed.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to repo → **Settings** → **Pages** (left sidebar)
2. Source: **Deploy from a branch** → **main** → **/ (root)**
3. Click **Save** → wait ~2 minutes
4. Visit `https://masthanmohammed.github.io` 🎉

---

## ✏️ What to Customize

Open `index.html` and update each section:

| What | Where to look in index.html | What to change |
|---|---|---|
| Job title | `hero-subtitle` | Your actual profession |
| Tagline / bio | `hero-desc` + About section | Your personal description |
| Photo | `hero-photo` img tag | Your photo URL or filename |
| GitHub link | All `github.com/yourusername` | Your GitHub URL |
| LinkedIn link | All `linkedin.com/in/yourusername` | Your LinkedIn URL |
| Email | All `your@email.com` | Your real email |
| Stats (years, projects) | `about-stats` section | Your real numbers |
| Skills | `skills-grid` section | Your actual skills |
| Projects (×3) | `project-card` blocks | Your real projects + links |
| Awards (×4) | `award-card` blocks | Your real awards + years |

---

## 📅 Google Calendar Booking Setup

### Option A — Google Appointment Schedules (Free, no 3rd-party)
1. Go to [calendar.google.com](https://calendar.google.com)
2. Click **+ Create** → **Appointment schedule**
3. Set your available days/times → Save
4. Click **Open booking page** → copy the URL
5. In `index.html`, find and replace:
```html
href="https://calendar.google.com/calendar/appointments/YOUR_BOOKING_ID"
```
with your actual booking page URL.

### Option B — Calendly (more features, free tier available)
1. Sign up at [calendly.com](https://calendly.com) with your Google account
2. Connect your Google Calendar during setup
3. Create a "30 Minute Meeting" event type
4. Copy your Calendly booking link
5. Replace the `href` in the Book section with your Calendly link

---

## 📧 Contact Form (Free via Formspree)
1. Sign up at [formspree.io](https://formspree.io) with your Gmail
2. Create a new form → copy the **Form ID** (e.g. `xpzgkqrw`)
3. In `index.html`, update:
```html
<form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
```
4. Done — submissions go straight to your Gmail inbox!

---

## 🎨 Change the Accent Color
Open `style.css` and edit the top variables:
```css
:root {
  --accent:  #6366f1;   /* ← change to your preferred color */
  --accent2: #a78bfa;   /* ← secondary gradient color */
}
```
Example alternatives:
- Blue: `#3b82f6` / `#60a5fa`
- Teal: `#14b8a6` / `#2dd4bf`
- Rose: `#f43f5e` / `#fb7185`

---

## 📁 Files
```
portfolio/
├── index.html   ← All content (edit here)
├── style.css    ← All styles & colors
├── script.js    ← Interactions (rarely needs editing)
└── README.md    ← This guide
```
