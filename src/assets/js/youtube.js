'use strict';


document.addEventListener("DOMContentLoaded", function () {
    // Cargar la API de YouTube una vez
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

// Variables para los jugadores
let players = [];

const API_KEY = import.meta.env.VITE_YOUTUBE;
const CHANNEL_ID = "UCzpl6CJP6lo5vjsEAeIHnsg";
const MAX_RESULTS = 5

// async function fetchRecentVideos() {
// //   const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=videos`;
  
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error en la petición: ${response.statusText}`);
//     }
    
//     const data = await response.json();
//     console.log('Videos recientes:', data);
//     return data.items; // Retorna los videos

//   } catch (error) {
//     console.error('Error al obtener los videos:', error);
//   }
// }

// fetchRecentVideos();

// Esta función se llama cuando la API de YouTube está lista
window.onYouTubeIframeAPIReady = function() {

    players.push(new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: '4Maxu-_TvmE?si=_XBfT_h8rvFPwzsx&?c',
        playerVars: {
            'autoplay': 1,
            'color': 'white', 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }));

    players.push(new YT.Player('player2', {
        height: '390',
        width: '640',
        videoId: 'AZ_gUedNn4Y?si=6Ok2ZBCmhgBTJm_O',
        playerVars: {
            'autoplay': 1,
            'color': 'white',
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }));

    players.push(new YT.Player('player3', {
        height: '390',
        width: '640',
        videoId: 'oC_iqZl-bSU?si=MvcDdWN9w7VbLStV"',
        playerVars: {
            'autoplay': 1,
            'color': 'white',
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }));
};

// Funciones de evento para los jugadores
function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo() {
    players.forEach(player => player.stopVideo());
}
