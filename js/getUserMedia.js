//Look after different browser vendors' ways of calling the getUserMedia()
// API method:
// Opera --> getUserMedia
// Chrome --> webkitGetUserMedia
// Firefox --> mozGetUserMedia
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;
// Use constraints to ask for a video-only MediaStream:
var constraints = { audio: false, video: true };
var video = document.querySelector("video");
// Callback to be called in case of success...
navigator.mediaDevices.getUserMedia(constraints)
  .then((stream) => {
    console.log(stream);
    video.srcObject = stream;
    /* use the stream */
  })
  .catch((err) => {
    /* handle the error */
    console.log("navigator.getUserMedia error: ", err);
  });

// function successCallback(stream) {
//   // Note: make the returned stream available to console for inspection
//   window.stream = stream;
//   if (window.URL) {
//     // Chrome case: URL.createObjectURL() converts a MediaStream to a blob URL
//     video.src = window.URL.createObjectURL(stream);
//   } else {
//     // Firefox and Opera: the src of the video can be set directly from the stream
//     video.src = stream;
//   }
//   // We're all set. Let's just play the video out!
//   video.play();
// }
// Callback to be called in case of failures...
// function errorCallback(error) {
//   console.log("navigator.getUserMedia error: ", error);
// }
// // Main action: just call getUserMedia() on the navigator object
// const mediaStream = navigator.getUserMedia(constraints, successCallback, errorCallback);
// video.srcObject = mediaStream;
