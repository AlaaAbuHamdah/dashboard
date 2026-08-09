let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#toggle-sidebar");

toggle_sidebar.addEventListener("click", () => {
  let sidebarLeft = window.getComputedStyle(sidebar).left;

  if (window.innerWidth > 767) {
    if (sidebarLeft == "0px") {
      sidebar.style.left = "-250px";
      content.style.marginLeft = "0";
    } else {
      sidebar.style.left = "0";
      content.style.marginLeft = "250px";
    }
  } else {
    if (sidebarLeft == "0px") {
      sidebar.style.left = "-250px";
    } else {
      sidebar.style.left = "0";
    }
  }
});

// toggle_sidebar.addEventListener("click", () => {
//   // الحصول على العرض الفعلي للشريط الجانبي
//   let sidebarWidth = window.getComputedStyle(sidebar).width;
//   if (sidebarWidth === "250px") {
//     sidebar.style.width = "0";
//     content.style.marginLeft = "0";
//   } else {
//     sidebar.style.width = "250px";
//     content.style.marginLeft = "250px";
//   }
// });

let messagesContainer = document.getElementById("messages-container");
let messagesArea = document.getElementById("messages-area");

messagesContainer.addEventListener("click", function () {
  messagesArea.style.display =
    messagesArea.style.display === "block" ? "none" : "block";
});

new DataTable("#example", {
  responsive: true,

  buttons: [
    {
      extend: "copy",
      text: '<i class="fas fa-copy"></i> Copy',
      className: "btn btn-primary btn-sm me-1",
    },
    {
      extend: "excel",
      text: '<i class="fas fa-file-excel"></i> Excel',
      className: "btn btn-success btn-sm me-1",
    },
    {
      extend: "pdf",
      text: '<i class="fas fa-file-pdf"></i> PDF',
      className: "btn btn-danger btn-sm me-1",
    },
  ],
  layout: {
    topStart: "buttons",
    topEnd: "search",
  },
});
