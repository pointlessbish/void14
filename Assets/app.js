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
  const toggleBtn = document.querySelector(".toggle-btn");
  // const cards = document.querySelector("#cards");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
   // cards.classList.toggle("active");
  })