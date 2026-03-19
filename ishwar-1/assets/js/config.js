const siteConfig = {
    // ---------------------------------------------------- //
    // 1. BRAND & CONTACT INFO
    // ---------------------------------------------------- //
    brandName: "Ishwar",
    fullName: "Ishwar Cabs",
    phone: "+91 9876543210",          // Use format you want displayed
    whatsapp: "919876543210",         // Use pure numbers with country code
    email: "booking@ishwarcabs.com",
    address: "Pune, Maharashtra, India",

    // ---------------------------------------------------- //
    // 2. SEO & META TAGS
    // ---------------------------------------------------- //
    metaTitle: "Ishwar Cabs - Fast, Safe & Affordable Cabs",
    metaDescription: "Book local, airport, and outstation rides in minutes with Ishwar Cabs. Professional drivers, clean cars, and transparent pricing.",

    // ---------------------------------------------------- //
    // 3. THEME COLORS & STYLING
    // ---------------------------------------------------- //
    // These colors will globally update the website's look
    theme: {
        primaryColor: "#2563eb",   // Vivid Blue - Main brand color
        secondaryColor: "#1e40af", // Dark Blue - Hover states, gradients
        accentColor: "#f59e0b",    // Amber/Yellow - Call to actions, stars
        darkBg: "#0f172a",         // Very dark blue for footer/dark sections
        lightBg: "#f8fafc"         // Very light gray for section backgrounds
    }
};

// ============================================================================ //
// AUTO-INITIALIZATION SCRIPT (DO NOT MODIFY BELOW UNLESS YOU KNOW WHAT YOU'RE DOING)
// ============================================================================ //
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Apply Texts & Basic Links
    document.querySelectorAll('[data-config]').forEach(el => {
        const key = el.getAttribute('data-config');
        if (siteConfig[key]) {
            // Specialized handling for anchor tags based on type
            if (el.tagName === 'A' && key === 'phone') {
                el.href = `tel:${siteConfig[key].replace(/\s/g, '')}`;
                el.textContent = siteConfig[key];
            } else if (el.tagName === 'A' && key === 'email') {
                el.href = `mailto:${siteConfig[key]}`;
                el.textContent = siteConfig[key];
            } else {
                // Regular text replacement
                el.textContent = siteConfig[key];
            }
        }
    });

    // 2. Apply Custom Href Targets (For buttons wrapping icons)
    document.querySelectorAll('[data-config-href]').forEach(el => {
         const key = el.getAttribute('data-config-href');
         if (key === 'whatsapp' && siteConfig.whatsapp) {
             el.href = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`;
         }
         else if (key === 'phone' && siteConfig.phone) {
             el.href = `tel:${siteConfig.phone.replace(/\s/g, '')}`;
         }
    });

    // 3. Apply Theme Colors via CSS Variables
    if (siteConfig.theme) {
        let root = document.documentElement;
        if(siteConfig.theme.primaryColor) root.style.setProperty('--primary', siteConfig.theme.primaryColor);
        if(siteConfig.theme.primaryColor) root.style.setProperty('--primary-rgb', hexToRgb(siteConfig.theme.primaryColor));
        if(siteConfig.theme.secondaryColor) root.style.setProperty('--secondary', siteConfig.theme.secondaryColor);
        if(siteConfig.theme.accentColor) root.style.setProperty('--accent', siteConfig.theme.accentColor);
        if(siteConfig.theme.darkBg) root.style.setProperty('--dark-bg', siteConfig.theme.darkBg);
        if(siteConfig.theme.lightBg) root.style.setProperty('--light-bg', siteConfig.theme.lightBg);
    }

    // 4. Set Meta Info
    if (siteConfig.metaTitle) document.title = siteConfig.metaTitle;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && siteConfig.metaDescription) {
        metaDesc.setAttribute("content", siteConfig.metaDescription);
    }
});

// Helper for RGB alpha conversions
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : "37, 99, 235";
}
