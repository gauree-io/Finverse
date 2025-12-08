
const toolsBtn = document.getElementById("tools-btn");
const toolsDropdown = document.getElementById("tools-dropdown");


toolsBtn.addEventListener("click", function() {
    if (toolsDropdown.style.display === "block") {
        toolsDropdown.style.display = "none";  
    } else {
        toolsDropdown.style.display = "block"; 
    }
});

