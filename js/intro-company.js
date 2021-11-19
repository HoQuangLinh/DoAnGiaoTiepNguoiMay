var jobsList = Array.from(Array(4).keys());

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
renderJobs();
seemoreBtn.addEventListener("click", () => {
  renderJobs();
  seemoreBtn.style.display = "none";
});
