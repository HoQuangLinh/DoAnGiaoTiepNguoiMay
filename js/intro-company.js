var jobsList = Array.from(Array(4).keys());
const topHeader = document.getElementById("top-page-header");
const people = document.getElementById("people");
const intro = document.getElementById("intro");
const jobs = document.getElementById("jobs");
const offices = document.getElementById("offices");

var jobs_list = document.querySelector(".jobs-body-list");
var seemoreBtn = document.querySelector(".see-more-btn");

const deleteJobs = () => {
  var child = jobs_list.lastElementChild;
  while (child) {
    jobs_list.removeChild(child);
    child = jobs_list.lastElementChild;
  }
};

const renderJobs = (index) => {
  jobsList.forEach((e) => {
    let job = `
           
            <div class="job-body-card">
                <div class="job-body-card-left">
                    <p class="job-body-position">Giám đốc đổi mới chuyên trách </p>

                    <div class="job-body-desc-row">
                        <div class="job-body-desc-item">
                            <i class="fas fa-briefcase"></i>
                            <p>Giám đốc trở lên</p>
                        </div>
                        <div class="job-body-desc-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <p>Hà Nội</p>
                        </div>
                        <div class="job-body-desc-item">
                            <i class='bx bx-calendar-minus'></i>
                            <p>20/11/2021</p>
                        </div>
                    </div>
                </div>
                <div class="job-body-card-right">
                    <button class="job-body-card-btn">Chi tiết</button>
                </div>

            </div> `;
    jobs_list.insertAdjacentHTML("beforeend", job);
  });
};

const handleJobItemClick = () => {
  var listJobs = document.querySelectorAll(".job-body-card-btn");
  listJobs.forEach((job) => {
    job.addEventListener("click", () => {
      console.log("test");
      location.href = "./search-page.html";
    });
  });
};

seemoreBtn.addEventListener("click", () => {
  renderJobs();
  handleJobItemClick();
  seemoreBtn.style.display = "none";
});
people.addEventListener("click", (e) => {
  var peopleContainer = document.querySelector(".people-container");

  const yOffset = -80;
  const y =
    peopleContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});
intro.addEventListener("click", () => {
  const introHeader = document.querySelector(".intro-container-header");
  const yOffset = -80;
  const y =
    introHeader.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});

jobs.addEventListener("click", () => {
  const jobsHeader = document.querySelector(".jobs-container-header");
  const yOffset = -80;
  const y =
    jobsHeader.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});
offices.addEventListener("click", () => {
  const officesHeader = document.querySelector(
    ".space-working-container-header"
  );
  const yOffset = -80;
  const y =
    officesHeader.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
});
topHeader.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

handleJobItemClick();

$(document).ready(function () {
  $(".space-working-row").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<i class="fas fa-chevron-left slick-prev slick-arrow"></i>`,
    nextArrow: `<i class="fas fa-chevron-right slick-next slick-arrow"></i>`,

    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});
