document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded - Extension Starting");
    //Initialize the extension
    myFunction();

    //Event listeners - with error handling
    const addEventListenerSafe = (id, event, handler) => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener(event, handler);
            console.log(`Event listener added for ${id}`);
        } else {
            console.warn(`Element with id '${id}' not found`);
        }
    };

    //Function to open the receive screen
    //This function will be called when the user clicks the receive button
    function openReceive() {
        console.log("Receive button clicked");
        document.getElementById("receive_screen").style.display = "block";
        document.getElementById("home").style.display = "none";

        // Update receive address
        document.getElementById("receive_address_text").innerText = address;
    };

    //Function to go back from the receive screen
    //This function will be called when the user clicks the back button in the receive screen
    function receiveGoBack() {
        document.getElementById("receive_screen").style.display = "none";
        document.getElementById("home").style.display = "block";
    };

    //Function to copy receive address
    function copyReceiveAddress() {
        navigator.clipboard.writeText(address).then(() => {
            console.log("Receive address copied to clipboard");
            // Change button text temporarily
            const copyBtn = document.getElementById("copy_receive_address");
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied!";
            setTimeout(() => {
                copyBtn.innerText = originalText;
            }, 2000);
        }).catch(err => {
            console.error("Failed to copy receive address:", err);
        });
    };

    //Function to open swap (placeholder for now)
    //This function will be called when the user clicks the swap button
    function openSwap() {
        console.log("Swap button clicked");
        document.getElementById("swap_screen").style.display = "block";
        document.getElementById("home").style.display = "none";
    }

    //Function to go back from the swap screen
    //This function will be called when the user clicks the back button in the swap screen
    function swapGoBack() {
        document.getElementById("swap_screen").style.display = "none";
        document.getElementById("home").style.display = "block";
    }

    //Function to open the transfer modal
    //This function will be called when the user clicks the transfer button
    function openTransfer() {
        console.log("Transfer button clicked");
        document.getElementById("transfer_from").style.display = "block";
        document.getElementById("home").style.display = "none";
    }

    //Function to open the receive screen
    //This function will be called when the user clicks the receive button
    function openReceive() {
        console.log("Receive button clicked");
        document.getElementById("receive_screen").style.display = "block";
        document.getElementById("home").style.display = "none";

        // Update receive address - ensure address variable is available
        const currentAccount = getCurrentAccount();
        if (currentAccount && currentAccount.address) {
            document.getElementById("receive_address_text").innerText = currentAccount.address;
        } else if (address) {
            document.getElementById("receive_address_text").innerText = address;
        } else {
            // Fallback - get from localStorage
            const userWallet = JSON.parse(localStorage.getItem("userWallet") || "{}");
            if (userWallet.address) {
                document.getElementById("receive_address_text").innerText = userWallet.address;
            }
        }
    }

    //Function to go back from the receive screen
    //This function will be called when the user clicks the back button in the receive screen
    function receiveGoBack() {
        document.getElementById("receive_screen").style.display = "none";
        document.getElementById("home").style.display = "block";
    }

    //Function to copy receive address
    function copyReceiveAddress() {
        const currentAccount = getCurrentAccount();
        const addressToCopy = currentAccount?.address || address || JSON.parse(localStorage.getItem("userWallet") || "{}")?.address;

        if (addressToCopy) {
            navigator.clipboard.writeText(addressToCopy).then(() => {
                console.log("Receive address copied to clipboard");
                // Change button text temporarily
                const copyBtn = document.getElementById("copy_receive_address");
                const originalText = copyBtn.innerText;
                copyBtn.innerText = "Copied!";
                setTimeout(() => {
                    copyBtn.innerText = originalText;
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy receive address:", err);
            });
        } else {
            console.error("No address available to copy");
        }
    }

    // Event Listeners Setup
    //1. Account list click events
    addEventListenerSafe("accountList", "click", handleAccountListClick);
    //2. Copy address functionality
    addEventListenerSafe("userAddress", "click", copyAddress);
    //3. Account dropdown toggle
    addEventListenerSafe("account_header", "click", toggleAccountDropdown);
    //4. Transfer funds
    addEventListenerSafe("transferFund", "click", handler);
    //5. Network header
    addEventListenerSafe("header_network", "click", getOpenNetwork);
    //6. Network selection
    document.addEventListener("click", function (e) {
        if (e.target.closest(".network_item")) {
            getSelectedNetwork(e);
        }
    });
    //7. Add network
    addEventListenerSafe("add_network", "click", setNetwork);
    //8. Login account
    addEventListenerSafe("loginAccount", "click", loginUser);
    //9. Create account
    addEventListenerSafe("accountCreate", "click", createUser);
    //10. Open create
    addEventListenerSafe("openCreate", "click", openCreate);
    //11. Sign up
    addEventListenerSafe("sign_up", "click", signUp);
    //12. Login
    addEventListenerSafe("login_up", "click", login);
    //13. Logout
    addEventListenerSafe("logout", "click", logout);
    //14. Open transfer
    addEventListenerSafe("open_Transfer", "click", openTransfer);
    //15. Go back from transfer
    addEventListenerSafe("goback", "click", goBack);
    //16. Swap functionality (open_Import button)
    addEventListenerSafe("open_Import", "click", openSwap);
    //17. Open receive
    addEventListenerSafe("open_Receive", "click", openReceive);
    //18. Go back from receive
    addEventListenerSafe("receive_goback", "click", receiveGoBack);
    //19. Copy receive address
    addEventListenerSafe("copy_receive_address", "click", copyReceiveAddress);
    //20. Go back from swap
    addEventListenerSafe("swap_goback", "click", swapGoBack);
    //21. Go back from import
    addEventListenerSafe("import_goback", "click", importGoBack);
    //22. Open activity
    addEventListenerSafe("open_activity", "click", openActivity);
    //23. Open assets
    addEventListenerSafe("open_assets", "click", openAssets);
    //24. Go to home page
    addEventListenerSafe("goHomePage", "click", goHomePage);
    //25. Open account import
    addEventListenerSafe("openAccountImport", "click", openImportModel);
    //26. Close import account
    addEventListenerSafe("close_import_account", "click", closeImportModel);
    //27. Add new token
    addEventListenerSafe("add_new_token", "click", addToken);
    //28. Add new account
    addEventListenerSafe("add_New_Account", "click", addAccount);
    //29. Import account from login screen
    addEventListenerSafe("importAccountLogin", "click", openImportFromLogin);

    // Close account dropdown when clicking outside
    document.addEventListener("click", function (e) {
        const accountDropdown = document.getElementById("user_account_dropdown");
        const accountList = document.getElementById("accountList");

        if (!accountDropdown.contains(e.target) && accountList.style.display === "block") {
            accountList.style.display = "none";
            document.getElementById("account_header").classList.remove("active");
        }
    });
});


