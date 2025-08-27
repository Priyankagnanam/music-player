document.addEventListener("DOMContentLoaded", () => {
    const playlistData = [
      {
        title:"Adada Mazhada",
        artist:"Yuvan Shankar Raja",
        imgSrc:"D:/Project Images/Paiya.jpg",
        songSrc:"D:/Project Songs/Adada mazhada.mp3"
      },
      {
        title:"Arabic Kuthu",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/Arabic Kuthu.jpg",
        songSrc:"D:/Project Songs/Arabic kuthu.mp3"
      },
      {
        title:"Arjunaru Villu",
        artist:"Vidyasagar",
        imgSrc:"D:/Project Images/arjunaru villi.jpg",
        songSrc:"D:/Project Songs/Arjunaru villu.mp3",
      },
      {
        title:"Darling Dambakku",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/Darling Dambakku.jpg",
        songSrc:"D:/Project Songs/Darling dambakku.mp3"
      },
      {
        title:"Hukum",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/Hukum.jpg",
        songSrc:"D:/Project Songs/Hukum.mp3"
      },
      {
        title:"Idicha Pacharisi",
        artist:"Vijay Antony",
        imgSrc:"D:/Project Images/Idicha Pacharisi.jpg",
        songSrc:"D:/Project Songs/Idicha pacharisi.mp3"
      },
      {
        title:"Jimikki Ponnu",
        artist:"Thaman S",
        imgSrc:"D:/Project Images/jimikki ponnu.jpg",
        songSrc:"D:/Project Songs/Jimikki Ponnu.mp3"
      },
      {
        title:"Kattikida",
        artist:"Anirudh",
        imgSrc:"D:/Project Images/kattikida.jpg",
        songSrc:"D:/Project Songs/Kattikida .mp3",
      },
      {
        title:"Kanaa Kangiren",
        song:"G V Prakash",
        imgSrc:"D:/Project Images/Kanaa kangiren.jpg",
        songSrc:"D:/Project Songs/Kanaa Kangiren.mp3"
      },
      {
        title: "Madura Palapalakuthu",
        artist: "Alex Samuel Jenito",
        imgSrc: "D:/Project Images/Madura palapalakuthu.jpg",
        songSrc: "D:/Project Songs/madura palapalakuthu.mp3"
      },
      {
        title:"Maduraikku Pogathadi",
        artist:"A R Rahman",
        imgSrc:"D:/Project Images/Maduraikku pogathadi.jpg",
        songSrc:"D:/Project Songs/Maduraikku pogathadi.mp3"
      },
      {
        title:"Otha Sollala",
        artist:"Vel Murugan",
        imgSrc:"D:/Project Images/otha sollala.jpg",
        songSrc:"D:/Project Songs/Otha sollala.mp3"
      },
      {
        title:"Ranjithame",
        artist:"Thalapathy Vijay",
        imgSrc:"D:/Project Images/ranjithame.jpg",
        songSrc:"D:/Project Songs/Ranjithame.mp3"
      },
      {
        title:"Valayapatti",
        artist:"A R Rahman",
        imgSrc:"D:/Project Images/Valayapatti.jpg",
        songSrc:"D:/Project Songs/Valayapatti.mp3"
      },
    ];
  
    const playlistElement = document.getElementById("playlist");
    const audioElement = document.getElementById("audio");
    const imgElement = document.getElementById("album-art");
  
    if (!playlistElement || !audioElement || !imgElement) {
      console.error("Elements not found");
      return;
    }
  
    playlistData.forEach((song) => {
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      li.dataset.imgSrc = song.imgSrc;
      li.dataset.songSrc = song.songSrc;
      
      playlistElement.appendChild(li);
    });
  
    playlistElement.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const songSrc = e.target.dataset.songSrc;
        const imgSrc = e.target.dataset.imgSrc;
        imgElement.src = imgSrc;
        audioElement.src = songSrc;
        
        audioElement.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
        const activeSong = playlistElement.querySelector(".active");
        if (activeSong) {
          activeSong.classList.remove("active");
        }
        e.target.classList.add("active");
      }
    });
  });
  
  
  
  