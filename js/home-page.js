const listCompany = document.querySelectorAll(".company-card");
const listBestWork = document.querySelectorAll(".best-work-card");
const listCategory = document.querySelectorAll(".category-card");
const listJobHandbook = document.querySelectorAll(".job-handbook-card");
const buttonSearch = document.querySelector(".search-btn");
const navbarMobileModal = document.querySelector("#navbar-mobile-modal");
const navbarMobile = document.querySelector(".navbar-mobile");
const barResponsive = document.querySelector(".bar-responsive");
const btnCancel = document.querySelector(".navbar-mobile-btn-cancel");
//Auto scroll to list job when click button search
buttonSearch.addEventListener("click", () => {
  console.log("test");
  const best_work_top = document.getElementById("best-work-top");
  // buttonSearch.scrollIntoView();

  best_work_top.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
  });
});

//Add event click for each card on home page
listCompany.forEach((company) => {
  company.addEventListener("click", () => {
    location.href = "./intro-company.html";
  });
});
listBestWork.forEach((work) => {
  work.addEventListener("click", () => {
    location.href = "./search-page.html";
  });
});
listCategory.forEach((category) => {
  category.addEventListener("click", () => {
    location.href = "./search-page.html";
  });
});
listJobHandbook.forEach((handbook) => {
  handbook.addEventListener("click", () => {
    location.href = "./blog-detail.html";
  });
});

const showMobileNavbar = () => {
  //Show mobile-navbar responsive

  barResponsive.addEventListener("click", () => {
    navbarMobileModal.style.visibility = "visible";
    navbarMobile.classList.add("active");
  });
};
const hideMobileNavbar = () => {
  btnCancel.addEventListener("click", () => {
    navbarMobileModal.style.visibility = "hidden";
    navbarMobile.classList.remove("active");
  });
};
window.addEventListener("click", function (e) {
  if (!barResponsive.contains(e.target) && !navbarMobile.contains(e.target)) {
    console.log("ok");
    navbarMobileModal.style.visibility = "hidden";
    navbarMobile.classList.remove("active");
  }
});
showMobileNavbar();
hideMobileNavbar();