//State Variables
let providerURL = 'https://eth-sepolia.g.alchemy.com/v2/aYKIyLskCpdKWgRKyBo8OC8kx9lgfBQK';

// let provider;
let privateKey;
let address;
let currentAccountIndex = 0;

//Account Management Functions
function getAllAccounts() {
    const accounts = localStorage.getItem("allAccounts");
    return accounts ? JSON.parse(accounts) : [];
}

function saveAllAccounts(accounts) {
    localStorage.setItem("allAccounts", JSON.stringify(accounts));
}

function getCurrentAccount() {
    const accounts = getAllAccounts();
    return accounts[currentAccountIndex] || null;
}

function addNewAccount(accountData) {
    const accounts = getAllAccounts();
    const newAccount = {
        ...accountData,
        name: "Account " + (accounts.length + 1),
        index: accounts.length
    };
    accounts.push(newAccount);
    saveAllAccounts(accounts);
    return newAccount;
}

function switchToAccount(index) {
    const accounts = getAllAccounts();
    if (accounts[index]) {
        currentAccountIndex = index;
        const account = accounts[index];

        // Update current wallet data
        const userWallet = {
            address: account.address,
            private_key: account.private_key,
            mnemonic: account.mnemonic || account.mnemonics || "Imported Account",
        };

        localStorage.setItem("userWallet", JSON.stringify(userWallet));
        localStorage.setItem("currentAccountIndex", index.toString());

        // Update global variables
        privateKey = account.private_key;
        address = account.address;

        // Update UI
        updateAccountDisplay();
        checkBalance(account.address);

        return account;
    }
    return null;
}

