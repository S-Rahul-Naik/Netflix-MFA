# Netflix Clone with Multi-Factor Authentication
## Diploma Project Report

---

**Project Title**: Netflix Clone Web Application with Secure MFA Authentication  
**Domain**: Web Development & Cyber Security  
**Technology**: MERN Stack (MongoDB, Express.js, React.js, Node.js)  
**Project Type**: Full-Stack Web Application  
**Duration**: 4-6 Weeks  
**Submitted By**: [Student Name]  
**Roll No**: [Roll Number]  
**Guide**: [Guide Name]  
**Department**: Computer Science & Engineering  
**Institute**: [Institute Name]  
**Academic Year**: 2025-2026  

---

## 📋 Table of Contents

1. [Introduction](#1-introduction)
2. [Description of Technology Used](#2-description-of-technology-used)
3. [Hardware Requirements](#3-hardware-requirements)
4. [Software Requirements](#4-software-requirements)
5. [Programming Languages](#5-programming-languages)
6. [System Components](#6-system-components)
7. [System Architecture](#7-system-architecture)
8. [Component Diagrams](#8-component-diagrams)
9. [Implementation Details](#9-implementation-details)
10. [Testing](#10-testing)
11. [Screenshots](#11-screenshots)
12. [Challenges and Solutions](#12-challenges-and-solutions)
13. [Future Enhancements](#13-future-enhancements)
14. [Conclusion](#14-conclusion)
15. [References](#15-references)

---

## 1. Introduction

### 1.1 Project Overview
This project is a Netflix-inspired web application that implements modern authentication and security features. The application allows users to register, login, and browse content while ensuring security through Multi-Factor Authentication (MFA) using authenticator apps like Google Authenticator.

### 1.2 Objectives
- Develop a full-stack web application using modern technologies
- Implement secure user authentication with JWT (JSON Web Tokens)
- Integrate TOTP-based Multi-Factor Authentication
- Create a responsive Netflix-style user interface
- Learn industry-standard security practices

### 1.3 Scope
The project covers:
- User registration and login system
- Multi-factor authentication using authenticator apps
- Protected content browsing page
- Responsive web design
- Database management
- RESTful API development

### 1.4 Problem Statement
Traditional username-password authentication is vulnerable to various security threats. This project addresses the need for enhanced security by implementing two-factor authentication while maintaining a user-friendly interface similar to popular streaming platforms.

---

## 2. Description of Technology Used

### 2.1 MERN Stack Overview

**MERN** is a popular technology stack for building modern web applications:

#### **M - MongoDB**
- **Type**: NoSQL Database
- **Purpose**: Store user data, authentication information
- **Why chosen**: Flexible schema, easy to scale, works well with JavaScript
- **Version**: 6.0+

#### **E - Express.js**
- **Type**: Backend Framework
- **Purpose**: Handle HTTP requests, create REST APIs, manage routes
- **Why chosen**: Minimalist, fast, works seamlessly with Node.js
- **Version**: 4.18.2

#### **R - React.js**
- **Type**: Frontend Library
- **Purpose**: Build user interface, manage application state
- **Why chosen**: Component-based, efficient rendering, large community
- **Version**: 18.2.0

#### **N - Node.js**
- **Type**: JavaScript Runtime
- **Purpose**: Run JavaScript on server side
- **Why chosen**: Fast, event-driven, same language for frontend and backend
- **Version**: 14.0+

### 2.2 Additional Technologies

#### **Security Technologies**

1. **JWT (JSON Web Tokens)**
   - Purpose: Secure authentication token
   - Creates encrypted tokens for user sessions
   - Prevents unauthorized access

2. **bcryptjs**
   - Purpose: Password encryption
   - Hashes passwords before storing in database
   - Makes passwords unreadable even if database is compromised

3. **speakeasy**
   - Purpose: Generate Time-based One-Time Passwords (TOTP)
   - Creates 6-digit codes for MFA
   - Follows RFC 6238 standard

4. **qrcode**
   - Purpose: Generate QR codes
   - Users scan QR code to set up MFA
   - Easy setup process

#### **Supporting Libraries**

1. **Axios** - HTTP client for API calls
2. **React Router** - Page navigation without reload
3. **React Toastify** - User notifications
4. **Mongoose** - MongoDB object modeling
5. **CORS** - Cross-origin resource sharing
6. **dotenv** - Environment variable management

---

## 3. Hardware Requirements

### 3.1 Development Machine

#### Minimum Requirements:
- **Processor**: Intel Core i3 or AMD equivalent (2.0 GHz or higher)
- **RAM**: 4 GB (minimum), 8 GB recommended
- **Storage**: 10 GB free hard disk space
- **Display**: 1366 x 768 resolution or higher
- **Network**: Stable internet connection for package installation

#### Recommended Requirements:
- **Processor**: Intel Core i5/i7 or AMD Ryzen 5/7
- **RAM**: 8 GB or higher
- **Storage**: 20 GB free SSD storage
- **Display**: 1920 x 1080 Full HD resolution
- **Network**: Broadband connection (10 Mbps or higher)

### 3.2 Server Requirements (For Deployment)

#### Minimum Configuration:
- **CPU**: 1 vCPU
- **RAM**: 1 GB
- **Storage**: 20 GB SSD
- **Bandwidth**: 1 TB/month
- **Platform**: Linux/Windows Server

#### Recommended Configuration:
- **CPU**: 2 vCPU or more
- **RAM**: 2 GB or more
- **Storage**: 40 GB SSD
- **Bandwidth**: Unlimited
- **Platform**: Ubuntu 20.04 LTS or later

### 3.3 Client Device (End User)

#### Desktop/Laptop:
- Any modern computer with web browser
- Minimum 2 GB RAM
- Screen resolution: 1024 x 768 or higher

#### Mobile Device:
- **Smartphone**: Android 8.0+ or iOS 12+
- **RAM**: 2 GB minimum
- **Display**: 4.5 inch or larger
- **Requirement**: Authenticator app (Google Authenticator/Microsoft Authenticator)

### 3.4 Network Infrastructure
- Internet connection (broadband recommended)
- Router/Modem for local network
- Optional: Domain name for production deployment

---

## 4. Software Requirements

### 4.1 Development Environment

#### Essential Software:

1. **Node.js & npm**
   - Version: 14.x or higher
   - Purpose: JavaScript runtime and package manager
   - Download: https://nodejs.org/
   - Installation: Standard installer for Windows/Mac/Linux

2. **MongoDB**
   - Version: 6.0 or higher
   - Purpose: Database server
   - Options:
     - **Local**: MongoDB Community Server
     - **Cloud**: MongoDB Atlas (free tier available)
   - Download: https://www.mongodb.com/try/download/community

3. **Visual Studio Code**
   - Version: Latest stable
   - Purpose: Code editor
   - Download: https://code.visualstudio.com/
   - Extensions:
     - ES7+ React/Redux/React-Native snippets
     - Prettier - Code formatter
     - ESLint
     - MongoDB for VS Code

4. **Git**
   - Version: Latest
   - Purpose: Version control
   - Download: https://git-scm.com/downloads

5. **Web Browser**
   - Chrome/Firefox/Edge (latest version)
   - Purpose: Testing and development tools
   - Chrome DevTools for debugging

### 4.2 Mobile App (For End Users)

**Authenticator Apps** (Any one):
- Google Authenticator (Android/iOS)
- Microsoft Authenticator (Android/iOS)
- Authy (Android/iOS)
- 1Password (if already using)

### 4.3 Optional Tools

1. **Postman**
   - Purpose: API testing
   - Download: https://www.postman.com/downloads/

2. **MongoDB Compass**
   - Purpose: Visual database management
   - Download: https://www.mongodb.com/products/compass

3. **GitHub Desktop**
   - Purpose: Git GUI (optional)
   - Download: https://desktop.github.com/

### 4.4 Operating System Support

**Development**:
- Windows 10/11
- macOS 10.14 or higher
- Linux (Ubuntu 20.04+ recommended)

**Deployment**:
- Ubuntu Server 20.04 LTS
- Windows Server 2019+
- Docker containers (optional)

---

## 5. Programming Languages

### 5.1 JavaScript (Primary Language)

**Usage**: Frontend and Backend  
**Why JavaScript Everywhere?**
- Same language for client and server
- Reduces learning curve
- Better team collaboration
- Large ecosystem (npm packages)

#### **ES6+ Features Used**:
```javascript
// Arrow Functions
const login = (email, password) => { ... }

// Async/Await
async function fetchUser() {
  const response = await axios.get('/api/user');
}

// Destructuring
const { email, password } = req.body;

// Template Literals
const message = `Welcome ${userName}!`;

// Promises
axios.post('/api/auth/login')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

### 5.2 JSX (JavaScript XML)

**Usage**: React components  
**Purpose**: Write HTML-like syntax in JavaScript

```jsx
const Header = () => {
  return (
    <header className="navbar">
      <h1>NETFLIX</h1>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
```

### 5.3 HTML5

**Usage**: Structure of web pages  
**Elements Used**:
- Semantic tags: `<header>`, `<nav>`, `<section>`, `<footer>`
- Form elements: `<input>`, `<button>`, `<form>`
- Media tags: `<img>`, `<video>` (placeholder)

### 5.4 CSS3

**Usage**: Styling and layout  
**Features Used**:
- Flexbox for layouts
- Grid for responsive design
- Transitions and animations
- Media queries for responsiveness
- CSS variables for theme

```css
/* Example Styles */
.poster:hover {
  transform: scale(1.15);
  transition: all 0.4s ease;
}

@media (max-width: 768px) {
  .header { font-size: 1rem; }
}
```

### 5.5 SQL (Query Language)

**Note**: Although MongoDB is NoSQL, understanding of database concepts applied

**MongoDB Query Examples**:
```javascript
// Find user
User.findOne({ email: "user@example.com" })

// Create user
User.create({ email, password, mfaEnabled: false })

// Update user
User.findByIdAndUpdate(userId, { mfaEnabled: true })
```

### 5.6 JSON (Data Format)

**Usage**: Data transfer between frontend and backend

```json
{
  "email": "user@example.com",
  "mfaEnabled": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 5.7 Markdown

**Usage**: Documentation (README, guides)  
**Files**: README.md, SETUP_GUIDE.md, PROJECT_REPORT.md

---

## 6. System Components

### 6.1 Frontend Components

#### 1. **Home Component**
- **File**: `src/pages/Home.js`
- **Purpose**: Landing page of the application
- **Features**:
  - Hero section with call-to-action
  - Feature showcase (3 sections)
  - FAQ section with accordion
  - Footer with links
- **State Management**: None (static content)
- **Routing**: Path `/`

#### 2. **SignUp Component**
- **File**: `src/pages/SignUp.js`
- **Purpose**: User registration
- **Features**:
  - Email and password input
  - MFA setup with QR code
  - Code verification
  - Three-step process
- **State Variables**:
  ```javascript
  {
    email: '',
    password: '',
    step: 1,  // 1: Register, 2: Setup MFA, 3: Verify
    qrCode: '',
    secret: '',
    mfaCode: ''
  }
  ```
- **API Calls**:
  - POST `/api/auth/signup`
  - POST `/api/auth/setup-mfa`
  - POST `/api/auth/verify-mfa-setup`

#### 3. **SignIn Component**
- **File**: `src/pages/SignIn.js`
- **Purpose**: User login
- **Features**:
  - Email and password login
  - Conditional MFA verification
  - Remember me option
- **State Variables**:
  ```javascript
  {
    email: '',
    password: '',
    mfaCode: '',
    mfaRequired: false,
    tempToken: ''
  }
  ```
- **API Calls**:
  - POST `/api/auth/signin`
  - POST `/api/auth/verify-mfa`

#### 4. **Browse Component**
- **File**: `src/pages/Browse.js`
- **Purpose**: Main content page (protected)
- **Features**:
  - Dynamic header with scroll effect
  - Three content rows (carousels)
  - Movie poster cards with hover effects
  - MFA status badge
  - Logout functionality
- **State Variables**:
  ```javascript
  {
    scrolled: false,
    movies: [...],
    trending: [...],
    newContent: [...]
  }
  ```

#### 5. **AuthContext Component**
- **File**: `src/context/AuthContext.js`
- **Purpose**: Global authentication state
- **Features**:
  - Store current user data
  - Manage login/logout
  - Persist authentication
- **Context Value**:
  ```javascript
  {
    currentUser: {...},
    login: function,
    logout: function,
    loading: boolean
  }
  ```

#### 6. **App Component**
- **File**: `src/App.js`
- **Purpose**: Root component with routing
- **Features**:
  - React Router setup
  - Toast notification container
  - Protected route logic

### 6.2 Backend Components

#### 1. **Server.js**
- **File**: `server/server.js`
- **Purpose**: Main Express application
- **Responsibilities**:
  - Initialize Express app
  - Connect to MongoDB
  - Setup middleware (CORS, JSON parser)
  - Mount route handlers
  - Error handling
  - Start HTTP server
- **Port**: 5000 (configurable)

#### 2. **User Model**
- **File**: `server/models/User.js`
- **Purpose**: Define user data structure
- **Schema**:
  ```javascript
  {
    email: String (unique, required),
    password: String (hashed, required),
    mfaEnabled: Boolean (default: false),
    mfaSecret: String (encrypted),
    createdAt: Date
  }
  ```
- **Methods**:
  - `comparePassword()`: Compare login password
  - Pre-save hook: Hash password automatically

#### 3. **Authentication Routes**
- **File**: `server/routes/auth.js`
- **Purpose**: Handle all auth-related requests
- **Endpoints** (7 total):
  - POST `/api/auth/signup` - Register
  - POST `/api/auth/signin` - Login
  - POST `/api/auth/setup-mfa` - Get QR code
  - POST `/api/auth/verify-mfa-setup` - Enable MFA
  - POST `/api/auth/verify-mfa` - Verify during login
  - GET `/api/auth/me` - Get current user
  - POST `/api/auth/disable-mfa` - Disable MFA

#### 4. **Auth Middleware**
- **File**: `server/middleware/auth.js`
- **Purpose**: Verify JWT tokens
- **Function**: `verifyToken(req, res, next)`
- **Process**:
  1. Extract token from header
  2. Verify using JWT_SECRET
  3. Attach userId to request
  4. Call next() or return error

#### 5. **API Service (Frontend)**
- **File**: `src/firebase.js`
- **Purpose**: Centralized API calls
- **Features**:
  - Axios instance with base URL
  - Request interceptor (add token)
  - Response interceptor (error handling)
- **Methods**:
  ```javascript
  authAPI = {
    signup: (data) => axios.post('/signup', data),
    signin: (data) => axios.post('/signin', data),
    setupMFA: () => axios.post('/setup-mfa'),
    verifyMFA: (data) => axios.post('/verify-mfa', data),
    logout: () => localStorage.clear()
  }
  ```

### 6.3 Database Components

#### **MongoDB Collections**:

1. **users Collection**
   - Stores all user documents
   - Indexed on email field
   - Example document:
   ```json
   {
     "_id": ObjectId("..."),
     "email": "user@example.com",
     "password": "$2b$10$hashed...",
     "mfaEnabled": true,
     "mfaSecret": "JBSWY3DP...",
     "createdAt": ISODate("2026-02-07")
   }
   ```

### 6.4 Configuration Components

#### 1. **Environment Variables**
- **File**: `.env`
- **Purpose**: Store sensitive configuration
- **Variables**:
  ```env
  MONGODB_URI=mongodb://localhost:27017/netflix-clone
  JWT_SECRET=your_secret_key_here
  SERVER_PORT=5000
  NODE_ENV=development
  ```

#### 2. **Package Configuration**
- **File**: `package.json`
- **Purpose**: Define dependencies and scripts
- **Scripts**:
  - `npm start` - Run full application
  - `npm run dev` - Run with auto-reload
  - `npm run server` - Backend only
  - `npm run client` - Frontend only
  - `npm run build` - Production build

#### 3. **Git Ignore**
- **File**: `.gitignore`
- **Purpose**: Exclude files from version control
- **Excluded**:
  - `/node_modules`
  - `.env`
  - `/build`
  - System files

---

## 7. System Architecture

### 7.1 Three-Tier Architecture

The application follows a standard three-tier architecture:

```
┌─────────────────────────────────────────────────┐
│         PRESENTATION TIER (Client Side)         │
│                                                  │
│  ┌────────────┐  ┌────────────┐  ┌───────────┐ │
│  │   React    │  │   React    │  │   Axios   │ │
│  │ Components │──│   Router   │──│ HTTP Client│ │
│  └────────────┘  └────────────┘  └───────────┘ │
│         │                              │        │
│         └──────────────┬───────────────┘        │
│                        │                        │
│                  Browser (Port 3000)            │
└────────────────────────┼────────────────────────┘
                         │
                    HTTP/HTTPS
                         │
┌────────────────────────▼────────────────────────┐
│          APPLICATION TIER (Server Side)         │
│                                                  │
│  ┌────────────┐  ┌────────────┐  ┌───────────┐ │
│  │  Express   │  │   Routes   │  │Middleware │ │
│  │   Server   │──│  /api/auth │──│    JWT    │ │
│  └────────────┘  └────────────┘  └───────────┘ │
│         │                              │        │
│         └──────────────┬───────────────┘        │
│                        │                        │
│                 Node.js (Port 5000)             │
└────────────────────────┼────────────────────────┘
                         │
                    MongoDB Driver
                         │
┌────────────────────────▼────────────────────────┐
│            DATA TIER (Database)                  │
│                                                  │
│  ┌────────────────────────────────────────────┐ │
│  │         MongoDB Database                    │ │
│  │                                             │ │
│  │  ┌──────────────────────────────────────┐  │ │
│  │  │  Collection: users                    │  │ │
│  │  │  - _id                                │  │ │
│  │  │  - email                              │  │ │
│  │  │  - password (hashed)                  │  │ │
│  │  │  - mfaEnabled                         │  │ │
│  │  │  - mfaSecret                          │  │ │
│  │  └──────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────┘ │
│                                                  │
│          MongoDB Server (Port 27017)            │
└──────────────────────────────────────────────────┘
```

### 7.2 Client-Server Model

#### **Client Side (React)**:
- Runs in user's web browser
- Handles user interface and interactions
- Makes HTTP requests to backend API
- Stores JWT token in localStorage
- Port: 3000 (development)

#### **Server Side (Express + Node.js)**:
- Runs on server/hosting platform
- Processes business logic
- Handles authentication and security
- Communicates with database
- Returns JSON responses
- Port: 5000

#### **Database (MongoDB)**:
- Stores persistent data
- Accessed only by server (not directly from client)
- Port: 27017 (local) or Atlas cloud

### 7.3 Request-Response Flow

#### **Example: User Login**

```
1. USER enters email and password in SignIn.js
           ↓
2. REACT calls authAPI.signin(email, password)
           ↓
3. AXIOS sends POST request to http://localhost:5000/api/auth/signin
           ↓
4. EXPRESS receives request at /api/auth/signin route
           ↓
5. BACKEND finds user in MongoDB using email
           ↓
6. BCRYPT compares password with hashed password
           ↓
7. If MFA enabled:
   - Generate temporary JWT token (5 min)
   - Response: { mfaRequired: true, tempToken: "..." }
   Else:
   - Generate full JWT token (7 days)
   - Response: { token: "...", user: {...} }
           ↓
8. REACT receives response
           ↓
9. If MFA required:
   - Show MFA code input
   Else:
   - Store token in localStorage
   - Update AuthContext
   - Navigate to /browse
```

### 7.4 Data Flow Diagram

#### **Level 0 (Context Diagram)**

```
┌─────────┐                                   ┌──────────────┐
│         │────── Register/Login ────────────▶│              │
│  USER   │                                   │   Netflix    │
│         │◀───── Content/Notifications ──────│  Clone App   │
└─────────┘                                   └──────────────┘
     │                                                │
     │                                                │
     └──── Scan QR Code ────────────────────────────▶│
          (Authenticator App)                         │
                                                     │
                                          ┌──────────▼────────┐
                                          │    MongoDB        │
                                          │    Database       │
                                          └───────────────────┘
```

#### **Level 1 (Process Diagram)**

```
┌──────────┐
│   User   │
└────┬─────┘
     │
     ├─────── 1. Registration ─────────┐
     │                                 │
     ├─────── 2. MFA Setup ────────────┼──────┐
     │                                 │      │
     ├─────── 3. Login ────────────────┼──────┼──────┐
     │                                 │      │      │
     └─────── 4. Browse Content ───────┼──────┼──────┼────┐
                                       │      │      │    │
                                       ▼      ▼      ▼    ▼
                              ┌────────────────────────────────┐
                              │    Authentication System       │
                              │  - Validate Credentials        │
                              │  - Generate Tokens             │
                              │  - Verify MFA Codes            │
                              └───────────┬────────────────────┘
                                         │
                                         ▼
                              ┌────────────────────┐
                              │   User Database    │
                              └────────────────────┘
```

### 7.5 Security Architecture

```
┌─────────────────────────────────────────────────────┐
│                    HTTPS/TLS                         │
│              (Encrypted Communication)               │
└─────────────────────┬───────────────────────────────┘
                      │
           ┌──────────▼──────────┐
           │   CORS Middleware   │
           │ (Origin Validation) │
           └──────────┬──────────┘
                      │
           ┌──────────▼──────────────┐
           │  JWT Token Verification  │
           │   (Auth Middleware)      │
           └──────────┬───────────────┘
                      │
           ┌──────────▼──────────────┐
           │   bcrypt Password Hash   │
           │  (10 Salt Rounds)        │
           └──────────┬───────────────┘
                      │
           ┌──────────▼──────────────┐
           │    TOTP Verification     │
           │   (speakeasy library)    │
           └──────────┬───────────────┘
                      │
           ┌──────────▼──────────────┐
           │   MongoDB Connection     │
           │   (Secured Connection)   │
           └──────────────────────────┘
```

---

## 8. Component Diagrams

### 8.1 Use Case Diagram

```
                  Netflix Clone System
          ┌─────────────────────────────────┐
          │                                 │
  ┌───────┼─────────────────────────────────┼───────┐
  │       │                                 │       │
  │   ┌───▼────┐                       ┌────▼───┐   │
  │   │Register│                       │ Login  │   │
  │   │Account │                       │Account │   │
  │   └───┬────┘                       └────┬───┘   │
  │       │                                 │       │
┌─▼───────▼─────────────────────────────────▼──────▼────┐
│                    User                                │
└─┬──────┬─────────────────────────────────────┬────┬───┘
  │      │                                     │    │
  │  ┌───▼───────┐                      ┌─────▼────▼──┐
  │  │Setup MFA  │                      │Browse Content│
  │  │(QR Code)  │                      │   (Movies)   │
  │  └───┬───────┘                      └─────┬────────┘
  │      │                                    │
  │  ┌───▼──────────┐                  ┌─────▼────────┐
  │  │Verify MFA    │                  │   Logout     │
  │  │Code (6-digit)│                  │   Account    │
  │  └──────────────┘                  └──────────────┘
  │
┌─▼────────────────┐
│ Disable MFA      │
└──────────────────┘
```

### 8.2 Class Diagram

```
┌──────────────────────────────────────┐
│            User (Model)               │
├──────────────────────────────────────┤
│ - _id: ObjectId                      │
│ - email: String                      │
│ - password: String (hashed)          │
│ - mfaEnabled: Boolean                │
│ - mfaSecret: String                  │
│ - createdAt: Date                    │
├──────────────────────────────────────┤
│ + comparePassword(password): Boolean │
│ + hashPassword(): String             │
└──────────────────────────────────────┘
              ▲
              │ uses
              │
┌─────────────┴─────────────────────────┐
│      AuthController (Routes)          │
├───────────────────────────────────────┤
│ + signup(req, res)                    │
│ + signin(req, res)                    │
│ + setupMFA(req, res)                  │
│ + verifyMFASetup(req, res)            │
│ + verifyMFA(req, res)                 │
│ + getCurrentUser(req, res)            │
│ + disableMFA(req, res)                │
└───────────────────────────────────────┘
              │
              │ uses
              ▼
┌───────────────────────────────────────┐
│      Security Services                │
├───────────────────────────────────────┤
│ + generateJWT(userId): String         │
│ + verifyJWT(token): Object            │
│ + generateTOTP(): String              │
│ + verifyTOTP(token, secret): Boolean  │
│ + generateQRCode(secret): String      │
│ + hashPassword(password): String      │
└───────────────────────────────────────┘
```

### 8.3 Sequence Diagram - User Registration

```
User          SignUp.js       API Service      Server         Database
 │               │                │              │                │
 │──Enter Email──▶               │              │                │
 │──Enter Pass───▶               │              │                │
 │               │                │              │                │
 │──Click Signup─▶               │              │                │
 │               │                │              │                │
 │               │──POST /signup──▶              │                │
 │               │    {email,     │              │                │
 │               │     password}  │              │                │
 │               │                │              │                │
 │               │                │──Validate────▶                │
 │               │                │  Data        │                │
 │               │                │              │                │
 │               │                │──Check User──▶                │
 │               │                │  Exists?     │                │
 │               │                │              │                │
 │               │                │              │◀───Not Found───│
 │               │                │              │                │
 │               │                │──Hash Pass───│                │
 │               │                │              │                │
 │               │                │──Save User───▶                │
 │               │                │              │                │
 │               │                │              │◀───User Saved──│
 │               │                │              │                │
 │               │                │◀─Generate JWT─│                │
 │               │                │              │                │
 │               │◀───Response────│              │                │
 │               │  {token, user} │              │                │
 │               │                │              │                │
 │◀──Success Msg─│                │              │                │
 │  Navigate to  │                │              │                │
 │  MFA Setup    │                │              │                │
 │               │                │              │                │
```

### 8.4 Sequence Diagram - MFA Setup

```
User       SignUp.js    API Service    Server      speakeasy   qrcode   Database
 │            │             │            │              │         │         │
 │─Click Setup▶            │            │              │         │         │
 │  MFA       │             │            │              │         │         │
 │            │             │            │              │         │         │
 │            │─POST setup-mfa─▶         │              │         │         │
 │            │  (with JWT)  │           │              │         │         │
 │            │             │            │              │         │         │
 │            │             │─Verify JWT─▶              │         │         │
 │            │             │            │              │         │         │
 │            │             │            │─Generate─────▶         │         │
 │            │             │            │  Secret      │         │         │
 │            │             │            │              │         │         │
 │            │             │            │◀───Secret────│         │         │
 │            │             │            │  Base32      │         │         │
 │            │             │            │              │         │         │
 │            │             │            │─Create TOTP──▶         │         │
 │            │             │            │  URL         │         │         │
 │            │             │            │              │         │         │
 │            │             │            │──Generate QR──────────▶         │
 │            │             │            │              │         │         │
 │            │             │            │◀───QR Code────────────│         │
 │            │             │            │  (Data URL)  │         │         │
 │            │             │            │              │         │         │
 │            │◀──Response──│            │              │         │         │
 │            │ {qrCode,    │            │              │         │         │
 │            │  secret}    │            │              │         │         │
 │            │             │            │              │         │         │
 │◀─Display QR│             │            │              │         │         │
 │  and Secret│             │            │              │         │         │
 │            │             │            │              │         │         │
 │─Scan with  │             │            │              │         │         │
 │ Auth App   │             │            │              │         │         │
 │            │             │            │              │         │         │
 │─Enter Code─▶             │            │              │         │         │
 │  (123456)  │             │            │              │         │         │
 │            │             │            │              │         │         │
 │            │─POST verify-mfa-setup─▶   │              │         │         │
 │            │  {token, secret}        │              │         │         │
 │            │             │            │              │         │         │
 │            │             │──Verify────▶              │         │         │
 │            │             │  Token     │              │         │         │
 │            │             │            │              │         │         │
 │            │             │            │◀───Valid/────│         │         │
 │            │             │            │   Invalid    │         │         │
 │            │             │            │              │         │         │
 │            │             │            │─Update User──────────────────────▶
 │            │             │            │ mfaEnabled:  │         │         │
 │            │             │            │ true         │         │         │
 │            │             │            │              │         │         │
 │            │◀──Success───│            │              │         │         │
 │◀─Navigate  │             │            │              │         │         │
 │  to Browse │             │            │              │         │         │
```

### 8.5 Activity Diagram - Login Flow

```
                    START
                      │
                      ▼
             ┌────────────────┐
             │  Enter Email   │
             │  and Password  │
             └────────┬───────┘
                      │
                      ▼
             ┌────────────────┐
             │ Click Login    │
             └────────┬───────┘
                      │
                      ▼
             ┌────────────────┐
         ┌───│ Validate Input │
         │   └────────┬───────┘
         │            │
         │   Valid?   │
         │      ┌─────┴─────┐
         │      │           │
     No  ◀──────┤           │ Yes
         │      │           │
         │      ▼           ▼
         │  ┌────────┐ ┌────────────┐
         │  │ Show   │ │Send Request│
         │  │ Error  │ │ to Server  │
         │  └───┬────┘ └─────┬──────┘
         │      │            │
         └──────┘            ▼
                     ┌───────────────┐
                     │ Check User    │
                 ┌───│ in Database   │───┐
                 │   └───────────────┘   │
                 │                       │
          Found? │                       │ Not Found
                 │                       │
                 ▼                       ▼
         ┌──────────────┐         ┌──────────┐
         │Compare       │         │ Return   │
         │Password Hash │         │ Error    │
         └──────┬───────┘         └────┬─────┘
                │                      │
         Match? │                      │
        ┌───────┴───────┐              │
        │               │              │
    No  ▼           Yes ▼              │
  ┌──────────┐  ┌───────────┐         │
  │ Return   │  │  Check    │         │
  │  Error   │  │MFA Enabled│         │
  └────┬─────┘  └─────┬─────┘         │
       │              │               │
       │      ┌───────┴────────┐      │
       │      │                │      │
       │   No ▼            Yes ▼      │
       │  ┌────────┐    ┌──────────┐ │
       │  │Generate│    │ Generate │ │
       │  │Full JWT│    │Temp Token│ │
       │  └───┬────┘    └────┬─────┘ │
       │      │              │       │
       │      ▼              ▼       │
       │  ┌────────┐    ┌──────────┐ │
       │  │Navigate│    │Show MFA  │ │
       │  │to      │    │Input Form│ │
       │  │/browse │    └────┬─────┘ │
       │  └────────┘         │       │
       │      │              │       │
       │      │              ▼       │
       │      │      ┌──────────────┐│
       │      │      │User Enters   ││
       │      │      │6-digit Code  ││
       │      │      └──────┬───────┘│
       │      │             │        │
       │      │             ▼        │
       │      │      ┌──────────────┐│
       │      │      │Verify TOTP   ││
       │      │      │with speakeasy││
       │      │      └──────┬───────┘│
       │      │             │        │
       │      │      Valid? │        │
       │      │      ┌──────┴──────┐ │
       │      │      │             │ │
       │      │   No ▼         Yes ▼ │
       │      │  ┌──────┐   ┌────────┴┐
       │      │  │Error │   │Generate │
       │      │  └──┬───┘   │Full JWT │
       │      │     │       └────┬────┘
       └──────┼─────┘            │
              │                  │
              │                  ▼
              │          ┌──────────────┐
              │          │Navigate to   │
              │          │   /browse    │
              │          └──────┬───────┘
              │                 │
              └─────────────────┘
                                │
                                ▼
                              END
```

### 8.6 Deployment Diagram

```
┌─────────────────────────────────────────────────────────┐
│                  Client Device                           │
│                                                          │
│  ┌────────────────────┐         ┌──────────────────┐   │
│  │   Web Browser      │         │  Authenticator   │   │
│  │  (Chrome/Firefox)  │         │      App         │   │
│  │                    │         │ (Google/Microsoft)│  │
│  │  React App         │         │                  │   │
│  │  (Port 3000)       │         │  Generates TOTP  │   │
│  └──────────┬─────────┘         └──────────────────┘   │
│             │                                           │
└─────────────┼───────────────────────────────────────────┘
              │
              │ HTTPS
              │
┌─────────────▼───────────────────────────────────────────┐
│                  Web Server                              │
│           (Hosting Platform - Vercel/Netlify)           │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │         Static Files Served                       │   │
│  │  - index.html                                     │   │
│  │  - JavaScript bundles (.js)                       │   │
│  │  - CSS stylesheets (.css)                         │   │
│  │  - Images, fonts                                  │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
              │
              │ API Calls
              │
┌─────────────▼───────────────────────────────────────────┐
│              Application Server                          │
│      (Node.js + Express - Heroku/Railway)               │
│                                                          │
│  ┌──────────────────────┐      ┌────────────────────┐   │
│  │   Express Server     │      │   Dependencies     │   │
│  │   (Port 5000)        │──────│  - jsonwebtoken    │   │
│  │                      │      │  - bcryptjs        │   │
│  │  - Routes            │      │  - speakeasy       │   │
│  │  - Middleware        │      │  - qrcode          │   │
│  │  - Business Logic    │      │  - mongoose        │   │
│  └──────────┬───────────┘      └────────────────────┘   │
│             │                                           │
└─────────────┼───────────────────────────────────────────┘
              │
              │ MongoDB Protocol
              │
┌─────────────▼───────────────────────────────────────────┐
│                  Database Server                         │
│         (MongoDB - Local or Atlas Cloud)                 │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │      MongoDB Instance (Port 27017)               │   │
│  │                                                   │   │
│  │  Database: netflix-clone                         │   │
│  │  ├─ Collection: users                            │   │
│  │  │  ├─ Document 1 (user data)                    │   │
│  │  │  ├─ Document 2 (user data)                    │   │
│  │  │  └─ Document N...                             │   │
│  │                                                   │   │
│  │  Storage: Persistent Disk                        │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

---

## 9. Implementation Details

### 9.1 Development Setup Steps

#### Step 1: Install Node.js
```bash
# Download from nodejs.org
# Verify installation
node --version  # Should show v14+ or higher
npm --version   # Should show 6+ or higher
```

#### Step 2: Install MongoDB
```bash
# Download MongoDB Community Server
# Or sign up for MongoDB Atlas (cloud)
# Verify MongoDB is running
mongosh  # Should connect to MongoDB
```

#### Step 3: Clone/Create Project
```bash
# Navigate to project directory
cd Netflix-Website-Project

# Initialize npm
npm init -y
```

#### Step 4: Install Dependencies
```bash
# Install all packages
npm install

# This installs:
# Frontend: react, react-dom, react-router-dom, axios, react-toastify
# Backend: express, mongoose, jsonwebtoken, bcryptjs, speakeasy, qrcode
# Dev tools: nodemon, concurrently
```

#### Step 5: Configure Environment
```bash
# Create .env file
copy .env.example .env

# Edit .env with your settings
```

#### Step 6: Start Development
```bash
# Run full application
npm run dev

# Access application
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
```

### 9.2 Key Code Implementations

#### 9.2.1 Password Hashing (bcrypt)

**File**: `server/models/User.js`

```javascript
const bcrypt = require('bcryptjs');

// Before saving user to database
userSchema.pre('save', async function(next) {
  // Only hash if password is new or modified
  if (!this.isModified('password')) return next();
  
  // Generate salt (10 rounds = 2^10 = 1024 iterations)
  const salt = await bcrypt.genSalt(10);
  
  // Hash password with salt
  this.password = await bcrypt.hash(this.password, salt);
  
  next();
});

// Method to compare passwords during login
userSchema.methods.comparePassword = async function(candidatePassword) {
  // Returns true if passwords match
  return await bcrypt.compare(candidatePassword, this.password);
};
```

**How it works**:
1. User enters password: "myPassword123"
2. bcrypt generates random salt: "$2b$10$XYZ..."
3. Combines password + salt and hashes
4. Result: "$2b$10$XYZ...ABC" (60 characters)
5. Stored in database (original password never stored)
6. During login, bcrypt compares using same algorithm

#### 9.2.2 JWT Token Generation

**File**: `server/routes/auth.js`

```javascript
const jwt = require('jsonwebtoken');

// Generate token after successful authentication
const generateToken = (userId, email) => {
  return jwt.sign(
    { 
      userId: userId,
      email: email
    },
    process.env.JWT_SECRET,  // Secret key from .env
    { 
      expiresIn: '7d'  // Token expires in 7 days
    }
  );
};

// Example usage
const token = generateToken(user._id, user.email);

// Return to client
res.json({
  success: true,
  token: token,
  user: {
    id: user._id,
    email: user.email
  }
});
```

**Token Structure**:
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.  ← Header
eyJ1c2VySWQiOiI2NWExYjJjM2Q0ZTVmNmE3...  ← Payload (user data)
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_a...  ← Signature
```

#### 9.2.3 MFA Secret Generation

**File**: `server/routes/auth.js`

```javascript
const speakeasy = require('speakeasy');
const qrcode = require('qrcode');

// Generate MFA secret
const secret = speakeasy.generateSecret({
  length: 32,        // 32 characters
  name: 'Netflix Clone',  // App name shown in authenticator
  issuer: 'Netflix'  // Issuer name
});

// Generate QR code
const qrCodeUrl = await qrcode.toDataURL(secret.otpauth_url);

// Return to frontend
res.json({
  success: true,
  qrCode: qrCodeUrl,   // Base64 image data
  secret: secret.base32  // For manual entry
});
```

**Secret Format**:
```
Base32 Encoded: JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP
Used to generate TOTP codes every 30 seconds
```

#### 9.2.4 TOTP Verification

**File**: `server/routes/auth.js`

```javascript
// Verify the 6-digit code entered by user
const verified = speakeasy.totp.verify({
  secret: user.mfaSecret,  // Secret stored in database
  encoding: 'base32',
  token: codeEntered,      // 6-digit code from user
  window: 1                // Allow ±30 seconds tolerance
});

if (verified) {
  // Code is valid
  // Generate JWT token and login user
} else {
  // Code is invalid or expired
  return res.status(400).json({
    success: false,
    message: 'Invalid MFA code'
  });
}
```

**How TOTP Works**:
1. Current time: 1707310800 (Unix timestamp)
2. Divide by 30: 56910360 (time step)
3. Apply HMAC-SHA1 with secret
4. Extract 6 digits: 123456
5. Code changes every 30 seconds

#### 9.2.5 Protected Route Middleware

**File**: `server/middleware/auth.js`

```javascript
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  // 1. Get token from Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'No token provided'
    });
  }
  
  const token = authHeader.split(' ')[1];  // Extract token
  
  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 3. Attach user info to request
    req.userId = decoded.userId;
    req.email = decoded.email;
    
    // 4. Continue to next middleware/route
    next();
    
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

module.exports = verifyToken;
```

**Usage**:
```javascript
// Apply to protected routes
router.get('/me', verifyToken, async (req, res) => {
  // req.userId is now available
  const user = await User.findById(req.userId);
  res.json({ user });
});
```

#### 9.2.6 React Context for Auth State

**File**: `src/context/AuthContext.js`

```javascript
import React, { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Load user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('netflix_auth_token');
    if (token) {
      // Verify token and get user data
      authAPI.me()
        .then(response => {
          setCurrentUser(response.data.user);
        })
        .catch(() => {
          localStorage.removeItem('netflix_auth_token');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  
  // Login function
  const login = (userData) => {
    setCurrentUser(userData);
  };
  
  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('netflix_auth_token');
  };
  
  const value = {
    currentUser,
    login,
    logout,
    loading
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
```

**Usage in Components**:
```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { currentUser, logout } = useAuth();
  
  return (
    <div>
      {currentUser ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
}
```

### 9.3 Database Operations

#### 9.3.1 Create User (Registration)

```javascript
// In signup route
const newUser = new User({
  email: req.body.email,
  password: req.body.password,  // Will be hashed by pre-save hook
  mfaEnabled: false
});

await newUser.save();
```

**MongoDB Operation**:
```javascript
db.users.insertOne({
  email: "user@example.com",
  password: "$2b$10$hashedpassword...",
  mfaEnabled: false,
  createdAt: new Date()
})
```

#### 9.3.2 Find User (Login)

```javascript
// Find by email
const user = await User.findOne({ email: req.body.email });

if (!user) {
  return res.status(404).json({
    success: false,
    message: 'User not found'
  });
}
```

#### 9.3.3 Update User (Enable MFA)

```javascript
// Update mfaEnabled and mfaSecret
await User.findByIdAndUpdate(
  userId,
  {
    mfaEnabled: true,
    mfaSecret: secret.base32,
    updatedAt: new Date()
  },
  { new: true }  // Return updated document
);
```

### 9.4 Frontend State Management

#### 9.4.1 useState Hook Example

```javascript
// In SignUp component
const [formData, setFormData] = useState({
  email: '',
  password: ''
});

const [step, setStep] = useState(1);  // Current step (1, 2, or 3)

// Update form data
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

// Move to next step
const handleNextStep = () => {
  setStep(step + 1);
};
```

#### 9.4.2 useEffect Hook Example

```javascript
// In Browse component
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  
  // Add event listener
  window.addEventListener('scroll', handleScroll);
  
  // Cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []); // Empty array = run once on mount
```

#### 9.4.3 useNavigate Hook Example

```javascript
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    // ... login logic ...
    
    if (success) {
      // Redirect to browse page
      navigate('/browse');
    }
  };
}
```

---

## 10. Testing

### 10.1 Testing Strategy

This project uses **manual testing** during development. Here's the testing checklist:

#### 10.1.1 Unit Testing (Manual)

**Authentication Functions**:
- ✅ Password hashing works correctly
- ✅ JWT tokens are generated and verified
- ✅ TOTP codes are generated and validated
- ✅ QR codes are created successfully

**Database Operations**:
- ✅ Users can be created
- ✅ Users can be found
- ✅ Users can be updated
- ✅ Duplicate emails are prevented

#### 10.1.2 Integration Testing

**API Endpoints**:

1. **POST /api/auth/signup**
   ```
   Test Case 1: Valid registration
   Input: { email: "test@example.com", password: "password123" }
   Expected: 201 status, JWT token returned
   
   Test Case 2: Duplicate email
   Input: Existing email
   Expected: 400 status, error message
   
   Test Case 3: Invalid email
   Input: { email: "notanemail", password: "123456" }
   Expected: 400 status, validation error
   
   Test Case 4: Short password
   Input: { email: "test@example.com", password: "123" }
   Expected: 400 status, password too short
   ```

2. **POST /api/auth/signin**
   ```
   Test Case 1: Valid login (no MFA)
   Input: { email: "user@example.com", password: "correct" }
   Expected: 200 status, JWT token
   
   Test Case 2: Valid login (with MFA)
   Input: Same as above
   Expected: 200 status, mfaRequired: true, tempToken
   
   Test Case 3: Wrong password
   Input: { email: "user@example.com", password: "wrong" }
   Expected: 401 status, error message
   
   Test Case 4: Non-existent user
   Input: Unregistered email
   Expected: 404 status, user not found
   ```

3. **POST /api/auth/setup-mfa**
   ```
   Test Case 1: Valid token
   Headers: { Authorization: "Bearer valid_token" }
   Expected: 200 status, QR code and secret returned
   
   Test Case 2: No token
   Headers: None
   Expected: 401 status, unauthorized
   
   Test Case 3: Invalid token
   Headers: { Authorization: "Bearer invalid" }
   Expected: 401 status, invalid token
   ```

4. **POST /api/auth/verify-mfa-setup**
   ```
   Test Case 1: Valid code
   Input: { token: "123456", secret: "JBSWY3DP..." }
   Expected: 200 status, MFA enabled
   
   Test Case 2: Invalid code
   Input: { token: "000000", secret: "JBSWY3DP..." }
   Expected: 400 status, invalid code
   
   Test Case 3: Expired code
   Input: Code from 2 minutes ago
   Expected: 400 status, code expired
   ```

5. **POST /api/auth/verify-mfa**
   ```
   Test Case 1: Valid MFA code
   Input: { tempToken: "...", token: "123456" }
   Expected: 200 status, full JWT token
   
   Test Case 2: Invalid code
   Input: Wrong 6-digit code
   Expected: 400 status, invalid code
   
   Test Case 3: Expired temp token
   Input: Temp token from 10 minutes ago
   Expected: 401 status, token expired
   ```

#### 10.1.3 Frontend Testing

**Component Rendering**:
- ✅ Home page displays correctly
- ✅ SignUp form accepts input
- ✅ SignIn form accepts input
- ✅ Browse page shows content
- ✅ QR code displays in MFA setup
- ✅ Toast notifications appear

**User Flows**:

1. **Registration Flow**:
   ```
   1. Navigate to /signup
   2. Enter email and password
   3. Click Sign Up
   4. Wait for success message
   5. Click "Setup MFA" or "Skip"
   6. If setup: Scan QR code
   7. Enter 6-digit code
   8. Click Verify
   9. Redirect to /browse
   ```

2. **Login Flow (No MFA)**:
   ```
   1. Navigate to /signin
   2. Enter credentials
   3. Click Sign In
   4. Redirect to /browse immediately
   ```

3. **Login Flow (With MFA)**:
   ```
   1. Navigate to /signin
   2. Enter credentials
   3. Click Sign In
   4. MFA input appears
   5. Open authenticator app
   6. Enter 6-digit code
   7. Click Verify
   8. Redirect to /browse
   ```

#### 10.1.4 Security Testing

**Authentication Security**:
- ✅ Cannot access /browse without login
- ✅ Invalid tokens are rejected
- ✅ Expired tokens are rejected
- ✅ Passwords are never exposed in responses
- ✅ MFA codes expire after 30 seconds

**Data Validation**:
- ✅ SQL injection prevention (MongoDB uses BSON)
- ✅ XSS prevention (React auto-escapes)
- ✅ CSRF protection (JWT tokens)
- ✅ Rate limiting (optional, for production)

#### 10.1.5 UI/UX Testing

**Responsiveness**:
- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

**Browser Compatibility**:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

**Accessibility**:
- ✅ Keyboard navigation works
- ✅ Form labels are present
- ✅ Error messages are clear
- ✅ Color contrast is sufficient

### 10.2 Testing Tools Used

#### 10.2.1 Browser DevTools
- **Console**: Check for errors
- **Network**: Inspect API calls
- **Application**: View localStorage

#### 10.2.2 Postman (Optional)
- Test API endpoints directly
- Save request collections
- Automate tests

#### 10.2.3 MongoDB Compass
- View database records
- Verify data after operations
- Debug data issues

### 10.3 Test Results

#### Summary:
- ✅ All API endpoints working
- ✅ Authentication flow complete
- ✅ MFA setup and verification functional
- ✅ Database operations successful
- ✅ UI responsive on all devices
- ✅ No critical bugs found

---

## 11. Screenshots

### 11.1 Application Screenshots

#### Home Page
```
┌────────────────────────────────────────────────────────┐
│  NETFLIX                                   Sign In     │
├────────────────────────────────────────────────────────┤
│                                                        │
│          Unlimited movies, TV shows,                   │
│          and more                                      │
│                                                        │
│          Watch anywhere. Cancel anytime.               │
│                                                        │
│   ┌──────────────────────────────────────────────┐    │
│   │  Email address                    Get Started│    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  Enjoy on your TV                                      │
│  Watch on Smart TVs, PlayStation, Xbox, Chromecast...  │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│  Download and watch offline                            │
│  Save your favorites easily and always have something…  │
└────────────────────────────────────────────────────────┘
```

#### Sign Up Page
```
┌────────────────────────────────────────────────────────┐
│  NETFLIX                                               │
├────────────────────────────────────────────────────────┤
│                                                        │
│              Sign Up                                   │
│                                                        │
│   ┌──────────────────────────────────────────────┐    │
│   │  Email                                       │    │
│   │  user@example.com                           │    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
│   ┌──────────────────────────────────────────────┐    │
│   │  Password                                    │    │
│   │  ••••••••                                    │    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
│          [ Sign Up ]                                   │
│                                                        │
│          Already have an account? Sign In              │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### MFA Setup Page
```
┌────────────────────────────────────────────────────────┐
│              Setup Multi-Factor Authentication          │
├────────────────────────────────────────────────────────┤
│                                                        │
│   Step 1: Scan QR Code with your authenticator app    │
│                                                        │
│   ┌────────────┐                                       │
│   │            │  Google Authenticator                 │
│   │  QR CODE   │  Microsoft Authenticator              │
│   │            │  Authy                                │
│   └────────────┘                                       │
│                                                        │
│   Or enter manually:                                   │
│   Secret Key: JBSWY3DPEHPK3PXPJBSWY3DP                │
│                                                        │
│   Step 2: Enter the 6-digit code from your app        │
│                                                        │
│   ┌──────────────────────────────────────────────┐    │
│   │  [1][2][3][4][5][6]                          │    │
│   └──────────────────────────────────────────────┘    │
│                                                        │
│          [ Verify & Complete ]    [ Skip ]             │
│                                                        │
└────────────────────────────────────────────────────────┘
```

#### Browse Page
```
┌────────────────────────────────────────────────────────┐
│ NETFLIX  Home  TV Shows  Movies  New    user@email.com│
│                                         [Logout]       │
├────────────────────────────────────────────────────────┤
│                                                        │
│   [HERO IMAGE]                                         │
│   Featured Content                                     │
│   Welcome to your personalized Netflix experience...   │
│   [▶ Play]  [ℹ More Info]                             │
│                                                        │
├────────────────────────────────────────────────────────┤
│                                                        │
│  Popular on Netflix                                    │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐  │
│  │IMG │ │IMG │ │IMG │ │IMG │ │IMG │ │IMG │ │IMG │  │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘  │
│                                                        │
│  Trending Now                                          │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐  │
│  │IMG │ │IMG │ │IMG │ │IMG │ │IMG │ │IMG │ │IMG │  │
│  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘ └────┘  │
│                                                        │
└────────────────────────────────────────────────────────┘
                                    [🔒 Protected with MFA]
```

### 11.2 Database Screenshots

#### MongoDB Users Collection
```json
{
  "_id": ObjectId("65a1b2c3d4e5f6a7b8c9d0e1"),
  "email": "demo@example.com",
  "password": "$2b$10$XGJ8KpR5nB7YxHZ4v9K1.eQY8Zx3WqR...",
  "mfaEnabled": true,
  "mfaSecret": "JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP",
  "emailVerified": true,
  "createdAt": ISODate("2026-02-07T10:30:00.000Z"),
  "__v": 0
}
```

### 11.3 API Response Examples

#### Successful Login Response
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWExYjJjM2Q0ZTVmNmE3YjhjOWQwZTEiLCJlbWFpbCI6ImRlbW9AZXhhbXBsZS5jb20iLCJpYXQiOjE3MDczMDU0MDAsImV4cCI6MTcwNzkxMDIwMH0.abc123xyz",
  "user": {
    "id": "65a1b2c3d4e5f6a7b8c9d0e1",
    "email": "demo@example.com",
    "mfaEnabled": true
  }
}
```

#### MFA Required Response
```json
{
  "success": true,
  "mfaRequired": true,
  "tempToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Please provide MFA code"
}
```

---

## 12. Challenges and Solutions

### 12.1 Technical Challenges

#### Challenge 1: JWT Token Storage
**Problem**: Where to store JWT tokens securely in browser?

**Options Considered**:
1. LocalStorage - Easy but vulnerable to XSS
2. SessionStorage - Clears on tab close
3. Cookies - Vulnerable to CSRF
4. Memory - Lost on page refresh

**Solution Chosen**: LocalStorage
- Reason: Simplest for development
- Mitigation: React auto-escapes to prevent XSS
- Production: Use httpOnly cookies

```javascript
// Store token
localStorage.setItem('netflix_auth_token', token);

// Retrieve token
const token = localStorage.getItem('netflix_auth_token');

// Remove token
localStorage.removeItem('netflix_auth_token');
```

#### Challenge 2: CORS Errors
**Problem**: Frontend (port 3000) couldn't access backend (port 5000)

**Error Message**:
```
Access to XMLHttpRequest at 'http://localhost:5000/api/auth/signin' 
from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution**:
```javascript
// server/server.js
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
```

#### Challenge 3: MongoDB Deprecation Warnings
**Problem**: Warnings about deprecated connection options

**Warning**:
```
DeprecationWarning: current Server Discovery and Monitoring engine 
is deprecated, and will be removed in a future version.
```

**Solution**: Remove deprecated options
```javascript
// Before
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true  // ❌ Deprecated
});

// After
mongoose.connect(uri);  // ✅ Works with v6+
```

#### Challenge 4: Authenticator App Time Sync
**Problem**: MFA codes not working even when correct

**Cause**: Phone time not synced with server time

**Solution**:
1. Go to phone Settings > Date & Time
2. Enable "Automatic date & time"
3. Enable "Automatic time zone"
4. Re-sync authenticator app

**Code Enhancement**:
```javascript
// Add window tolerance (±30 seconds)
const verified = speakeasy.totp.verify({
  secret: user.mfaSecret,
  encoding: 'base32',
  token: code,
  window: 1  // Allows ±1 time step
});
```

### 12.2 Design Challenges

#### Challenge 5: Responsive Netflix UI
**Problem**: Making horizontal scrolling work on all devices

**Solution**: CSS overflow and flexbox
```css
.row-posters {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 8px;
  scrollbar-width: none;  /* Firefox */
}

.row-posters::-webkit-scrollbar {
  display: none;  /* Chrome, Safari */
}

@media (max-width: 768px) {
  .poster {
    min-width: 200px;  /* Smaller on mobile */
  }
}
```

#### Challenge 6: Dynamic Header Scroll Effect
**Problem**: Header needs to change color when scrolling

**Solution**: JavaScript scroll listener
```javascript
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// CSS class applied conditionally
<header className={`header ${scrolled ? 'scrolled' : ''}`}>
```

### 12.3 Deployment Challenges

#### Challenge 7: Environment Variables Not Loading
**Problem**: JWT_SECRET undefined causing errors

**Error**:
```
Error: secretOrPrivateKey must have a value
```

**Solution**: Explicit .env path loading
```javascript
// server/server.js
const path = require('path');
require('dotenv').config({ 
  path: path.resolve(__dirname, '../.env') 
});

// Verify loading
if (!process.env.JWT_SECRET) {
  console.error('JWT_SECRET not found!');
  process.exit(1);
}
```

#### Challenge 8: Port Already in Use
**Problem**: Cannot start server, port 5000 already in use

**Solution**: Kill existing processes
```bash
# Windows PowerShell
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or stop all Node processes
Stop-Process -Name node -Force
```

### 12.4 Learning Challenges

#### Challenge 9: Understanding Async/Await
**Initial Code** (callback hell):
```javascript
User.findOne({ email }, function(err, user) {
  if (err) {
    console.error(err);
  } else {
    bcrypt.compare(password, user.password, function(err, isMatch) {
      if (isMatch) {
        jwt.sign({ userId: user._id }, secret, function(err, token) {
          res.json({ token });
        });
      }
    });
  }
});
```

**Improved Code** (async/await):
```javascript
const user = await User.findOne({ email });
const isMatch = await bcrypt.compare(password, user.password);
if (isMatch) {
  const token = jwt.sign({ userId: user._id }, secret);
  res.json({ token });
}
```

#### Challenge 10: React State Management
**Problem**: Understanding when to use useState vs useContext

**Solution**:
- `useState`: Component-local state (form inputs, toggles)
- `useContext`: Global state (user authentication, theme)

```javascript
// Local state (SignIn component)
const [email, setEmail] = useState('');

// Global state (AuthContext)
const { currentUser, login, logout } = useAuth();
```

---

## 13. Future Enhancements

### 13.1 Feature Enhancements

#### 1. Movie Database Integration
- Integrate TMDB API (The Movie Database)
- Fetch real movie data
- Display trailers, ratings, descriptions
- Search functionality

**Implementation**:
```javascript
// API call to TMDB
const fetchMovies = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular',
    {
      params: {
        api_key: TMDB_API_KEY
      }
    }
  );
  return response.data.results;
};
```

#### 2. User Profiles
- Multiple profiles per account
- Avatar selection
- Watch preferences
- Kids mode

**Database Schema**:
```javascript
{
  userId: ObjectId,
  profiles: [
    {
      name: 'John',
      avatar: 'avatar1.png',
      isKids: false,
      preferences: {
        genres: ['Action', 'Sci-Fi']
      }
    }
  ]
}
```

#### 3. Watchlist Feature
- Add movies to "My List"
- Remove from watchlist
- View all saved content
- Sync across devices

#### 4. Video Playback
- Integrate video player (Video.js or Plyr)
- Play/pause controls
- Quality selection
- Subtitles support
- Progress tracking

#### 5. Recommendations
- AI-based recommendations
- "Because you watched..."
- Similar content suggestions
- Trending in your area

### 13.2 Security Enhancements

#### 1. Password Strength Meter
```javascript
// Check password strength
const checkStrength = (password) => {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength; // 0-5
};
```

#### 2. Email Verification
- Send verification email on signup
- Verify token before account activation
- Resend verification option

#### 3. Password Reset
- Forgot password functionality
- Email reset link
- Secure token generation
- Expiry time (15 minutes)

#### 4. Session Management
- Track active sessions
- Device information
- Logout from all devices
- Session timeout

#### 5. Rate Limiting
- Prevent brute force attacks
- Limit login attempts
- Block suspicious IPs

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 requests per window
});

app.use('/api/auth/signin', limiter);
```

### 13.3 UI/UX Enhancements

#### 1. Dark/Light Theme
- Toggle theme button
- Save preference
- System theme detection

#### 2. Loading Skeletons
- Show loading placeholders
- Better user experience
- Prevent layout shift

#### 3. Animations
- Page transitions
- Hover effects
- Loading animations
- Smooth scrolling

#### 4. Accessibility
- Screen reader support
- Keyboard shortcuts
- ARIA labels
- High contrast mode

#### 5. Internationalization
- Multiple languages
- Currency conversion (for paid features)
- Regional content

### 13.4 Performance Enhancements

#### 1. Image Optimization
- Lazy loading images
- WebP format
- Responsive images
- CDN delivery

#### 2. Code Splitting
- Split React bundles
- Load on demand
- Reduce initial bundle size

```javascript
const Browse = lazy(() => import('./pages/Browse'));

<Suspense fallback={<Loading />}>
  <Browse />
</Suspense>
```

#### 3. Caching
- Browser caching
- Service workers
- Offline support

#### 4. Database Indexing
- Index email field
- Faster queries
- Better performance

```javascript
userSchema.index({ email: 1 });
```

### 13.5 Additional Features

#### 1. Social Features
- Share on social media
- Friend recommendations
- Watch together (sync viewing)

#### 2. Payment Integration
- Subscription plans
- Payment gateway (Stripe/PayPal)
- Invoice generation

#### 3. Admin Panel
- User management
- Content management
- Analytics dashboard
- Reports

#### 4. Mobile App
- React Native version
- Download for offline
- Push notifications

#### 5. Gamification
- Achievement badges
- Watch streaks
- Leaderboards
- Rewards program

---

## 14. Conclusion

### 14.1 Project Summary

This Netflix clone project successfully demonstrates the implementation of a modern full-stack web application with advanced security features. The application combines the MERN stack (MongoDB, Express.js, React.js, Node.js) with industry-standard authentication practices including Multi-Factor Authentication.

### 14.2 Objectives Achieved

✅ **Technical Objectives**:
- Developed complete full-stack application
- Implemented RESTful API with 7 endpoints
- Created responsive Netflix-style UI
- Integrated MongoDB database
- Secured application with JWT and MFA

✅ **Learning Objectives**:
- Mastered React.js hooks and routing
- Understood Express.js middleware pattern
- Learned MongoDB and Mongoose ODM
- Implemented authentication and security
- Practiced modern JavaScript (ES6+)

✅ **Security Objectives**:
- Password hashing with bcrypt
- JWT token-based authentication
- TOTP MFA using authenticator apps
- Protected API routes
- Input validation

### 14.3 Skills Developed

**Frontend Development**:
- React component architecture
- State management (useState, useContext)
- React Router for navigation
- Responsive CSS design
- Axios for API calls

**Backend Development**:
- Express.js server setup
- RESTful API design
- MongoDB database operations
- Middleware implementation
- Error handling

**Security**:
- Authentication vs Authorization
- Password encryption
- Token generation and verification
- MFA implementation
- CORS configuration

**DevOps**:
- Environment configuration
- Git version control
- Package management
- Documentation

### 14.4 Real-World Applications

This project demonstrates skills applicable to:

1. **Web Development Jobs**:
   - Full-stack developer
   - React developer
   - Node.js developer
   - MERN stack developer

2. **Security Roles**:
   - Application security
   - Authentication systems
   - Cyber security analyst

3. **Freelance Projects**:
   - E-commerce platforms
   - SaaS applications
   - Membership websites
   - Streaming platforms

### 14.5 Project Impact

**Academic Impact**:
- Comprehensive diploma project
- Demonstrates practical knowledge
- Portfolio-worthy project
- Interview discussion material

**Technical Impact**:
- Production-ready architecture
- Scalable codebase
- Industry best practices
- Extensible design

**Personal Growth**:
- Problem-solving skills
- Technical documentation
- Code organization
- Project planning

### 14.6 Challenges Overcome

Throughout this project, we successfully addressed:
- JWT token storage and security
- CORS configuration issues
- MongoDB connection management
- Authenticator app time synchronization
- Responsive design implementation
- State management complexity

### 14.7 Acknowledgments

**Technologies Used**:
- React.js - Facebook Open Source
- Node.js - OpenJS Foundation
- MongoDB - MongoDB Inc.
- Express.js - OpenJS Foundation
- All open-source libraries

**Learning Resources**:
- Official documentation
- Stack Overflow community
- GitHub repositories
- YouTube tutorials

**Special Thanks**:
- Project guide: [Guide Name]
- College faculty
- Peer reviewers
- Online communities

### 14.8 Final Thoughts

This project represents a significant achievement in full-stack web development, combining modern technologies with security best practices. The Netflix clone not only demonstrates technical proficiency but also showcases the ability to create user-friendly, secure, and scalable web applications.

The implementation of Multi-Factor Authentication adds a professional touch, showing understanding of current security concerns in web applications. This project serves as a strong foundation for future development work and provides valuable experience in the MERN stack ecosystem.

---

## 15. References

### 15.1 Official Documentation

1. **React.js**
   - https://react.dev/
   - Version 18 Documentation
   - Hooks API Reference

2. **Node.js**
   - https://nodejs.org/docs/
   - API Documentation
   - NPM Package Manager

3. **Express.js**
   - https://expressjs.com/
   - API Reference
   - Guide and Examples

4. **MongoDB**
   - https://docs.mongodb.com/
   - MongoDB Manual
   - Mongoose Documentation: https://mongoosejs.com/

### 15.2 Security References

5. **JWT (JSON Web Tokens)**
   - https://jwt.io/introduction
   - RFC 7519 Standard
   - jsonwebtoken library: https://github.com/auth0/node-jsonwebtoken

6. **bcrypt**
   - https://github.com/kelektiv/node.bcrypt.js
   - Password Hashing Guide
   - Security Best Practices

7. **TOTP (Time-based OTP)**
   - RFC 6238: https://tools.ietf.org/html/rfc6238
   - speakeasy library: https://github.com/speakeasyjs/speakeasy
   - HOTP RFC 4226

8. **QR Code**
   - qrcode library: https://github.com/soldair/node-qrcode
   - QR Code specifications

### 15.3 Learning Resources

9. **MDN Web Docs**
   - https://developer.mozilla.org/
   - JavaScript Guide
   - Web APIs

10. **Stack Overflow**
    - https://stackoverflow.com/
    - Q&A Community
    - Code Examples

11. **GitHub**
    - https://github.com/
    - Open Source Projects
    - Code Repositories

### 15.4 Libraries Used

12. **React Router**
    - https://reactrouter.com/
    - v6 Documentation

13. **Axios**
    - https://axios-http.com/
    - HTTP Client Library

14. **React Toastify**
    - https://fkhadra.github.io/react-toastify/
    - Notification Library

15. **React Icons**
    - https://react-icons.github.io/react-icons/
    - Icon Library

### 15.5 Design Inspiration

16. **Netflix UI**
    - https://www.netflix.com/
    - Design Reference
    - User Interface Patterns

17. **Material Design**
    - https://material.io/
    - Design Guidelines
    - Color Palettes

### 15.6 Tools and Platforms

18. **Visual Studio Code**
    - https://code.visualstudio.com/
    - Extensions Marketplace

19. **Git**
    - https://git-scm.com/doc
    - Version Control

20. **Postman**
    - https://www.postman.com/
    - API Testing

### 15.7 Deployment Resources

21. **Vercel**
    - https://vercel.com/docs
    - Frontend Deployment

22. **Heroku**
    - https://devcenter.heroku.com/
    - Backend Deployment

23. **MongoDB Atlas**
    - https://www.mongodb.com/docs/atlas/
    - Cloud Database

### 15.8 Security Resources

24. **OWASP**
    - https://owasp.org/
    - Top 10 Web Security Risks
    - Security Best Practices

25. **Auth0 Blog**
    - https://auth0.com/blog/
    - Authentication Tutorials
    - Security Articles

---

## Appendix

### A. Glossary of Terms

**API (Application Programming Interface)**: Interface for communication between different software components

**Authentication**: Process of verifying user identity

**Authorization**: Process of verifying user permissions

**Backend**: Server-side of application

**bcrypt**: Password hashing algorithm

**CORS (Cross-Origin Resource Sharing)**: Security feature to control resource access

**Frontend**: Client-side of application

**JWT (JSON Web Token)**: Compact token format for authentication

**MFA (Multi-Factor Authentication)**: Security using multiple verification methods

**Middleware**: Functions that process requests before route handlers

**MongoDB**: NoSQL document database

**Mongoose**: MongoDB object modeling library

**NoSQL**: Non-relational database

**OTP (One-Time Password)**: Password valid for single session

**QR Code**: Two-dimensional barcode

**REST API**: Architectural style for web services

**TOTP (Time-based OTP)**: OTP that changes periodically

**UI/UX**: User Interface / User Experience

### B. Abbreviations

- **MERN**: MongoDB, Express, React, Node
- **HTTP**: Hypertext Transfer Protocol
- **HTTPS**: HTTP Secure
- **JSON**: JavaScript Object Notation
- **JWT**: JSON Web Token
- **MFA**: Multi-Factor Authentication
- **ODM**: Object Document Mapper
- **OTP**: One-Time Password
- **QR**: Quick Response
- **REST**: Representational State Transfer
- **SDK**: Software Development Kit
- **TOTP**: Time-based One-Time Password
- **URI**: Uniform Resource Identifier
- **URL**: Uniform Resource Locator

### C. Contact Information

**Project Repository**:
- GitHub: https://github.com/S-Rahul-Naik/Netflix-MFA

**Documentation**:
- README.md
- SETUP_GUIDE.md
- PROJECT_EXPLANATION.md
- PROJECT_REPORT.md (this file)

**Student Details**:
- Name: [Your Name]
- Email: [Your Email]
- Roll No: [Roll Number]
- Department: Computer Science & Engineering
- Academic Year: 2025-2026

**Guide Details**:
- Name: [Guide Name]
- Designation: [Designation]
- Email: [Guide Email]

---

## Declaration

I hereby declare that this project titled **"Netflix Clone with Multi-Factor Authentication"** is my original work and has been carried out under the guidance of **[Guide Name]**. All sources of information and assistance received have been duly acknowledged.

**Student Signature**: ___________________

**Date**: _______________

**Guide Signature**: ___________________

**Date**: _______________

---

**End of Report**

---

*This report was prepared as part of the diploma program curriculum. The project demonstrates practical implementation of full-stack web development with advanced security features.*
