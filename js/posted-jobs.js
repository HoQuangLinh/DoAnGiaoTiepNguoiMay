const filterModal = document.querySelector(".filter-modal");
const filterBtn = document.querySelector(".filter-btn");
const listFilter = document.querySelectorAll(".filter-modal-item");
const btnSearch = document.querySelector(".btn-search");

var postedJobs = [];
for (var i = 0; i < 100; i++) {
  const job = {
    id: i + 1,
    company: "Công ty cổ phần KSFINANCE",
    position: "Chuyên viên phân tích dữ liệu",
    deadline: "21/12/2021",
    view: Math.round(Math.random() * 100),
    cv: Math.round(Math.random() * 100),
    address: "Hà Nội, Thành phố Hồ Chí Minh",
  };
  postedJobs = [...postedJobs, job];
}

renderPostedJobs = (pageIndex) => {
  var postedJobTable = document.createElement("table");
  var table = document.getElementById("posted-job");
  var tableContainer = document.querySelector(".table-container");
  postedJobTable.setAttribute("id", "posted-job");
  postedJobTable.setAttribute("tabIndex", pageIndex);
  let thead = `
    <tr>
      <th>Số thứ tự</th>
      <th>Công ty</th>
      <th>Chức danh</th>
     <th>Thời hạn</th>
     <th>Số lần xem</th>
     <th>Hồ sơ ứng tuyển</th>
      <th>Địa điểm</th>
   </tr>
  `;
  postedJobTable.insertAdjacentHTML("beforeend", thead);
  table.remove();

  //0 -> 0....8
  //1-> 8......16
  //2-> 16......24
  postedJobs.slice(pageIndex * 8, pageIndex * 8 + 8).map((job) => {
    var background;

    if (job.id % 2 != 0) {
      background = "background_even";
    }

    let row = `<tr class='${background}'>
      <td>${job.id}</td>
      <td>${job.company}</td>
      <td>${job.position}</td>
      <td>${job.deadline}</td>
      <td>${job.view}</td>
      <td>${job.cv}</td>
      <td>${job.address}</td>
    </tr>`;
    postedJobTable.insertAdjacentHTML("beforeend", row);
    tableContainer.appendChild(postedJobTable);
  });
};

filterBtn.addEventListener("click", () => {
  filterModal.classList.toggle("active");
});
window.addEventListener("click", (e) => {
  if (!filterModal.contains(e.target) && !filterBtn.contains(e.target)) {
    filterModal.classList.remove("active");
  }
});
listFilter.forEach((item) => {
  item.addEventListener("click", () => {
    location.href = "./posted-jobs.html";
  });
});
btnSearch.addEventListener("click", () => {
  location.href = "./posted-jobs.html";
});

var cells = document.querySelectorAll(".cell-js");

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    var cells = document.querySelectorAll(".cell-js");
    cells.forEach((cell) => {
      cell.classList.remove("active");
    });
    cell.classList.add("active");
    renderPostedJobs(index);
  });
});

const handlePrevClick = () => {
  var cells = document.querySelectorAll(".cell-js");

  const prevBtn = document.getElementById("prev-btn");
  prevBtn.addEventListener("click", () => {
    var table = document.getElementById("posted-job");

    if (table.tabIndex > 0) {
      cells.forEach((cell) => {
        cell.classList.remove("active");
      });
      cells[table.tabIndex - 1].classList.add("active");
      renderPostedJobs(table.tabIndex - 1);
    }
  });
};
const handleNextClick = () => {
  var cells = document.querySelectorAll(".cell-js");

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", () => {
    var table = document.getElementById("posted-job");

    if (table.tabIndex <= 2) {
      cells.forEach((cell) => {
        cell.classList.remove("active");
      });
      cells[table.tabIndex + 1].classList.add("active");
      renderPostedJobs(table.tabIndex + 1);
    }
  });
};
renderPostedJobs(0);
handlePrevClick();
handleNextClick();