//Toggle Account Dropdown
function toggleAccountDropdown() {
    console.log("Account dropdown toggled");
    const accountList = document.getElementById("accountList");
    const accountHeader = document.getElementById("account_header");

    if (accountList.style.display === "none" || !accountList.style.display) {
        // Show dropdown
        accountList.style.display = "block";
        accountHeader.classList.add("active");
        renderAccountList();
    } else {
        // Hide dropdown
        accountList.style.display = "none";
        accountHeader.classList.remove("active");
    }
}

//Handle Account List Click Events
function handleAccountListClick(e) {
    const accountItem = e.target.closest('.account_item');
    const addAccountBtn = e.target.closest('.add_account_btn');

    if (accountItem) {
        const accountIndex = parseInt(accountItem.getAttribute('data-account-index'));
        switchToAccount(accountIndex);
        toggleAccountDropdown(); // Close dropdown after selection
    } else if (addAccountBtn) {
        openImportModel();
        toggleAccountDropdown(); // Close dropdown
    }
}

//Update Account Display
function updateAccountDisplay() {
    const account = getCurrentAccount();
    if (account) {
        document.getElementById("accountName").innerText = account.name;
        document.getElementById("userAddress").innerText = account.address.slice(0, 15) + "...";
    }
}

//Render Account List in Dropdown
function renderAccountList() {
    const accounts = getAllAccounts();
    const accountList = document.getElementById("accountList");

    let html = '';

    accounts.forEach((account, index) => {
        const isActive = index === currentAccountIndex;
        html += '<div class="account_item ' + (isActive ? 'active' : '') + '" data-account-index="' + index + '">';
        html += '<div class="account_item_info">';
        html += '<div class="account_item_name">' + account.name + '</div>';
        html += '<div class="account_item_address">' + account.address.slice(0, 15) + '...</div>';
        html += '</div>';
        html += '<div class="account_item_balance">0.0 ETH</div>';
        html += '</div>';
    });

    // Add "Add Account" button
    html += '<div class="add_account_btn">';
    html += '<span>+ Add Account</span>';
    html += '</div>';
    html += '<div class="add_account_btn" id="logout_from_dropdown" style="color: #D73A49; border-top: 1px solid var(--mm-border);">';
    html += '<span>🚪 Logout</span>';
    html += '</div>';

    accountList.innerHTML = html;

    // Add logout event listener
    const logoutBtn = document.getElementById("logout_from_dropdown");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logout);
    }
}

//Functions

//Handler for transferring funds
//This function will be called when the transfer button is clicked
function handler() {
    document.getElementById("transfer_center").style.display = "flex";

    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    //metamask credientials for testing krein gein aggy
    const private_key = "95da6a4c5837ea46fa685f3d273f4a1024ebbedb9c3af919da3fd67784649bf2";
    const testAccount = "0x17c88a935f611fab527eB5B3430f9bE7840FdF77";

    //provider
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    let wallet = new ethers.Wallet(privateKey, provider);

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };


    let a = document.getElementById("link");
    a.href = `https://sepolia.etherscan.io/tx/${tx.hash}`;

    wallet.sendTransaction(tx)
        .then((tx) => {
            console.log("Transaction sent:", tx);
            document.getElementById("transfer_center").style.display = "none";
            alert("Transaction successful! Check the link for details.");


            const a = document.getElementById("link");
            document.getElementById("link").style.display = "block";
        })
        .catch((error) => {
            console.error("Error sending transaction:", error);
            document.getElementById("transfer_center").style.display = "none";
            alert("Transaction failed. Please try again.");
        });
};

