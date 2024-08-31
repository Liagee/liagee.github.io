document.addEventListener("DOMContentLoaded", () => {
    // Define explanations for different elements
    const explanations = {
        "home-link": "Go back to the homepage.",
        "products-link": "View our collection of exquisite furniture.",
        "portfolio-link": "Check out our previous works and satisfied customers.",
        "contact-link": "Get in touch with us for inquiries and support.",
        "header-title": "Welcome message and introduction to Furniture Haven.",
        "about-us": "Learn more about our company and our commitment to quality.",
        "footer-text": "Footer containing copyright information and other details."
    };

    // Create a tooltip element
    const tooltip = document.createElement("div");
    tooltip.style.position = "absolute";
    tooltip.style.padding = "8px";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltip.style.color = "white";
    tooltip.style.borderRadius = "5px";
    tooltip.style.display = "none";
    tooltip.style.zIndex = "1000";
    tooltip.style.pointerEvents = "none"; // So it doesn't interfere with other elements
    document.body.appendChild(tooltip);

    // Function to show tooltip
    function showTooltip(event, text) {
        tooltip.textContent = text;
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + 15 + "px";
        tooltip.style.display = "block";
    }

    // Function to hide tooltip
    function hideTooltip() {
        tooltip.style.display = "none";
    }

    // Add event listeners to the elements
    document.querySelector("nav ul li a[href='index.html']").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["home-link"]);
    });
    document.querySelector("nav ul li a[href='home.html']").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["products-link"]);
    });
    document.querySelector("nav ul li a[href='portfolio.html']").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["portfolio-link"]);
    });
    document.querySelector("nav ul li a[href='contact.html']").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["contact-link"]);
    });
    document.querySelector("header h1").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["header-title"]);
    });
    document.querySelector("section h2").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["about-us"]);
    });
    document.querySelector("footer p").addEventListener("mouseover", (event) => {
        showTooltip(event, explanations["footer-text"]);
    });

    // Add mouseout event to hide the tooltip when the mouse leaves the element
    document.querySelectorAll("a, h1, h2, footer p").forEach((element) => {
        element.addEventListener("mouseout", hideTooltip);
    });
});
