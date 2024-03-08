document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
    for(const listcontent of document.getElementsByClassName("listcontent")) {
      const rect = listcontent.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      listcontent.style.setProperty("--mouse-x", `${x}px`);
      listcontent.style.setProperty("--mouse-y", `${y}px`);
    };
  }


  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".menu-btn");
  const spacer = document.querySelector(".spacer");
  // const cards = document.querySelector("#cards");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    spacer.classList.toggle("active");
   // toggleBtn.classList.toggle("close-icon");
   // cards.classList.toggle("active");
  })