//checkBalance function to fetch and display the balance of the user's account
//This function will be called to check the balance of the user's account
function checkBalance(address) {
    const provider = new ethers.providers.JsonRpcProvider(providerURL);

    provider.getBalance(address).then((balance) => {
        const etherString = ethers.utils.formatEther(balance);
        console.log(`Balance of ${address}: ${etherString} ETH`);
        document.getElementById("accountBalance").innerText = `${etherString} ETH`;
        document.getElementById("userAddress").innerHTML = `${address.slice(0, 15)}...`;
    }).catch((error) => {
        console.error("Error fetching balance:", error);
        document.getElementById("accountBalance").innerText = "0.0 ETH";
        document.getElementById("userAddress").innerHTML = `${address.slice(0, 15)}...`;
    });
};


//Function to get the open network
//This function will be called to display the network options
function getOpenNetwork() {
    document.getElementById("network").style.display = "block";
};

//Function to get the selected network
//This function will be called when a network is selected from the dropdown
function getSelectedNetwork(e) {
    const element = document.getElementById("selected_network");
    const networkName = e.target.innerText;
    element.innerText = networkName;

    // Define network configurations
    const networks = {
        "Sepolia": 'https://eth-sepolia.g.alchemy.com/v2/aYKIyLskCpdKWgRKyBo8OC8kx9lgfBQK',
        "Goerli": 'https://goerli.infura.io/v3/2b2cf758b23c4e6a9722ea4f0139edd8',
        "Ethereum Mainnet": 'https://mainnet.infura.io/v3/2b2cf758b23c4e6a9722ea4f0139edd8',
        "Rinkeby": 'https://rinkeby.infura.io/v3/2b2cf758b23c4e6a9722ea4f0139edd8',
        "Mumbai": 'https://rpc-mumbai.maticvigil.com',
        "Polygon": 'https://polygon-rpc.com'
    };

    if (networks[networkName]) {
        providerURL = networks[networkName];
        document.getElementById("network").style.display = "none";
        console.log(`Switched to ${networkName}: ${providerURL}`);

        // If user has wallet, refresh balance for new network
        const str = localStorage.getItem("userWallet");
        if (str) {
            try {
                const parseObj = JSON.parse(str);
                if (parseObj?.address) {
                    checkBalance(parseObj.address);
                }
            } catch (error) {
                console.error("Error refreshing balance:", error);
            }
        }
    } else {
        console.error("Unknown network selected:", networkName);
        alert("Network not supported yet");
    }
};

//Function to set the network
//This function will be called to hide the network options
function setNetwork() {
    document.getElementById("network").style.display = "none";

};

//Function to login the user
//This function will be called when the user clicks the login button
function loginUser() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("LoginUser").style.display = "none";
};

//function to create a user 
function createUser() {
    console.log("Create Account button clicked!");
    document.getElementById("createAccount").style.display = "block";
    document.getElementById("LoginUser").style.display = "none";
};

//open Create
function openCreate() {
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("create_popUp").style.display = "block";
};

