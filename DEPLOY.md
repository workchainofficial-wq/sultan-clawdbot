# 🚀 Quick Deploy Guide for Sultan

## Railway Deployment (5 Minutes)

### Step 1: Go to Railway
Open: https://railway.app/dashboard

### Step 2: New Project
Click **"New Project"** → **"Deploy from GitHub repo"**

### Step 3: Select Repo
Choose: **workchainofficial-wq/sultan-clawdbot**

### Step 4: Set Environment Variables
Railway will auto-detect settings. Add this variable:

**Variable Name:** `ANTHROPIC_API_KEY`
**Value:** Your Claude API key (starts with `sk-ant-api03-...`)

> 🔑 **Sultan:** Use the Claude API key you already have

### Step 5: Deploy
Click **"Deploy"** - Railway will automatically:
- Install dependencies
- Start the bot
- Generate public URL

### Step 6: Get Your URL
- Go to **Settings** → **Generate Domain**
- Your bot will be live at: `https://sultan-clawdbot.up.railway.app`

---

## ✅ Done!

Visit your URL and start chatting with your personal AI! 🔥

---

## Optional: Add More Channels

Edit `config.yml` to add:
- WhatsApp
- Telegram
- Discord
- Slack

See: https://docs.clawd.bot for channel setup guides.

---

**Made with 🔥 by Super AI**
