const imageSlider = (() => {

  let imageNum = 0;
  let imageSources = [];
  let timer;

  function nextImage() {
    let display = document.querySelector('.display');
    imageNum += 1;

    if (imageNum == imageSources.length) {
      imageNum = 0;
    }

    display.src = imageSources[imageNum];
  }

  function prevImage() {
    let display = document.querySelector('.display');
    imageNum -= 1;

    if (imageNum < 0) {
      imageNum = imageSources.length - 1;
    }
    
    display.src = imageSources[imageNum];
  }

  function startTimer() {
    timer = setInterval(function() {
      nextImage();
      changeImageEffect();
      changeActiveCircle();
    }, 5000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  function setImages(images) {
    imageSources = images;
  }

  const getImages = () => imageSources;

  // DOM and Event Functions

  function setNextButton() {
    const btn = document.querySelector('.next-btn');

    btn.addEventListener('click', function() {
      nextImage();
      changeImageEffect();
      changeActiveCircle();
      resetTimer();
    });
  }

  function setPrevButton() {
    const btn = document.querySelector('.prev-btn');

    btn.addEventListener('click', function() {
      prevImage();
      changeImageEffect();
      changeActiveCircle();
      resetTimer();
    });
  }

  function addCircles() {
    const quickNav = document.querySelector('.quick-nav');
    imageSources.forEach(function(image, index) {

      // Create container for quick nav circles
      let container = document.createElement('div');
      container.classList.add('btn');
      container.classList.add('nav-circle');
      container.addEventListener('click', function() {
        document.querySelector('.display').src = imageSources[index];
        imageNum = index;
        changeImageEffect();
        changeActiveCircle();
        resetTimer();
      });

      // Add the FA icon
      let icon = document.createElement('i');
      icon.classList.add('fas');
      icon.classList.add('fa-circle');

      // Append the icon to the container
      // Append the container to the nav area
      container.appendChild(icon);
      quickNav.appendChild(container);
    });
  }

  // CSS Control Functions

  function changeImageEffect() {
    let display = document.querySelector('.display');
    display.classList.remove("show-img");
    display.classList.add("change-img");
    setTimeout(() => {
      display.classList.add("show-img");
      display.classList.remove("change-img");
    }, 100);
  }

  function changeActiveCircle() {
    const active = document.querySelector('.active-circle');

    // Case for setting the active circle in the setup function
    if (active !== null) {
      active.classList.remove('active-circle');
    }

    const navs = document.querySelectorAll('.nav-circle');
    navs[imageNum].classList.add('active-circle');
  }

  // Setup Function

  function setup() {
    document.querySelector('.display').src = imageSources[0];
    setNextButton();
    setPrevButton();
    addCircles();
    changeActiveCircle();
    startTimer();
  }

  return { setImages, getImages, setup };

})();

export { imageSlider }