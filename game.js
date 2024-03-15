let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset_btn");
let newBtn = document.querySelector(".new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let player0 = true;
let count = 0;

let patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const enabledBtn = () => {
  for (let btn of btns) {
    btn.disabled = false;
    player0 = true;
    count = 0;
    btn.innerText = " ";
    msgContainer.classList.add("hide");
  }
};

const disabledBtn = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("click");
    if (player0) {
      btn.innerText = "0";
      player0 = false;
      btn.style.color = "#240115";
    } else {
      btn.innerText = "X";
      player0 = true;
      btn.style.color = "#DE3C4B";
    }
    btn.disabled = true;
    count++;
    let isWinner = gameWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const showWin = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};

const gameWinner = () => {
  for (let pattern of patterns) {
    let p1 = btns[pattern[0]].innerText;
    let p2 = btns[pattern[1]].innerText;
    let p3 = btns[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showWin(p1);
        return true;
      }
    }
  }
};

const gameDraw = () => {
  msg.innerText = `Game was Draw.`;
  msgContainer.classList.remove("hide");
  disabledBtn();
};

resetBtn.addEventListener("click", enabledBtn);
newBtn.addEventListener("click", enabledBtn);
