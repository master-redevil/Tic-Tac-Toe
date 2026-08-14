const box_1 = document.getElementById("1")
const box_2 = document.getElementById("2")
const box_3 = document.getElementById("3")
const box_4 = document.getElementById("4")
const box_5 = document.getElementById("5")
const box_6 = document.getElementById("6")
const box_7 = document.getElementById("7")
const box_8 = document.getElementById("8")
const box_9 = document.getElementById("9")
const game_status = document.getElementById("game-status")
const clear = document.getElementById("clear-button")
const all_boxes = [box_1 , box_2 , box_3 , box_4 , box_5 , box_6 , box_7 , box_8 , box_9]

function isBoardFull() {
   for (let i = 0; i < all_boxes.length; i++) {
      if (all_boxes[i].textContent === "") {
         return false;
      }
   }
   return true;
}

function clear_all() {
   box_1.textContent = ""
   box_2.textContent = ""
   box_3.textContent = ""
   box_4.textContent = ""
   box_5.textContent = ""
   box_6.textContent = ""
   box_7.textContent = ""
   box_8.textContent = ""
   box_9.textContent = ""
}

let game_running = true

function victory(winner) {
   game_status.textContent = "Victory For " + winner
   game_running = false
}

function ending() {
   console.log("checking")
   if(box_1.textContent !== "" && box_1.textContent == box_2.textContent && box_2.textContent == box_3.textContent) {
      console.log("Victory for " + box_1.textContent);
      victory(box_1.textContent)
   }  else if (box_4.textContent !== "" && box_4.textContent == box_5.textContent && box_5.textContent == box_6.textContent) {
      console.log("Victory for " + box_4.textContent);
      victory(box_4.textContent)
   }  else if (box_7.textContent !== "" && box_7.textContent == box_8.textContent && box_8.textContent == box_9.textContent) {
      console.log("Victory for " + box_7.textContent);
      victory(box_7.textContent)
   }  else if (box_1.textContent !== "" && box_1.textContent == box_4.textContent && box_4.textContent == box_7.textContent) {
      console.log("Victory for " + box_1.textContent);
      victory(box_1.textContent)
   }  else if (box_2.textContent !== "" && box_2.textContent == box_5.textContent && box_5.textContent == box_8.textContent) {
      console.log("Victory for " + box_2.textContent);
      victory(box_2.textContent)
   }  else if (box_3.textContent !== "" && box_3.textContent == box_6.textContent && box_6.textContent == box_9.textContent) {
      console.log("Victory for " + box_3.textContent);
      victory(box_3.textContent)
   }  else if (box_1.textContent !== "" && box_1.textContent == box_5.textContent && box_5.textContent == box_9.textContent) {
      console.log("Victory for " + box_1.textContent);
      victory(box_1.textContent)
   }  else if (box_3.textContent !== "" && box_3.textContent == box_5.textContent && box_5.textContent == box_7.textContent) {
      console.log("Victory for " + box_3.textContent);
      victory(box_3.textContent)
   } else if (isBoardFull()) {
      game_status.textContent = "It's A Tie"
   }
}

clear.addEventListener("click" , function () {
   clear_all()
   game_status.textContent = "Start Game!"
   game_running = true

});

let x_turn = false;

function turn(box)  {
   if(x_turn == true && box.textContent === "" && game_running) {
      box.textContent = "X";
      x_turn = false;
   } else if(box.textContent === "" && game_running){
      box.textContent = "O";
      x_turn = true;
   }
   ending()
};

box_1.addEventListener("click" , function () {
   turn(box_1)
});

box_2.addEventListener("click" , function () {
   turn(box_2)
});

box_3.addEventListener("click" , function () {
   turn(box_3)
});

box_4.addEventListener("click" , function () {
   turn(box_4)   
});

box_5.addEventListener("click" , function () {
   turn(box_5)   
});

box_6.addEventListener("click" , function () {
   turn(box_6)   
});

box_7.addEventListener("click" , function () {
   turn(box_7)   
});

box_8.addEventListener("click" , function () {
   turn(box_8)   
});

box_9.addEventListener("click" , function () {
   turn(box_9)   
});
