// This runs on EVERY page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Example: Highlight the active language
    console.log("shopyZ Core Initialized...");
});
