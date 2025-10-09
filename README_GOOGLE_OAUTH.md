# Google OAuth Setup Instructions

## Setting up Google OAuth for your Coding Ninjas Clone

To enable Google OAuth login/signup functionality, follow these steps:

### 1. Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API (or Google Identity API)

### 2. Configure OAuth Consent Screen
1. Go to **APIs & Services** > **OAuth consent screen**
2. Choose **External** user type
3. Fill in the required information:
   - App name: "Coding Ninjas Clone"
   - User support email: your email
   - Developer contact information: your email
4. Add scopes: `email`, `profile`, `openid`
5. Add test users if needed

### 3. Create OAuth 2.0 Credentials
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **OAuth 2.0 Client IDs**
3. Choose **Web application**
4. Add authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - Your production domain (when deployed)
5. Copy the **Client ID**

### 4. Update Environment Variables
1. Open the `.env` file in your project root
2. Replace `your-google-client-id-here` with your actual Client ID:
   ```
   REACT_APP_GOOGLE_CLIENT_ID=your-actual-client-id-here
   ```

### 5. Restart Development Server
```bash
npm start
```

## Current Implementation

- **Demo Mode**: Currently shows a demo button that alerts users about configuration
- **Production Mode**: When properly configured, shows actual Google OAuth button
- **Features**: 
  - Sign in with Google
  - Sign up with Google
  - Automatic user profile creation with Google avatar
  - Seamless integration with existing auth system

## Security Notes

- Never commit your actual Client ID to version control
- Use environment variables for sensitive configuration
- The `.env` file is already in `.gitignore`
- Consider using different Client IDs for development and production

## Troubleshooting

1. **Button not working**: Check if Client ID is properly set in `.env`
2. **OAuth errors**: Verify authorized origins in Google Cloud Console
3. **Development issues**: Ensure you're running on `http://localhost:3000`
