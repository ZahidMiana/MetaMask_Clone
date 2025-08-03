// Test script to reset extension state
// Open browser console and run this to reset your extension

// Clear all stored wallet data
localStorage.removeItem("userWallet");

// Reload the extension
window.location.reload();

console.log("✅ Extension reset! You should now see the login screen with Create Account and Import Account buttons.");
