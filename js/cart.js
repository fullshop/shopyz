// js/cart.js

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
// This connects the HTML button to the JavaScript function
document.addEventListener('DOMContentLoaded', () => {
    const confirmBtn = document.querySelector('.btn-confirm');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Stops the page from refreshing
            handleOrderConfirmation(); // Runs your Firebase code
        });
    }
});

// ... your existing handleOrderConfirmation function goes below this ...


function handleOrderConfirmation() {
    // 1. Get Values (Using the exact placeholders from your checkout.html)
    const fullName = document.querySelector('input[placeholder*="Full Name"]')?.value;
    const phone = document.querySelector('input[placeholder*="05"]')?.value;
    const address = document.querySelector('textarea')?.value;
    const wilaya = document.querySelector('select')?.value;
    const total = document.getElementById('total-price')?.innerText;

    // 2. Validation
    if (!fullName || !phone || !address) {
        alert("Please fill in Name, Phone, and Address.");
        return;
    }

    // 3. Prepare Data
    const orderData = {
        customer: fullName,
        phone: phone,
        wilaya: wilaya,
        address: address,
        total: total,
        timestamp: new Date().toLocaleString()
    };

    // 4. Send to Firebase (using the 'database' variable from checkout.html)
    if (typeof database !== 'undefined') {
        database.ref('orders').push(orderData)
            .then(() => {
                window.location.href = 'success.html';
            })
            .catch((error) => {
                alert("Firebase Error: " + error.message);
            });
    } else {
        alert("Database not connected. Check your Firebase config in checkout.html");
    }
}
