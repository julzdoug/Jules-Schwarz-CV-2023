
  const toggleButton = document.getElementById("toggleButton");
  const viewport = document.getElementById("viewport");
  
  toggleButton.addEventListener("click", () => {
    viewport.classList.toggle("activate-media-query");
  });
  