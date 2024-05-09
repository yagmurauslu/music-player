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
     src:"https://www.youtube.com/watch?v=KtlgYxa6BMU"
    },
    {
     id:1,
     title:"Je Te Laisserai Des Mots",
     artist:"Patrick Watson",
     duration:"2:40",
     src:"https://www.youtube.com/watch?v=mcdO9UP0hp8"
    },
    {
     id:2,
     title:"To Build A Home",
     artist:"The Cinematic Orchestra",
     duration:"6:11",
     src:"https://www.youtube.com/watch?v=OAYuMygPkbI"
    },
    {
     id:3,
     title:"Remembrance",
     artist:"Balmorhea",
     duration:"5:59",
     src:"https://www.youtube.com/watch?v=C-wu2VcYNCA"
    },
    {
     id:4,
     title:"It's Snowing Like It's the End of the World",
     artist:"Phiec Krobak",
     duration:"11:50",
     src:"https://www.youtube.com/watch?v=kFUeijXc0iw"
    },
    {
     id:5,
     title:"No Surprises",
     artist:"Radiohead",
     duration:"3:47",
     src:"https://www.youtube.com/watch?v=u5CVsCnxyXg"
    },
    {
     id:6,
     title:"Space Song",
     artist:"Beach House",
     duration:"5:20",
     src:"https://www.youtube.com/watch?v=RBtlPT23PTM"
    },
    {
     id:7,
     title:"Slow Dancing In The Dark",
     artist:"JOJI",
     duration:"3:29",
     src:"https://www.youtube.com/watch?v=LUXu4aTnK7E"
    },
    {
     id:8,
     title:"Too Sweet",
     artist:"Hozier",
     duration:"4:11",
     src:"https://www.youtube.com/watch?v=aezstCBHOPQ"
    },
    {
     id:9,
     title:"Yellow",
     artist:"Coldplay",
     duration:"4:32",
     src:"https://www.youtube.com/watch?v=yKNxeF4KMsY"
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