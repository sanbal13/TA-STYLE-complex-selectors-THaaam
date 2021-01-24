let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", handleClick);
function handleClick(event) {
    toggle.classList.toggle("circle-toggle");
}