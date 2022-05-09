const video = document.getElementById("camera");
const captureButton = document.getElementById("capture-image");
const imageTag = document.getElementById("image");

captureButton.addEventListener("click", () => {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataURL = canvas.toDataURL();
  window.electronAPI.sendImage(dataURL);

  new Notification("Image Captured", {
    body: "Image is successfully captured from live video.",
  });
});

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
});
