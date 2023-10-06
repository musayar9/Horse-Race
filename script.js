const startButton = document.getElementById("startButton");
const allHorse = document.querySelectorAll(".horse");
const finish = document.querySelector("#finish");
const result = document.querySelector(".result");
const restart = document.querySelector("#restart");


startButton.addEventListener("click", startRace);
restart.addEventListener("click", restartRace);

function startRace() {
  restart.disabled = true;
  result.style.display = "none";
  startButton.style.display = "none";
  restart.innerText = "Yarış Başladı";
  restart.style.display = "flex";
  race();
}

function race() {
  const finishLine = finish.offsetLeft;

  let raceFinished = false;

  allHorse.forEach(function (horse) {
    let total = 0;

    const interval = setInterval(function () {
      if (!raceFinished) {
        var random = Math.floor(Math.random() * 50);
        total = total + random;
        horse.style.marginLeft = total + "px";
        horse.style.transition = "all 1s ease";

        if (parseInt(horse.style.marginLeft) >= finishLine - 100) {
          raceFinished = true;
          clearInterval(interval);
          result.innerText = `${horse.id} Yarışı kazandı`;
          restart.disabled = false;
          restart.innerText = "Yeni Yarış";
          restart.style.display = "flex";
          result.style.display = "block";
        }
      }
    }, 600);
  });
}


function restartRace() {
  allHorse.forEach((horse) => {
    restart.style.display = "none";
    result.style.display = "none";
    horse.style.marginLeft = "0px";
    startButton.style.display = "flex";
  });
}
