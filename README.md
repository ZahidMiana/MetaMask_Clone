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
├── ethers.js              # Ethereum JavaScript library
├── assets/                # Icons and images
│   ├── theblockchaincoders.png
│   ├── send.png
│   ├── import.png
│   ├── user.png
│   ├── swap.png
│   └── SVG/
└── chromeapi/             # Backend API
    ├── server.js          # Main server file
    ├── app.js            # Express app configuration
    ├── package.json      # Dependencies
    ├── config.env        # Environment variables
    └── Api/
        ├── Controllers/   # API controllers
        ├── Model/        # Database models
        └── Routers/      # API routes
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- Chrome browser
- Git

### Backend Setup
1. **Navigate to backend directory:**
   ```bash
   cd chromeapi
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables in `config.env`:**
   ```env
   DATABASE=mongodb+srv://username:<PASSWORD>@cluster0.mongodb.net/cryptoWallet?retryWrites=true&w=majority
   DATABASE_PASSWORD=your_mongodb_password
   PORT=3000
   ```

4. **Start the server:**
   ```bash
   npm run start
   ```

### Chrome Extension Setup
1. **Open Chrome and navigate to:**
   ```
   chrome://extensions/
   ```

2. **Enable Developer mode** (toggle in top right)

3. **Click "Load unpacked"** and select the `mianamask` folder

4. **The extension should now appear** in your Chrome extensions bar

## 🎯 Usage Guide

### First Time Setup
1. **Click the MianaMask extension icon**
2. **Create Account** - Enter your details to generate a new wallet
3. **Save your mnemonic phrase** - Store it securely (never share!)
4. **Access your wallet** - Start managing your crypto assets

### Daily Operations
- **Send ETH:** Click Send → Enter recipient address and amount
- **Import Tokens:** Click Import Token → Enter token contract details
- **Switch Networks:** Click network dropdown → Select desired network
- **Add Accounts:** Click Add Account → Import via private key
- **View History:** Click Activity tab → See transaction history

## 🔒 Security Features

- **Local Key Storage** - Private keys never leave your device
- **Encrypted Data** - All sensitive data is encrypted before storage
- **Secure Authentication** - JWT-based user authentication
- **Password Protection** - Bcrypt hashing for user passwords
- **Transaction Signing** - All transactions signed locally

## 🌐 Supported Networks

| Network | Chain ID | RPC URL |
|---------|----------|---------|
| Ethereum Mainnet | 1 | Infura/Alchemy |
| Sepolia Testnet | 11155111 | Alchemy |
| Goerli Testnet | 5 | Infura |
| Rinkeby Testnet | 4 | Infura |

## 🧪 Testing

### Unit Testing
```bash
cd chromeapi
npm test
```

### Manual Testing
1. Create a new wallet
2. Import an existing account
3. Send a test transaction on Sepolia
4. Import a test token
5. Switch between networks

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit changes:** `git commit -m 'Add amazing feature'`
4. **Push to branch:** `git push origin feature/amazing-feature`
5. **Open a Pull Request**

## 📋 API Endpoints

### User Management
- `POST /api/v1/user/signup` - Create new user
- `POST /api/v1/user/login` - User authentication
- `POST /api/v1/user/createaccount` - Add new account

### Token Management
- `GET /api/v1/tokens/alltokens` - Get all tokens
- `POST /api/v1/token/createtoken` - Add new token

### Account Management
- `GET /api/v1/account/allaccount` - Get all accounts

## ⚠️ Important Security Notes

1. **Never share your private keys or mnemonic phrases**
2. **Always verify transaction details before signing**
3. **Use testnets for development and testing**
4. **Keep your browser and extension updated**
5. **Backup your wallet data regularly**

## 🐛 Known Issues

- Network switching requires page refresh
- Large transaction histories may load slowly
- Some DApps may not detect the wallet initially

## 📞 Support

For support, email: support@mianamask.com
For bugs, create an issue on GitHub

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MetaMask Team** - For inspiration and UX patterns
- **Ethers.js** - For excellent Ethereum library
- **OpenZeppelin** - For smart contract standards
- **The Blockchain Coders** - For educational resources

---

**⚡ Built with ❤️ for the Ethereum community**

Building and Deploying a DeFi MetaMass Wallet Clone for Secure Transactions

MetaMass offers a revolutionary approach to decentralized finance (DeFi) with our wallet clone project. Drawing inspiration from the acclaimed MetaMask, our MetaMass clone empowers users to securely manage their digital assets, interact with decentralized applications (dApps), and participate in the vibrant DeFi ecosystem.

Our MetaMass clone prioritizes security, usability, and interoperability, ensuring that users have full control over their funds while enjoying seamless access to a wide range of DeFi protocols and services. By replicating MetaMask's features and functionalities, MetaMass provides a familiar and intuitive user experience, making it easy for both novice and experienced users to navigate the decentralized landscape.

## Project Overview

![alt text](https://www.daulathussain.com/wp-content/uploads/2023/06/build-metamask-clone-chrome-extension.jpg)

## Instruction

Kindly follow the following Instructions to run the project in your system and install the necessary requirements


- [Final Source Code](https://www.theblockchaincoders.com/sourceCode/build-metamask-clone-chrome-extension-form-scratch)

#### Setup Video
- [Final Code Setup video](https://youtu.be/p04GRmC7rA0?si=wLdiPs6RMHZg99LH)

```https://code.visualstudio.com/download
  WATCH: Setup & Demo Of Project
```

#### Install Vs Code Editor

```https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v18.12.1
  NPM: 8.19.2
```

#### Clone Starter File

```https://github.com/daulathussain/Airdrop-Crypto-Starter-File
  GET: Project Starter File Download
```


All you need to follow the complete project and follow the instructions which are explained in the tutorial by Daulat

## Final Code Instruction

If you download the final source code then you can follow the following instructions to run the Dapp successfully

#### Setup Video

```https://code.visualstudio.com/download
  WATCH: Setup & Demo Of Project
```

#### Final Source Code

```https://www.theblockchaincoders.com/SourceCode
  Download the Final Source Code
```

#### Install Vs Code Editor

```https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v18.12.1
  NPM: 8.19.2
```


#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```https://www.alchemy.com/faucets
  Get: Free Test Faucets
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```https://remix-project.org
  OPEN: RemixID
```

#### Polygon Mumbai

```https://mumbai.polygonscan.com/
  OPEN: Polygon Mumbai
```

## Important Links

- [Get Pro Blockchain Developer Course](https://www.theblockchaincoders.com/pro-nft-marketplace)
- [Support Creator](https://bit.ly/Support-Creator)
- [All Projects Source Code](https://www.theblockchaincoders.com/SourceCode)


## Authors

- [@theblockchaincoders.com](https://www.theblockchaincoders.com/)
- [@consultancy](https://www.theblockchaincoders.com/consultancy)
- [@youtube](https://www.youtube.com/@daulathussain)


