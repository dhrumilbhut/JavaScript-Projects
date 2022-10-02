// Select all elements
const now_playing = document.querySelector(".now-playing");
const track_art = document.querySelector(".track-art");
const track_name = document.querySelector(".track-name");
const track_artist = document.querySelector(".track-artist");

const playpause_btn = document.querySelector(".play-pause-track");
const next_btn = document.querySelector(".next-track");
const prev_btn = document.querySelector(".prev-track");

const seek_slider = document.querySelector(".seek-slider");
const volume_slider = document.querySelector(".volume-slider");
const curr_time = document.querySelector(".current-time");
const total_duration = document.querySelector(".total-duration");

// Global variables
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create <audio> element
let current_track = document.createElement("audio");

// List of tracks to be played
let track_list = [
  {
    name: "Kesariya - Brahmastra",
    artist: "Arijit Singh, Amitabh Bhattacharya, Pritam",
    image: "img/kesariya.jpg",
    path: "songs/Kesariya.mp3",
  },
  {
    name: "Dil - Ek Villain Returns",
    artist: "Raghav Chaitanya, Kaushik Guddu",
    image: "img/dil.jpg",
    path: "songs/Dil.mp3",
  },
  {
    name: "Deva Deva - Brahmastra",
    artist: "Arijit Singh, Amitabh Bhattacharya, Jonita Gandhi, Pritam",
    image: "img/deva.jpg",
    path: "songs/Deva.mp3",
  },
  {
    name: "Galliyan Returns - Ek Villain Returns",
    artist: "Ankit Tiwari, Manoj Muntashir",
    image: "img/galliyan.jpg",
    path: "songs/Galliyan.mp3",
  },
];

function loadTrack(track_index) {
  // Clear previous seek timer
  clearInterval(updateTimer);
  resetValues();

  // Load new track
  current_track.src = track_list[track_index].path;
  current_track.load();

  // Update details of the track
  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "Playing " + (track_index + 1) + " of " + track_list.length;

  // Set interval of 1000 miliseconds
  updateTimer = setInterval(seekUpdate, 1000);

  // Next track when current is completed
  current_track.addEventListener("ended", nextTrack);
}

// Reset all the values
function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Control Buttons
function playpauseTrack() {
  if (!isPlaying) {
    playTrack();
  } else {
    pauseTrack();
  }
}

// Play the loaded track
function playTrack() {
  var playPromise = current_track.play();
  if (playPromise !== undefined) {
    playPromise.then(function () {}).catch(function (error) {});
  }
  isPlaying = true;

  // change the icon to pause icon
  playpause_btn.innerHTML = `<i class="fas fa-pause-circle fa-5x"></i>`;
}

// Pause loaded track
function pauseTrack() {
  current_track.pause();
  isPlaying = false;

  // change icon to play icon
  playpause_btn.innerHTML = `<i class="far fa-play-circle fa-5x"></i>`;
}

// Load and play the next track, if current track is last one then play first track
function nextTrack() {
  if (track_index < track_list.length - 1) {
    track_index += 1;
  } else {
    track_index = 0;
  }

  loadTrack(track_index);
  playTrack();
}

// Load and play the previous track, if current track is first one then play first track
function prevTrack() {
  if (track_index > 0) {
    track_index -= 1;
  } else {
    track_index = track_list.length - 1;
  }

  loadTrack(track_index);
  playTrack();
}

// Calculate the seek position and set track position to the calculated seek position
function seekTo() {
  let seekto = current_track.duration * (seek_slider.value / 100);
  current_track.currentTime = seekto;
}

// Set volume according to the volume slider
function setVolume() {
  current_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  // Check if current track duration is eligible number or not
  if (!isNaN(current_track.duration)) {
    seekPosition = current_track.currentTime * (100 / current_track.duration);
    seek_slider.value = seekPosition;

    // Calculate time left and total duration
    let currentMinutes = Math.floor(current_track.currentTime / 60);
    let currentSeconds = Math.floor(
      current_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(current_track.duration / 60);
    let durationSeconds = Math.floor(
      current_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    // Display updated duration
    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Load the first track
loadTrack(track_index);
