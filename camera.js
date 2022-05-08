const video = document.getElementById("camera");
// video.setAttribute

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
});
