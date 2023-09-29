const images = [
    "https://i.imgur.com/qZ9H8vn.png",
    "https://i.imgur.com/Vfwa3Ji.png",
    "https://i.imgur.com/INYYUif.png",
  ];
  
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