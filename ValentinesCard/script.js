function moveRandomEl(elm) {
    elm.style.position = "absolute"; // Ensure the element is positioned
    let maxWidth = window.innerWidth - elm.clientWidth; // Prevent going off-screen
    let maxHeight = window.innerHeight - elm.clientHeight;

    elm.style.top = Math.floor(Math.random() * maxHeight) + "px";
    elm.style.left = Math.floor(Math.random() * maxWidth) + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});


function playMusic() {
    let music = document.getElementById('bg-music');
    music.play();
    sessionStorage.setItem('musicPlaying', 'true');  // Save the state of music
}

function stopMusic() {
    let music = document.getElementById('bg-music');
    music.pause();
    sessionStorage.setItem('musicPlaying', 'false');  // Save the state of music
}

// Check if music is playing when navigating away
function handleYesClick() {
    playClickSound();
    sessionStorage.setItem('musicPlaying', 'true');
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 300);
}

function handleNoClick() {
    playClickSound();
    sessionStorage.setItem('musicPlaying', 'true');
    setTimeout(() => {
        window.location.href = "no2.html";
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
    let bgMusic = document.getElementById("bg-music");
    let playButton = document.querySelector(".play-button");
  
    // Check if music should resume from storage
    if (localStorage.getItem("musicPlaying") === "true") {
      bgMusic.currentTime = localStorage.getItem("musicTime") || 0;
      bgMusic.play();
    }
  
    playButton.addEventListener("click", function () {
      bgMusic.play();
      localStorage.setItem("musicPlaying", "true");
    });
  
    // Save current time before leaving the page
    window.addEventListener("beforeunload", function () {
      localStorage.setItem("musicTime", bgMusic.currentTime);
    });
  });
  
    
  
