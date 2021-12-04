var prevScrollpos = window.pageYOffset;
const dropdownProfile = document.querySelector(".dropdown-profile");
const btnDropdow = document.querySelector(".btn-dropdown");

const handleShowMeNuClick = () => {
  var menuBtn = document.querySelector(".menu-btn");
  var navbar = document.querySelector(".navbar");
  var menu = document.querySelector(".nav-menu");
  var closeBtn = document.querySelector(".close-btn");
  menuBtn.addEventListener("click", () => {
    //Show menu
    navbar.classList.add("active");
    menu.classList.add("active");
  });
  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
    menu.classList.remove("active");
  });
  navbar.addEventListener("click", (e) => {
    if (e.target == navbar) {
      navbar.classList.remove("active");
      menu.classList.remove("active");
    }
  });
};

const handleShowDropDown = () => {
  btnDropdow.addEventListener("click", () => {
    console.log("test");
    dropdownProfile.classList.toggle("active");
  });
};
window.addEventListener("click", (e) => {
  if (!btnDropdow.contains(e.target)) {
    dropdownProfile.classList.remove("active");
  }
  //remove active khi
});

handleShowMeNuClick();
handleShowDropDown();
handleCompanyItemClick();
