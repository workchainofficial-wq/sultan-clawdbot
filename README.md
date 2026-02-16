# Sultan's Clawdbot - Railway Deployment 🔥

## Quick Deploy to Railway

### Option 1: Railway CLI (if installed)
```bash
railway login
railway init
railway up
```

### Option 2: GitHub + Railway (Recommended)

1. **Create GitHub Repo:**
   - Upload these files to a new GitHub repo
   - Can be private or public

2. **Deploy to Railway:**
   - Go to https://railway.app/dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repo
   - Railway will auto-detect and deploy

3. **Set Environment Variables:**
   Railway should auto-load from `.env.example`, but verify:
   - `ANTHROPIC_API_KEY` = (your Claude key)
   - `PORT` = 3000 (auto-set by Railway)

4. **Get Public URL:**
   - Railway > Settings > Generate Domain
   - Your bot will be live at: `https://your-app.railway.app`

### Option 3: Railway Template (Easiest)

1. Push this code to GitHub
2. Click this button to deploy:
   
   [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

3. Connect your GitHub repo
4. Set environment variables
5. Deploy!

## After Deployment

Visit your Railway URL and you'll see the Clawdbot webchat interface!

### Access Your Bot:
- Webchat: `https://your-app.railway.app`
- API: `https://your-app.railway.app/api`

### Add More Channels:
Edit `config.yml` to add:
- WhatsApp
- Telegram  
- Discord
- Slack

## Files Included:

- `package.json` - Dependencies
- `index.js` - Bootstrap script  
- `config.yml` - Clawdbot configuration
- `.env.example` - Environment variables
- `railway.json` - Railway deployment config

## Support:

Docs: https://docs.clawd.bot
Community: https://discord.com/invite/clawd

---

**Made with 🔥 by Super AI for Sultan**
