const images = [
    "../Images/EmpresaNatural.png",
    "../Images/ShowCase1.png",
    "../Images/ShowCase2.png",
  ];
  
  let currentIndex = 0;
  const imageElement = document.getElementById("image3");
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    
    // Apply opacity transition for fade out
    imageElement.style.opacity = 0;
    
    setTimeout(() => {
      imageElement.src = images[currentIndex];
      
      // Reset opacity and apply transform transition for sliding in
      setTimeout(() => {
        imageElement.style.opacity = 1;
        imageElement.style.transform = "translateX(0)";
      }, 500);
      
      // Apply transform to slide in from the right
      imageElement.style.transform = "translateX(100%)";
    }, 500); // Adjust the timing to match your transition duration
  }
  
  // Change the image every 3 seconds (adjust as needed)
  setInterval(nextImage, 6000);