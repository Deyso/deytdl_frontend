let test = async () => {
  let url = "https://deytdl.herokuapp.com/download";
  let data = { URL: "https://www.youtube.com/watch?v=oJiyK0UNx_0" };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  console.log("hello");
  return response.json(); // parses JSON response into native JavaScript objects
};
