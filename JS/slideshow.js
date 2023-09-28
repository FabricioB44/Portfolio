let images;

if (window.location.pathname === "/index.html") {
  images = [
    "/Images/EmpresaNatural.png",
    "/Images/ShowCase1.png",
    "/Images/ShowCase2.png",
  ];
} else if (window.location.pathname === "/Pages/HomeEsp.html") {
  images = [
    "../Images/EmpresaNatural.png",
    "../Images/ShowCase1.png",
    "../Images/ShowCase2.png",
  ];
} else {
  images = [];
}
  
  let currentIndex = 0;
  const imageElement = document.getElementById("image3");
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    
    imageElement.style.opacity = 0;
    
    setTimeout(() => {
      imageElement.src = images[currentIndex];
      
      setTimeout(() => {
        imageElement.style.opacity = 1;
        imageElement.style.transform = "translateX(0)";
      }, 500);
      
      imageElement.style.transform = "translateX(100%)";
    }, 500);
  }

  setInterval(nextImage, 6000);