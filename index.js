const imageTag = document.getElementById("imageTag");

window.electronAPI.getImage((event, data) => {
  imageTag.src = data;
  window.electronAPI.closeWindow2();
});
