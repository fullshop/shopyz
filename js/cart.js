function handleOrderConfirmation() {
    console.log("Starting order confirmation...");

    // 1. Get Values using the IDs we added to checkout.html
    const fullName = document.getElementById('full_name')?.value;
    const phone = document.getElementById('phone_number')?.value;
    const wilaya = document.getElementById('wilaya-select')?.value;
    const address = document.getElementById('delivery_address')?.value;
    
    // Get delivery type (Home or Stop Desk)
    const deliveryType = document.querySelector('.toggle-btn.active')?.innerText;
    
    // Get total price
    const total = document.getElementById('total_payable_value')?.innerText;

    // 2. Validation: Check if Name and Phone are empty
    if (!fullName || fullName.trim() === "" || !phone || phone.trim() === "") {
        alert("Please enter your Name and Phone number.");
        return;
    }

    // 3. Prepare the Data
    const orderData = {
        customer: fullName,
        phone: phone,
        wilaya: wilaya,
        delivery: deliveryType,
        address: address,
        totalAmount: total,
        timestamp: new Date().toLocaleString()
    };

    // 4. Send to Firebase Realtime Database
    // The 'database' variable comes from the script in checkout.html
    database.ref('orders').push(orderData)
        .then(() => {
            console.log("Order saved successfully!");
            // Go to success page
            window.location.href = 'success.html';
        })
        .catch((error) => {
            console.error("Firebase Error:", error);
            alert("Failed to send order. Error: " + error.message);
        });
}
