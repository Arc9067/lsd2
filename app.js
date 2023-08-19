const yes = document.querySelectorAll(".yes");
const modal = document.getElementById("modal");

yes.forEach((ele) => {
  ele.addEventListener("click", () => {
    const audio = new Audio("./audio.mp3");
    modal.style.display = "none";

    audio.play();
  });
});
