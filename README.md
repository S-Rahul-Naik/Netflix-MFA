# Netflix Clone with React, MongoDB & Authenticator App MFA

A modern Netflix clone built with React.js featuring secure Multi-Factor Authentication (MFA) using authenticator apps like Google Authenticator or Microsoft Authenticator.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and React Router v6
- **Netflix-Style UI**: 
  - Horizontal scrolling carousels
  - Smooth hover animations with scale effects
  - Dynamic header that changes on scroll
  - Professional poster layouts with play buttons
- **Express Backend**: RESTful API with JWT authentication
- **MongoDB Database**: Flexible document-based user storage
- **Authenticator App MFA**: 
  - TOTP-based (Time-based One-Time Password)
  - Works with Google Authenticator, Microsoft Authenticator, Authy, etc.
  - QR code scanning for easy setup
  - No SMS costs or phone number required
- **Secure Authentication**: bcrypt password hashing, JWT tokens
- **Responsive Design**: Beautiful Netflix-style UI that works on all devices
- **Protected Routes**: Browse page accessible only to authenticated users
- **Real-time Notifications**: Toast notifications for user feedback

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)
- **MongoDB** (Local installation or MongoDB Atlas account)
- **npm** or yarn
- **Authenticator app** on your phone (Google Authenticator, Microsoft Authenticator, etc.)

## 🛠️ Installation

### 1. Clone or Navigate to Project

```bash
cd Netflix-Website-Project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

#### Option A: Local MongoDB

1. Download from https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will run on `mongodb://localhost:27017`

#### Option B: MongoDB Atlas (Cloud -Free)

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string from "Connect" → "Connect your application"

### 4. Configure Environment

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```

2. Update `.env` with your settings:
   ```env
   MONGODB_URI=mongodb://localhost:27017/netflix-clone
   JWT_SECRET=your_secure_random_secret_key
   SERVER_PORT=5000
   NODE_ENV=development
   ```

### 5. Run the Application

You can use any of these commands:

```bash
npm start        # Start both backend & frontend
npm run dev      # Same as npm start
npm run dev:full # Same as npm start
```

This starts both:
- Backend API: http://localhost:5000
- Frontend: http://localhost:3000 (opens automatically)

## 📱 How MFA Works

### Signup Flow:
1. Create account with email & password
2. Click "Setup MFA"  
3. **Scan QR code** with your authenticator app
4. App generates 6-digit code
5. Enter code to verify and enable MFA
6. Done! Future logins will require the code

### Signin Flow:
1. Enter email & password
2. If MFA enabled: Open authenticator app
3. Enter current 6-digit code
4. Successfully signed in!

### Supported Authenticator Apps:
- ✅ Google Authenticator
- ✅ Microsoft Authenticator
- ✅ Authy
- ✅ 1Password
- ✅ Any TOTP-compatible app

## 🏗️ Project Structure

```
Netflix-Website-Project/
├── server/
│   ├── server.js              # Express server
│   ├── models/
│   │   └── User.js            # MongoDB user model
│   ├── routes/
│   │   └── auth.js            # Authentication routes
│   └── middleware/
│       └── auth.js            # JWT verification middleware
├── src/
│   ├── context/
│   │   └── AuthContext.js     # Auth state management
│   ├── pages/
│   │   ├── Home.js            # Landing page
│   │   ├── SignUp.js          # Signup with MFA
│   │   ├── SignIn.js          # Signin with MFA
│   │   ├── Browse.js          # Protected content page
│   │   └── Auth.css           # Auth pages styles
│   ├── App.js                 # Main app & routing
│   ├── firebase.js            # API service (renamed from firebase)
│   └── index.js               # React entry point
├── .env                       # Environment variables
├── .env.example               # Environment template
├── package.json               # Dependencies
├── SETUP_GUIDE.md             # Detailed setup instructions
└── README.md                  # This file
```

## 🔐 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication (7-day expiry)
- **TOTP MFA**: Industry-standard time-based one-time passwords
- **Protected API Routes**: Middleware verification for private endpoints
- **Secure Secret Storage**: Environment variables for sensitive data
- **MongoDB Security**: Connection string encryption

## 🔒 API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/signup` | ❌ | Register new user |
| POST | `/api/auth/signin` | ❌ | Login user |  
| POST | `/api/auth/setup-mfa` | ✅ | Generate MFA QR code |
| POST | `/api/auth/verify-mfa-setup` | ✅ | Verify and enable MFA |
| POST | `/api/auth/verify-mfa` | ❌ | Verify MFA during signin |
| GET | `/api/auth/me` | ✅ | Get current user |
| POST | `/api/auth/disable-mfa` | ✅ | Disable MFA |

✅ = Requires JWT token

## 🎨 Technologies Used

### Frontend
- React 18
- React Router v6
- Axios
- React Toastify
- React Icons
- Netflix-inspired UI with CSS animations

### Backend
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- speakeasy (TOTP generation)
- qrcode (QR code generation)

### Design Features
- Horizontal scrolling carousels (like real Netflix)
- Smooth hover animations with 15% scale effect
- Dynamic header with scroll detection
- Poster overlays with play buttons
- Responsive grid layouts
- Professional color scheme (#141414, #e50914)

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running: `mongosh`
- Check connection string in `.env`
- For Atlas: Whitelist your IP (0.0.0.0/0 for dev)

### Authenticator Code Not Working
- Ensure phone time is set to automatic
- Wait for new code (changes every 30 seconds)
- Verify you're using the correct account in app
- Time synchronization is critical for TOTP!

### Port Already in Use
```bash
# Windows: Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or stop all Node processes
Stop-Process -Name node -Force

# To change backend port, update .env:
SERVER_PORT=5001
```

### JWT Errors
- Set `JWT_SECRET` in `.env`
- Restart server after changing environment variables

## 📝 Scripts

```bash
npm start          # Run both backend & frontend
npm run dev        # Same as npm start (simpler)
npm run dev:full   # Same as npm start (explicit)
npm run client     # Run only React frontend  
npm run server     # Run only Express backend
npm run build      # Create production build
```

## 🚀 Deployment

### Backend (Heroku, Railway, Render)
1. Set environment variables
2. Ensure MongoDB connection string is correct
3. Deploy server folder

### Frontend (Vercel, Netlify)
1. Build React app: `npm run build`
2. Deploy `build` folder
3. Update API URLs to production backend

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Netflix UI Design inspiration
- MongoDB for database
- speakeasy library for TOTP implementation
- React community

---

**Note**: This is a clone project for educational purposes. All Netflix branding and trademarks belong to Netflix, Inc.

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [TOTP RFC 6238](https://tools.ietf.org/html/rfc6238)
- [Express.js Guide](https://expressjs.com/)
- [JWT Introduction](https://jwt.io/introduction)
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed step-by-step setup

---

🎬 **Ready to build your own Netflix?** Follow [SETUP_GUIDE.md](SETUP_GUIDE.md) to get started!
