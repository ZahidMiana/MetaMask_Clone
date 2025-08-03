# 🦊 MianaMask - MetaMask Clone

A fully functional MetaMask clone built as a Chrome extension with complete wallet functionality, multi-account management, and beautiful UI/UX.

![MianaMask Banner](assets/theblockchaincoders.png)

## 🌟 Features

### 🔐 Wallet Management
- **Account Creation** - Generate new Ethereum wallets with mnemonic phrases
- **Account Import** - Import existing wallets using private keys
- **Multi-Account Support** - Switch between multiple accounts seamlessly
- **Account Dropdown** - MetaMask-like account selection interface

### 💰 Core Functionality
- **Send Transactions** - Transfer ETH and ERC-20 tokens
- **Receive Crypto** - Display wallet address with QR code placeholder
- **Balance Display** - Real-time balance updates
- **Transaction History** - View recent transactions

### 🎨 User Interface
- **MetaMask Design** - Authentic MetaMask color scheme and styling
- **Responsive UI** - Optimized for Chrome extension popup (357x600px)
- **Smooth Animations** - Account dropdown transitions and hover effects
- **Modern Typography** - Inter font family for clean readability

### 🌐 Network Support
- **Multiple Networks** - Ethereum Mainnet, Sepolia, Goerli, Rinkeby, Mumbai
- **Network Switching** - Easy network selection dropdown
- **Custom RPCs** - Configurable network endpoints

### 🔒 Security
- **Local Storage** - Secure local storage of wallet data
- **Private Key Management** - Safe handling of sensitive information
- **JWT Authentication** - Backend API authentication

## � Tech Stack

### Frontend (Chrome Extension)
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables and animations
- **JavaScript ES6+** - Modern JavaScript features
- **Ethers.js** - Ethereum blockchain interaction
- **Chrome Extension API** - Manifest v3 compliance

### Backend (Node.js API)
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB** - Database for user data
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **CORS** - Cross-origin resource sharing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- Chrome Browser
- Git

### 1. Clone Repository
```bash
git clone https://github.com/ZahidMiana/MetaMask_Clone.git
cd MetaMask_Clone
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd chromeapi

# Install dependencies
npm install

# Configure environment (create config.env file)
echo "DATABASE_URI=your_mongodb_connection_string" > config.env
echo "JWT_SECRET=your_jwt_secret_key" >> config.env

# Start the server
npm start
```

The backend server will run on `http://localhost:3000`

### 3. Chrome Extension Setup
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (top right toggle)
3. Click "Load unpacked"
4. Select the project root directory (containing `manifest.json`)
5. The extension should appear in your Chrome toolbar

### 4. Test the Extension
1. Click the MianaMask extension icon
2. Create a new account or import existing wallet
3. Follow the test guide for comprehensive testing

## 🧪 Testing

Use the included test guide (`test-guide.html`) for comprehensive testing:

```bash
# Open test guide in browser
open test-guide.html
```

### Key Test Areas
- ✅ Account creation and import
- ✅ Multi-account switching
- ✅ Send/Receive functionality
- ✅ Network switching
- ✅ UI/UX interactions

## 📁 Project Structure

```
MetaMask_Clone/
├── manifest.json              # Chrome extension manifest
├── popup.html                 # Main extension popup
├── popup.js                   # Core wallet logic (976 lines)
├── style.css                  # MetaMask-inspired styling (1080+ lines)
├── ethers.js                  # Ethereum library
├── test-guide.html            # Comprehensive testing guide
├── assets/                    # Icons and images
│   ├── theblockchaincoders.png
│   ├── send.png
│   ├── import.png
│   ├── swap.png
│   ├── user.png
│   └── SVG/
├── chromeapi/                 # Backend API
│   ├── server.js              # Express server
│   ├── package.json           # Backend dependencies
│   ├── config.env             # Environment configuration
│   └── Api/
│       ├── Controllers/       # API controllers
│       ├── Model/            # Database models
│       └── Routers/          # API routes
└── README.md                  # This file
```

## 🔧 Configuration

### Environment Variables (Backend)
Create `chromeapi/config.env`:
```env
DATABASE_URI=mongodb://localhost:27017/mianamask
JWT_SECRET=your_super_secret_jwt_key
PORT=3000
```

### Network Configuration
Default networks are configured in `popup.js`. To add custom networks:
1. Modify the network selection in the UI
2. Update the `providerURL` variable
3. Test with the new network

## 🌈 Features Showcase

### 🎯 Multi-Account Management
- Switch between accounts using dropdown
- Each account maintains separate balance and transaction history
- Seamless account switching with persistent state

### 💸 Transaction Features
- **Send ETH** - Transfer Ethereum to any address
- **Receive** - Display wallet address with copy functionality
- **Swap (Coming Soon)** - Token swapping interface prepared

### 🎨 UI/UX Excellence
- **MetaMask Color Scheme** - Authentic orange (#F6851B) theme
- **Responsive Design** - Perfect fit for Chrome extension popup
- **Smooth Animations** - Dropdown transitions and button hover effects

## 🐛 Troubleshooting

### Common Issues

1. **Extension not loading**
   - Ensure `manifest.json` is in root directory
   - Check Chrome developer mode is enabled
   - Verify all required files are present

2. **Backend connection failed**
   - Confirm MongoDB is running
   - Check backend server is on port 3000
   - Verify CORS configuration

3. **Account creation fails**
   - Check backend API endpoints
   - Verify database connection
   - Review console errors in Chrome DevTools

### Debug Mode
1. Right-click extension → "Inspect popup"
2. Check Console tab for error messages
3. Monitor Network tab for API calls

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow existing code style and structure
- Test all functionality before submitting
- Update documentation for new features
- Ensure backward compatibility

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MetaMask** - Inspiration for UI/UX design
- **Ethers.js** - Ethereum blockchain interaction
- **Chrome Extension APIs** - Extension functionality
- **MongoDB** - Database solution
- **Express.js** - Backend framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [test-guide.html](test-guide.html) for comprehensive testing
2. Review console logs for error messages
3. Open an issue on GitHub
4. Contact: [Your Contact Information]

## 🚀 Future Enhancements

- [ ] Token swapping functionality
- [ ] NFT support and gallery
- [ ] DeFi integrations
- [ ] Hardware wallet support
- [ ] Mobile app version
- [ ] Advanced security features

---

**Made with ❤️ by [ZahidMiana](https://github.com/ZahidMiana)**

⭐ Star this repository if you found it helpful!


