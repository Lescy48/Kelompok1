document.getElementById("mode-toggle").addEventListener("click", function() {
    const bodyElement = document.body;
    const toggleLabel = document.getElementById("toggle-label");

    // Toggle between light-mode and dark-mode classes
    bodyElement.classList.toggle("dark-mode");
    bodyElement.classList.toggle("light-mode");

    // Update label text based on the current mode
    if (bodyElement.classList.contains("dark-mode")) {
      toggleLabel.textContent = "Light Mode";
    } else {
      toggleLabel.textContent = "Dark Mode";
    }
});
