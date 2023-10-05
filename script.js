const startButton = document.getElementById("startButton");
const allHorse = document.querySelectorAll(".horse");
const finish = document.querySelector("#finish");
const result = document.querySelector(".result");

startButton.addEventListener("click", startRace);

function startRace() {
  startButton.disabled = true;
  result.style.display = "none";
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

        if (parseInt(horse.style.marginLeft) >= finishLine - 100) {
          raceFinished = true;
          clearInterval(interval);
          result.innerText = `${horse.id} Yarışı kazandı`;
          startButton.disabled = false;
          startButton.textContent = "Yarışı Yeniden Başlat";
          result.style.display="block"
        }
      } 
    }, 600);
  });
}
