let Img1 = document.querySelector(".Image1");
let Img2 = document.querySelector(".Image2");
let Img3 = document.querySelector(".Image3");
let Ys = document.querySelector(".Ys");
let Cs = document.querySelector(".Cs");
let Result = document.querySelector(".Result");
let reset = document.querySelector(".Reset");
let count = 0;
let count2 = 0;
Result.hidden = true;
          
            Img1.addEventListener(("click"), () => {
                Result.hidden = false;
                let Random = Math.floor(Math.random()*3);  // generates random value among 0,1 and 2  
                console.log("stone");
                if(Random == 0){
                    console.log("stone");
                    Result.innerText = "It's a draw, both are Stone";
                    Result.style.backgroundColor = "yellow";
                }
                else if(Random == 1){
                    console.log("paper");
                    Cs.innerText = count = count + 1;
                    Result.innerText = "You lost, paper beats stone";
                    Result.style.backgroundColor = "Red";
                }
                else if(Random == 2){
                    console.log("scissors");
                    Ys.innerText = count2 = count2 + 1;
                    Result.innerText = "You won, stone beats scissors";
                    Result.style.backgroundColor = "green";
                }

            });

            Img2.addEventListener(("click"), () => {
                let Random = Math.floor(Math.random()*3);
                console.log("paper");
                Result.hidden = false;
                if(Random == 0){
                    console.log("stone");
                    Ys.innerText = count2 = count2 + 1;
                    Result.innerText = "You won, paper beats stone";
                    Result.style.backgroundColor = "green";
                }
                else if(Random == 1){
                    console.log("paper");
                    Result.innerText = "It's a draw, both are paper";
                    Result.style.backgroundColor = "yellow";
                }
                else if(Random == 2){
                    console.log("scissors");
                    Cs.innerText = count = count + 1;
                    Result.innerText = "You lost, scissors beats paper";
                    Result.style.backgroundColor = "Red";
                }

            });

            Img3.addEventListener(("click"), () => {
                let Random = Math.floor(Math.random()*3);
                console.log("scissors");
                Result.hidden = false;
            if(Random == 0){
                console.log("stone");
                Cs.innerText = count = count + 1;
                Result.innerText = "You lost, stone beats scissors";
                Result.style.backgroundColor = "Red";
            }
            else if(Random == 1){
                console.log("paper");
                Ys.innerText = count2 = count2 +1;
                Result.innerText = "You won, scisors beats paper";
                Result.style.backgroundColor = "Green";
            }
            else if(Random ==2){
                console.log("scissors");
                Result.innerText = "It's a draw, both are paper";
                Result.style.backgroundColor = "Yellow";
            }

            });

            reset.addEventListener(("click"), () => {
                Result.hidden = true;
                count = 0;
                count2 = 0;
                Ys.innerText = 0;
                Cs.innerText = 0;
            });