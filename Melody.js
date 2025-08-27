/*document.addEventListener("DOMContentLoaded", () => {
    let playlistData = [
      { title: "Thanni Can", artist: "Harshath Khan", imgSrc: "D:/Project Images/Thanni Can.jpg", songSrc:"D:/Project Songs/Thanni Can.mp3" },
      { title: "Pookal Pookum Tharunam", artist: "G V Prakash", imgSrc: "path/to/Pookal Pookum.jpg", songSrc: "path/to/Pookal Pookum.mp3" },
      { title: "Unnakenna venum sollu", artist: "Harris Jayaraj", imgSrc: "path/to/Unakenna vennum sollu.jpg", songSrc: "path/to/Unakenna venum sollu.mp3" },
    ];
  
    const playlistElement = document.getElementById("playlist");
    const audioElement = document.getElementById("audio");
    const imgElement = document.getElementById("album-art");
  
    if (!playlistElement || !audioElement || !imgElement) {
      console.error("Elements not found");
      return; // Exit if elements are not found
    }
  
    playlistData.forEach((song) => {
      const image = new Image();
      const li = document.createElement("li");
      li.textContent = `${song.title} - ${song.artist}`;
      li.dataset.song = song.songSrc;
      image.src = song.imgSrc;
      playlistElement.appendChild(li);
    });
  
    playlistElement.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        const songSrc = e.target.dataset.src;
        const imgSrc = e.target.dataset.img;
  
        audioElement.src = songSrc;
        imgElement.src = imgSrc;
  
        // Attempt to play the audio
        audioElement.play().catch((error) => {
          console.error("Error playing audio:", error);
          // Optionally, display an error message in the UI
          // messageElement.textContent = "Unable to play audio. Please try again.";
        });
  
        const activeSong = playlistElement.querySelector(".active");
        if (activeSong) {
          activeSong.classList.remove("active");
        }
        e.target.classList.add("active");
      }
    });
  });*/



document.addEventListener("DOMContentLoaded", () => {
  const playlistData = [
    {
      title:"Adi Rangi",
      artist:"D Imman",
      imgSrc:"D:/Project Images/Adi rangi.jpg",
      songSrc:"D:/Project Songs/Adi rangi.mp3"
    },
    {
      title:"Adiye Azhage",
      artist:"Sean Rolden",
      imgSrc:"D:/Project Images/adiye azhage.jpg",
      songSrc:"D:/Project Songs/adiye azhage.mp3"
    },
    {
      title:"Aradhya",
      artist:"Sid Sriram",
      imgSrc:"D:/Project Images/Aradhya.jpg",
      songSrc:"D:/Project Songs/Aradhya.mp3"
    },
    {
      title:"Aval",
      artist:"Santhosh Narayanana",
      imgSrc:"D:/Project Images/aval.jpg",
      songSrc:"D:/Project Songs/Aval.mp3"
    },
    {
      title:"Donu Donu",
      artist:"Anirudh",
      imgSrc:"D:/Project Images/Donu Donu.jpg",
      songSrc:"D:/Project Songs/Donu Donu.mp3"
    },
    {
      title:"Katchi Sera",
      artist:"Sai Abhyankar",
      imgSrc:"D:/Project Images/Katchi sera.jpg",
      songSrc:"D:/Project Songs/Katchi Sera.mp3"
    },
    {
      title:"Nenjukulla Nee",
      artist:"Vijay Prakash",
      imgSrc:"D:/Project Images/Nenjukkulla nee.jpg",
      songSrc:"D:/Project Songs/nenjukkulla nee.mp3"
    },
    {
      title:"Oxygen",
      artist:"Hip Hop Tamizha",
      imgSrc:"D:/Project Images/oxygen.jpg",
      songSrc:"D:/Project Songs/Oxygen.mp3"
    },
    {
      title:"Kadhaippoma",
      artist:"Sid Sriram",
      imgSrc:"D:/Project Images/kadhaippoma.jpg",
      songSrc:"D:/Project Songs/Kadhaippoma.mp3",
    },
    {
      title: "Pookal Pookum Tharunam",
      artist: "G V Prakash",
      imgSrc: "D:/Project Images/Pookal Pookum.jpg",
      songSrc: "D:/Project Songs/Pookal Pookum.mp3"
    },
    {
      title: "Poovukkul",
      artist: "A R Rahman",
      imgSrc: "D:/Project Images/Unakenna vennum sollu.jpg",
      songSrc: "D:/Project Songs/Poovukkul.mp3"
    },
    {
      title:"So Baby",
      artist:"Anirudh",
      imgSrc:"D:/Project Images/Ithuvarai partha pennil.jpg",
      songSrc :"D:/Project Songs/Ithuvarai partha pennil.mp3"
    },
    {
      title:"Suthuthe Suthuthe",
      artist:"Yuvan Shankar Raja",
      imgSrc:"D:/Project Images/Paiya.jpg",
      songSrc:"D:/Project Songs/Suthuthe suthuthe.mp3"
    },
    {
      title: "Thanni Can",
      artist: "Harshath Khan",
      imgSrc: "D:/Project Images/Thanni Can.jpg",
      songSrc: "D:/Project Songs/Thanni Can.mp3"
    },
    {
      title:"Thimiru Kattatha Di",
      artist: "D SathyaPrakash",
      imgSrc: "D:/Project Images/Thimiru Kattatha di.jpg",
      songSrc: "D:/Project Songs/Thimiru Kattatha di.mp3"
    },
    {
      title: "Unnakenna Venum Sollu",
      artist: "Harris Jayaraj",
      imgSrc: "D:/Project Images/Unakenna vennum sollu.jpg",
      songSrc: "D:/Project Songs/Unakenna venum sollu.mp3"
    },
    {
      title:"Yen Aala Pakka Poren",
      artist:"Shreya Ghoshal",
      imgSrc:"D:/Project Images/Yen aala pakka poren.jpg",
      songSrc:"D:/Project Songs/Yen aala pakka poren.mp3"
    }
    
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