//function to signup user
function signUp() {
    const name = document.getElementById("sign_up_name").value;
    const email = document.getElementById("sign_up_email").value;
    const password = document.getElementById("sign_up_password").value;
    const passwordConfirmed = document.getElementById("sign_up_passwordConfirm").value;

    // Validation
    if (!name || !email || !password || !passwordConfirmed) {
        alert("Please fill in all fields");
        return;
    }

    if (password !== passwordConfirmed) {
        alert("Passwords do not match");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return;
    }

    document.getElementById("field").style.display = 'none';
    document.getElementById("center").style.display = "block";

    try {
        const wallet = ethers.Wallet.createRandom();

        if (wallet.address) {
            console.log(wallet);

            //api calls
            const url = 'http://localhost:3000/api/v1/user/signup';

            const data = {
                name: name,
                email: email,
                password: password,
                passwordConfirm: passwordConfirmed,
                address: wallet.address,
                private_key: wallet.privateKey,
                mnemonic: wallet.mnemonic.phrase,
            };

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).then((response) => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message || `HTTP error! status: ${response.status}`);
                    });
                }
                return response.json();
            }).then((result) => {
                document.getElementById("createAddress").innerHTML = wallet.address;
                document.getElementById("createPrivateKey").innerHTML = wallet.privateKey;
                document.getElementById("createdMnmonic").innerHTML = wallet.mnemonic.phrase;
                document.getElementById("center").style.display = "none";
                document.getElementById("accountData").style.display = "block";
                document.getElementById("field").style.display = "none";

                const accountData = {
                    address: wallet.address,
                    private_key: wallet.privateKey,
                    mnemonic: wallet.mnemonic.phrase,
                };

                // Add to accounts list
                const newAccount = addNewAccount(accountData);

                // Set as current account
                currentAccountIndex = newAccount.index;
                localStorage.setItem("currentAccountIndex", currentAccountIndex.toString());

                const userWallet = {
                    address: wallet.address,
                    private_key: wallet.privateKey,
                    mnemonic: wallet.mnemonic.phrase,
                };

                const jsonObj = JSON.stringify(userWallet);
                localStorage.setItem("userWallet", jsonObj);

                console.log("Account created successfully");
            }).catch((error) => {
                console.log("ERROR", error);
                document.getElementById("center").style.display = "none";
                document.getElementById("field").style.display = "block";
                alert("Error creating account. Please try again.");
            });
        }
    } catch (error) {
        console.error("Error creating wallet:", error);
        document.getElementById("center").style.display = "none";
        document.getElementById("field").style.display = "block";
        alert("Error creating wallet. Please try again.");
    }
};


//user login function
//This function will be called when the user clicks the login button
function login() {
    const email = document.getElementById("login_email").value;
    const password = document.getElementById("login_password").value;

    if (!email || !password) {
        alert("Please enter both email and password");
        return;
    }

    document.getElementById("login_form").style.display = "none";
    document.getElementById("center").style.display = "block";

    //api calls
    const url = 'http://localhost:3000/api/v1/user/login';

    const data = {
        email: email,
        password: password,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
            return response.json().then(err => {
                throw new Error(err.message || `HTTP error! status: ${response.status}`);
            });
        }
        return response.json();
    }).then((result) => {
        console.log(result);
        const userWallet = {
            address: result.data.user.address,
            private_key: result.data.user.private_key,
            mnemonic: result.data.user.mnemonic || result.data.user.mnemonics,
        };

        const jsonObj = JSON.stringify(userWallet);
        localStorage.setItem("userWallet", jsonObj);
        window.location.reload();
    }).catch((error) => {
        console.log("ERROR", error);
        document.getElementById("center").style.display = "none";
        document.getElementById("login_form").style.display = "block";
        alert("Login failed. Please check your credentials and try again.");
    });
};


//Function to logout the user
//This function will be called when the user clicks the logout button
function logout() {
    localStorage.removeItem("userWallet");
    window.location.reload();
};


//Function to open the transfer modal
//This function will be called when the user clicks the transfer button
function openTransfer() {
    console.log("Transfer button clicked");
    document.getElementById("transfer_from").style.display = "block";
    document.getElementById("home").style.display = "none";
};


//Function to go back to the home page from the transfer modal
//This function will be called when the user clicks the back button in the transfer modal
function goBack() {
    document.getElementById("transfer_from").style.display = "none";
    document.getElementById("home").style.display = "block";
};


//Function to open the import modal
//This function will be called when the user clicks the import button
function openImport() {
    console.log("Import Token button clicked");
    document.getElementById("import_token").style.display = "block";
    document.getElementById("home").style.display = "none";
};


