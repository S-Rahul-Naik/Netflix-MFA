# 🚀 Quick Setup Guide

## Netflix Clone with MongoDB & Authenticator App MFA

### 1️⃣ Install Dependencies (Required)

Open a terminal in this project folder and run:

```bash
npm install
```

This will install all necessary packages including:
- React & React Router
- Express & MongoDB
- Authentication libraries (JWT, bcrypt, speakeasy)
- QR Code generation

**Wait for installation to complete** (may take 2-5 minutes).

---

### 2️⃣ Set Up MongoDB (Required)

#### Option A: Local MongoDB (Recommended for Development)

1. **Download and Install MongoDB:**
   - Go to https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server for Windows
   - Run the installer with default settings
   - MongoDB will run on `mongodb://localhost:27017`

2. **Verify MongoDB is Running:**
   ```bash
   mongosh
   ```
   If you see the MongoDB shell, you're good to go!

#### Option B: MongoDB Atlas (Cloud - Free Tier)

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a new cluster (choose Free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
6. Replace `<password>` with your actual password
7. Add `/netflix-clone` at the end

---

### 3️⃣ Configure Environment Variables

**If `.env` file doesn't exist:**

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

**If `.env` already exists:**

1. Open `.env` and verify it has these settings:

2. **Configuration options:**

   **For Local MongoDB:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/netflix-clone
   JWT_SECRET=your_random_secret_key_here_change_this
   SERVER_PORT=5000
   NODE_ENV=development
   ```

   **For MongoDB Atlas:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/netflix-clone
   JWT_SECRET=your_random_secret_key_here_change_this
   SERVER_PORT=5000
   NODE_ENV=development
   ```

   **Important:** Change `JWT_SECRET` to a random secure string!

---

### 4️⃣ Install an Authenticator App on Your Phone

Download one of these apps (free):

- **Google Authenticator** (iOS/Android)
- **Microsoft Authenticator** (iOS/Android)  
- **Authy** (iOS/Android)
- **1Password** (if you use it)

You'll use this app to scan QR codes during signup!

---

### 5️⃣ Run the Application

In your terminal, run any of these commands:

```bash
npm start        # Start both backend & frontend
```

Or use the simpler alternatives:

```bash
npm run dev      # Same as npm start
npm run dev:full # Same as npm start
```

This will start:
- **Backend server** on http://localhost:5000
- **React frontend** on http://localhost:3000

The browser will automatically open at http://localhost:3000

**Available Commands:**
- `npm start` or `npm run dev` or `npm run dev:full` - Run full application
- `npm run server` - Run only backend (port 5000)
- `npm run client` - Run only frontend (port 3000)

---

## ✅ Testing the Application

### Enjoy the Netflix Experience:

Once logged in, you'll see:
- **Horizontal scrolling carousels** - Scroll left/right through content
- **Smooth hover effects** - Posters scale up and show play buttons
- **Multiple content rows** - Popular, Trending, New & Popular
- **Dynamic header** - Turns solid when you scroll
- **Professional layout** - Just like real Netflix!

### Sign Up Flow:

1. Click **"Get Started"** or **"Sign Up"**
2. Enter email and password (min 6 characters)
3. Click **"Sign Up"** - Account created!
4. Click **"Setup MFA"** (or skip if you want)
5. **Scan the QR code** with your authenticator app
6. The app will show a 6-digit code
7. Enter the code and click **"Verify & Complete"**
8. You're in the Browse page! 🎉

### Sign In Flow:

1. Click **"Sign In"**
2. Enter your email and password
3. Click **"Sign In"**
4. If you enabled MFA:
   - Open your authenticator app
   - Enter the current 6-digit code
   - Click **"Verify & Sign In"**
5. You're in! 🎉

---

## 🐛 Common Issues & Solutions

### Issue: "MongoDB connection error"
**Solutions**:
- Make sure MongoDB is running (if using local)
- Check your connection string in `.env`
- For Atlas: Make sure your IP is whitelisted (add 0.0.0.0/0 for development)
- Verify credentials are correct

### Issue: "Cannot find module" errors
**Solutions**:
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Make sure you're in the project root directory

### Issue: Port 3000 or 5000 already in use
**Solutions**:
- Close other running applications on those ports
- Stop all Node processes: `Stop-Process -Name node -Force` (PowerShell)
- Or change backend port in `.env` (SERVER_PORT=5001)

### Issue: "JWT must be provided" error
**Solutions**:
- Make sure you set `JWT_SECRET` in `.env` file
- Restart the server after changing `.env`

### Issue: QR code not displaying
**Solutions**:
- Check browser console for errors
- Make sure backend server is running
- Try refreshing the page

### Issue: Authenticator code not working
**Solutions**:
- Make sure your phone's time is set to automatic
- Time sync is critical for TOTP codes
- Try entering the code again (it changes every 30 seconds)
- Verify you're using the correct account in your authenticator app

---

## 📱 How Authenticator Apps Work

**Time-based One-Time Passwords (TOTP)**:
- Your phone and our server share a secret key (via QR code)
- Both generate the same 6-digit code every 30 seconds
- The code is based on the current time and the shared secret
- No internet connection needed on your phone!

---

## 🔧 MongoDB Database Structure

The app creates a `users` collection with this structure:

```javascript
{
  email: "user@example.com",
  password: "hashed_password",
  emailVerified: true,
  mfaEnabled: true,
  mfaSecret: "encrypted_secret",
  createdAt: Date
}
```

---

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/signin` | Login user |
| POST | `/api/auth/setup-mfa` | Get QR code for MFA |
| POST | `/api/auth/verify-mfa-setup` | Verify and enable MFA |
| POST | `/api/auth/verify-mfa` | Verify MFA during signin |
| GET | `/api/auth/me` | Get current user info |
| POST | `/api/auth/disable-mfa` | Disable MFA |

---

## 🎯 Next Steps

Once your app is running, you can:
1. Customize the UI/styling
2. Integrate a movie database API (like TMDB)
3. Add user profiles
4. Implement watchlist functionality
5. Add video playback features
6. Deploy to production (Heroku, Vercel, etc.)

---

## 💡 Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Check the terminal/server logs
3. Verify all environment variables are set correctly
4. Make sure MongoDB is running
5. Ensure you completed all setup steps

Good luck! 🚀
