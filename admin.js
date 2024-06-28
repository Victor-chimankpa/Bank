const chart = document.querySelector("#chart").getContext("2d");

new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "SEND",
        data: [
          2000, 33537, 49361, 59095, 57828, 36684, 33572, 39974, 48847, 48116,
          61004,
        ],
        borderColor: "red",
        borderWidth: 2,
      },

      {
        label: "RECEIVE",
        data: [
          31500, 41000, 88800, 26000, 35000, 32689, 90000, 700, 60000, 24832,
          36844,
        ],
        borderColor: "green",
        borderWidth: 2,
      },
    ],
  },

  options: {
    responsive: true,
  },
});

// FOR SIDE NAV

const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sideNav = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sideNav.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideNav.style.display = "none";
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});
