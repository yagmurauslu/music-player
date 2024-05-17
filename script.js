// creating variables for buttons etc.
const playlistSongs = document.getElementById('playlist-songs');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const shuffleButton = document.getElementById('shuffle');

// creating an array for songs
const allSongs = [
    {
     id:0,
     title:"The Night We Met",
     artist:"Lord Huron",
     duration:"3:28",
     src:"The-Night-We-Met.ogg"
    },
    {
     id:1,
     title:"Je Te Laisserai Des Mots",
     artist:"Patrick Watson",
     duration:"2:40",
     src:"Je-te.ogg"
    },
    {
     id:2,
     title:"To Build A Home",
     artist:"The Cinematic Orchestra",
     duration:"6:11",
     src:"To-Build-A-Home.ogg"
    },
    {
     id:3,
     title:"Remembrance",
     artist:"Balmorhea",
     duration:"5:59",
     src:"Remembrance.ogg"
    },
    {
     id:4,
     title:"It's Snowing Like It's the End of the World",
     artist:"Phiec Krobak",
     duration:"11:50",
     src:"Its-Snowing-Like-Its-the-End-of-the-World.ogg"
    },
    {
     id:5,
     title:"No Surprises",
     artist:"Radiohead",
     duration:"3:47",
     src:"No-Surprises.ogg"
    },
    {
     id:6,
     title:"Space Song",
     artist:"Beach House",
     duration:"5:20",
     src:"Space-Song.ogg"
    },
    {
     id:7,
     title:"Slow Dancing In The Dark",
     artist:"JOJI",
     duration:"3:29",
     src:"slow-dancing.ogg"
    },
    {
     id:8,
     title:"Too Sweet",
     artist:"Hozier",
     duration:"4:11",
     src:"Too-Sweet.ogg"
    },
    {
     id:9,
     title:"Yellow",
     artist:"Coldplay",
     duration:"4:32",
     src:"Yellow.ogg"
    },
    {
      id:10,
      title:"Paranoid",
      artist:"Black Sabbath",
      duration:"2:48",
      src:"Paranoid.ogg"
    },
    {
      id:11,
      title:"Delusions of Saviour",
      artist:"Slayer",
      duration:"1:55",
      src:"Delusions-of-Saviour.ogg"
    },
    {
      id:12,
      title:"Duality",
      artist:"Slipknot",
      duration:"3:34",
      src:"Duality.ogg"
    }
];

// audio API
const audio = new Audio();
//users will be able to shuffle and delete songs
let userData = {
 songs : [...allSongs],
 currentSong:null,
 songCurrentTime:0
 
};



const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;
  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");
  playSong(highlightCurrentSong());

  audio.play();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  }else{
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);
  }
};

const playPreviousSong = () =>{
  if (userData?.currentSong === null) return;
  else {
   const currentSongIndex = getCurrentSongIndex();
   const previousSong = userData?.songs[currentSongIndex - 1];

   playSong(previousSong.id);
  }
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );

  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });

  if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
   const songsHTML = array.map((song)=> {
   return `
   <li id="song-${song.id}" class="playlist-song"></li>
   <button class="playlist-song-info" onclick="playSong(${song.id})">
          <span class="playlist-song-title">${song.title}</span>
          <span class="playlist-song-artist">${song.artist}</span>
          <span class="playlist-song-duration">${song.duration}</span>
    </button>
    <button class="playlist-song-delete" aria-label="Delete ${song.title}">
     <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
    </button>
   `;
})
.join("");
playlistSongs.innerHTML = songsHTML;
};

const getCurrentSongIndex = () => {
  return userData?.songs.indexOf(userData?.currentSong);

}

playButton.addEventListener("click",()=>{
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  }else {
    playSong(userData?.currentSong.id);
  }
});

pauseButton.addEventListener("click",pauseSong);

nextButton.addEventListener("click", playNextSong);

previousButton.addEventListener("click",playPreviousSong);

// songs in alphabetical order
const sortSongs = () => {
    userData?.songs.sort((a,b) => {
        if (a.title < b.title) {
          return -1;
        }
    
        if (a.title > b.title) {
          return 1;
        }
    
        return 0;
      });
    
        return userData?.songs;
};

renderSongs(sortSongs());