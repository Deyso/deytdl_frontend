const { version } = require("../package.json");
document.title = version;
let testBtn = document.querySelector("#test");
let urlInput = document.querySelector("#url-input");

let test = async () => {
  window.open(
    `https://deytdl.herokuapp.com/download?URL=${urlInput.value}`,
    "_blank"
  );
  urlInput.value = "";
};

testBtn.addEventListener("click", test);
