const randomUserUrl = "/users/random";
const GET = "GET";

const username = document.getElementById("username");
const randomNameBtn = document.getElementById("random-name");

async function fetchRequest(url, method, body = null) {
  //if body not null set request headers body
  try {
    //return json() operation here returns Promise  because async functions
    //laways return a Promise
    return await fetch(url, { method });
  } catch (e) {
    //error may pasue webapp
    throw Error("Network Error");
  }
}

async function main() {
  randomNameBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let res = await fetchRequest(randomUserUrl, GET);
    let data = await res.json();
    username.innerText = data.name;
  });

  if (!username.innerText) {
    console.log("Here 1");
    let res = await fetchRequest(randomUserUrl, GET);
    let data = await res.json();
    console.log("Here 2");
    username.innerText = data.name;
  }
}

main();
