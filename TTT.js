let boxaccess = document.querySelectorAll(".box");
let reset = document.querySelector(".RG");
let winmessage = document.querySelector(".winmessage");
let newGame = document.querySelector(".newGame");
let noWinner = document.querySelector(".noWinner");
let count  = 0;
let turnO = true;

// Playing the game

let winningcondt = [[0,1,2],[2,1,0],[3,4,5],[5,4,3],[6,7,8],[8,7,6],[0,3,6],[6,3,0],[1,4,7],[7,4,1],[2,5,8],[8,5,2],[0,4,8],[8,4,0],[2,4,6],[6,4,2]];

    boxaccess.forEach((box) => {
        box.addEventListener("click", () => {
            count = count+1;
            if(turnO){
                box.innerText = "O";
                turnO = false;
                box.style.color = "purple";
            }
            else{
                box.innerText = "X";
                turnO = true;
                box.style.color = "green";
            }
            newGame.disabled = true;
            reset.addEventListener("click", () => {
    
                boxaccess.forEach((box) => {
                    box.innerText = "";
                    box.disabled = false;
                    noWinner.innerText = "";
                    count = 0;

                });
            });
            checkWinner();


            box.disabled = true;
        });
    });

    const checkWinner = () => {
        for(let i of winningcondt){
            let val1pos = boxaccess[i[0]].innerText;       // revise lines 30-32
            let val2pos = boxaccess[i[1]].innerText;
            let val3pos = boxaccess[i[2]].innerText;

        if(val1pos != "" && val2pos != "" && val3pos != ""){
            if(val1pos === val2pos && val2pos === val3pos){
                console.log(winmessage.innerText = "Winner: " + val1pos);
                reset.disabled = true;
                newGame.disabled = false;
                for(let box of boxaccess){
                    box.disabled = true;
                }

                    newGame.addEventListener("click", () => {
                    winmessage.innerText = "";
                    boxaccess.forEach((box) => {
                        box.disabled = false;
                        reset.disabled = false;
                        box.innerText = "";
                        noWinner.innerText = "";
                        count = 0;

                    })
                })
            }
            else if(count == 9 && val1pos === val2pos && val2pos === val3pos){
                winmessage.innerText = "Winner: " + val1pos;
            }

        }
        }
    };