let box = document.querySelectorAll(".cell");
console.log(box);
let newgamebtn = document.querySelectorAll("#new-game");
let resetbtn = document.querySelectorAll("#reset-game");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
console.log(msg);
turnO = true;

const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetbttn = () => {
    turnO = true;
    enablebox();
    msg_container.classList.add("hide");
};

box.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.innerText === "") { 
            if (turnO) {
                cell.innerText = "X";
                turnO = false;
                checkwinner();
            } else {
                cell.innerText = "O";
                turnO = true;
                checkwinner();
            }
        }
    });
});

const disableBoxes = () => {
    for (let cell of box) {
        cell.disabled = true;
    }
};

const enablebox = () => {
    for (let cell of box) {
        cell.disabled = false;
        cell.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let posv1 = box[pattern[0]].innerText;
        let posv2 = box[pattern[1]].innerText;
        let posv3 = box[pattern[2]].innerText;
        if (posv1 !== "" && posv2 !== "" && posv3 !== "") {
            if (posv1 === posv2 && posv2 === posv3) {
                console.log("winner", posv1);
                showwinner(posv1);
            }
        }
    }
};

newgamebtn.forEach(button => {
    button.addEventListener("click", resetbttn);
});

resetbtn.forEach(button => {
    button.addEventListener("click", resetbttn);
});

