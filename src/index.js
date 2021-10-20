const { version } = require("../package.json");
document.title = version;
let testBtn = document.querySelector("#test");
let urlInput = document.querySelector("#url-input");

let test = async () => {
  window.open(`http://localhost:3000/download?URL=${urlInput.value}`, "_blank");
  urlInput.value = "";
};

testBtn.addEventListener("click", test);