//Function to go back from the import modal
//This function will be called when the user clicks the back button in the import modal
function importGoBack() {
    document.getElementById("import_token").style.display = "none";
    document.getElementById("home").style.display = "block";
};

//Function to open the activity page
//This function will be called when the user clicks the activity button
function openActivity() {
    console.log("Activity tab clicked");
    document.getElementById("activity").style.display = "block";
    document.getElementById("assets").style.display = "none";

    // Update tab styling
    document.getElementById("open_activity").classList.add("active");
    document.getElementById("open_assets").classList.remove("active");
}

//Function to open the assets page
//This function will be called when the user clicks the assets button
function openAssets() {
    console.log("Assets tab clicked");
    document.getElementById("activity").style.display = "none";
    document.getElementById("assets").style.display = "block";

    // Update tab styling
    document.getElementById("open_assets").classList.add("active");
    document.getElementById("open_activity").classList.remove("active");
};


//Function to go back to the home page
//This function will be called when the user clicks the home button
function goHomePage() {
    console.log("goHomePage function called");

    // Hide all popup screens
    document.getElementById("create_popUp").style.display = "none";
    document.getElementById("createAccount").style.display = "none";
    document.getElementById("accountData").style.display = "none";
    document.getElementById("LoginUser").style.display = "none";
    document.getElementById("import_account").style.display = "none";

    // Show the main wallet home screen
    document.getElementById("home").style.display = "block";

    // Update the UI with current wallet data
    myFunction();
};


//Function to open the import model from login screen
//This function will be called when the user clicks the import account button on login screen
function openImportFromLogin() {
    console.log("Import Account from login clicked!");
    document.getElementById("import_account").style.display = "block";
    document.getElementById("LoginUser").style.display = "none";
};

//Function to open the import model
//This function will be called when the user clicks the import account button
function openImportModel() {
    console.log("Import Account button clicked!");
    document.getElementById("import_account").style.display = "block";
    document.getElementById("home").style.display = "none";
};


//Function to close the import model
//This function will be called when the user clicks the close button in the import model
function closeImportModel() {
    document.getElementById("import_account").style.display = "none";

    // Check if user is logged in or not
    const str = localStorage.getItem("userWallet");
    if (str) {
        // User is logged in, return to home
        document.getElementById("home").style.display = "block";
    } else {
        // User is not logged in, return to login screen
        document.getElementById("LoginUser").style.display = "block";
    }
};


//Function to add a new token
//This function will be called when the user clicks the add token button
function addToken() {
    const address = document.getElementById("token_address").value;
    const name = document.getElementById("token_name").value;
    const symbol = document.getElementById("token_symbol").value;

    //api calls
    const url = 'http://localhost:3000/api/v1/token/createtoken';

    const data = {
        address: address,
        name: name,
        symbol: symbol,
    };

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((response) => response.json()).then((result) => {
        console.log(result);
        window.location.reload();
    }).catch((error) => {
        console.log("ERROR", error);
        alert("Error adding token. Please try again.");
    });
};

