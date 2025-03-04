//Navbar
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  //Navbar
  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark");
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("bg-dark");
    navbar.classList.remove("sticky-navbar");
  }

  //Animated Elements
  const targetElements = document.querySelectorAll(".animated");

  targetElements.forEach((element) => {
    let rect = element.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight + 200)
      element.classList.add("active");
    else if (
      rect.bottom < window.innerHeight - 600 ||
      rect.top > window.innerHeight
    )
      element.classList.remove("active");
  });
};
