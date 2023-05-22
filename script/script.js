const navBar = document.querySelector("nav");
const resMenu = document.querySelector(".nav_tabs2")

const toggleBtn= document.querySelector("nav i");


window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) {
    navBar.style.background="rgba(255, 255, 255, 0.26)";
    navBar.style.backdropFilter="blur(5px)";
    // navBar.style.borderBottom="1px solid rgba(255, 255, 255, 0.3);"
  } else {
    navBar.style.background="transparent";
    navBar.style.backdropFilter="blur(0px)";
  }
});

toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("fa-xmark");
    resMenu.classList.toggle("show");
    resMenu.style.background="rgba(255, 255, 255, 0.26)";
    resMenu.style.backdropFilter="blur(5px)";
})


document.addEventListener("mousemove", parallax);

function parallax(e) {
    this.querySelectorAll(".image").forEach((shift) => {
        const position = shift.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * position) / 90;
        const y = (window.innerHeight - e.pageY * position) / 90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}