//Function to add a new account
//This function will be called when the user clicks the add account button
//Function to add a new account
//This function will be called when the user clicks the add account button
function addAccount() {
    const privateKeyInput = document.getElementById("add_account_private_key").value;

    if (!privateKeyInput) {
        alert("Please enter a private key");
        return;
    }

    if (!privateKeyInput.startsWith("0x")) {
        alert("Private key must start with 0x");
        return;
    }

    try {
        const provider = new ethers.providers.JsonRpcProvider(providerURL);
        let wallet = new ethers.Wallet(privateKeyInput, provider);

        console.log("Wallet created:", wallet);

        // Add to accounts list
        const accountData = {
            address: wallet.address,
            private_key: wallet.privateKey,
            mnemonic: "Imported Account",
        };

        const newAccount = addNewAccount(accountData);

        // Switch to the new account
        switchToAccount(newAccount.index);

        //api calls
        const url = 'http://localhost:3000/api/v1/user/createaccount';

        const data = {
            private_key: wallet.privateKey,
            address: wallet.address,
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((result) => {
            console.log("Account added successfully:", result);
            alert("Account imported successfully!");

            // Hide import screen and show home
            document.getElementById("import_account").style.display = "none";
            document.getElementById("home").style.display = "block";

            // Update UI to show new account
            updateAccountDisplay();
        }).catch((error) => {
            console.log("ERROR", error);
            alert("Error adding account to database, but wallet imported locally.");

            // Still redirect to home even if API fails
            document.getElementById("import_account").style.display = "none";
            document.getElementById("home").style.display = "block";
            updateAccountDisplay();
        });

    } catch (error) {
        console.error("Error creating wallet from private key:", error);
        alert("Invalid private key. Please check and try again.");
    }
};


//myFunction
function myFunction() {
    const str = localStorage.getItem("userWallet");

    // Initialize current account index
    const savedIndex = localStorage.getItem("currentAccountIndex");
    if (savedIndex) {
        currentAccountIndex = parseInt(savedIndex);
    }

    if (!str) {
        // No wallet found, show login screen
        document.getElementById("LoginUser").style.display = "block";
        document.getElementById("home").style.display = "none";
        return;
    }

    try {
        const parseObj = JSON.parse(str);

        if (parseObj?.address) {
            // Ensure account exists in accounts list
            const accounts = getAllAccounts();
            let accountExists = accounts.find(acc => acc.address === parseObj.address);

            if (!accountExists) {
                // Add current wallet to accounts list if not exists
                const newAccount = addNewAccount(parseObj);
                currentAccountIndex = newAccount.index;
            }

            document.getElementById("LoginUser").style.display = "none";
            document.getElementById("home").style.display = "block";

            privateKey = parseObj.private_key;
            address = parseObj.address;

            // Update UI with wallet info
            updateAccountDisplay();
            checkBalance(parseObj.address);
        } else {
            // Invalid wallet data, show login screen
            document.getElementById("LoginUser").style.display = "block";
            document.getElementById("home").style.display = "none";
        }
    } catch (error) {
        console.error("Error parsing wallet data:", error);
        // Invalid JSON, show login screen
        document.getElementById("LoginUser").style.display = "block";
        document.getElementById("home").style.display = "none";
        localStorage.removeItem("userWallet"); // Clear invalid data
    }

    const tokenRender = document.querySelector(".assets");
    const accountRender = document.querySelector(".accountList");

    //api calls to get tokens
    const url = 'http://localhost:3000/api/v1/tokens/alltokens';

    fetch(url).then((response) => response.json()).then((data) => {
        let element = "";

        data.data.tokens.map((token) =>
            element += `
            <div class="assets_item"> 
                <img class="assets_item_img" src="./assets/theblockchaincoders.png" alt="token" />

                <span> ${token.address.slice(0, 15)}...</span>
                <span> ${token.symbol} </span>
            </div>
        `
        );

        tokenRender.innerHTML = element;
    }).catch((error) => {
        console.log("ERROR", error);
    });


    fetch('http://localhost:3000/api/v1/account/allaccount').then((response) => response.json()).then((data) => {
        let accounts = "";

        data.data.accounts.map((account, i) =>
            accounts += `
                <div class="list">
                    <p> ${i + 1}</p>
                    <p class="accountValue" data-address="${account.address}" data-privateKey="${account.private_key}"> ${account.address.slice(0, 25)}...</p>
                </div>
            `
        );

        accountRender.innerHTML = accounts;

    }).catch((error) => {
        console.log(error);
    });

    console.log(privateKey);
};


//writing addresss
function copyAddress() {
    navigator.clipboard.writeText(address).then(() => {
        console.log("Address copied to clipboard");
        // Could add a temporary tooltip or notification here
    }).catch(err => {
        console.error("Failed to copy address:", err);
    });
};


window.onload = myFunction;

