const form = document.getElementById("form");
const input = document.getElementById("input");
const leaderboardMain = document.getElementById("leaderboard-main");
const toggleBtn = document.getElementById("socket-connection-toggle");

async function main() {
  //subject to change
  let counter = 0;
  const socket = io({
    auth: {
      serverOffset: 0,
    },
    //enable retries
    ackTimeout: 10000,
    retries: 3,
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked rng button");
    let player = document.getElementById("username");
    //set a random score
    let randInt = Math.floor(Math.random() * 10000);
    //now we will send
    if (player.innerText) socket.emit("score msg", player.innerText, randInt);
    else throw Error("Unknown username error");
    input.value = randInt;
  });
  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (socket.connected) {
      toggleBtn.innerText = "Connect";
      socket.disconnect();
    } else {
      toggleBtn.innerText = "Disconnect";
      socket.connect();
    }
  });
  //subject to change, does not have to recover lost scores, onlu current state
  socket.on("score msg", (data) => {
    console.log(data);
    /*const item = document.createElement("li");
    item.textContent = `User: ${player}, Score: ${msg}`;
    leaderboardMain.appendChild(item);*/
  });
}

main();
