const box_1 = document.getElementById("box1")
const box_2 = document.getElementById("box2")
const box_3 = document.getElementById("box3")
const box_4 = document.getElementById("box4")
const box_5 = document.getElementById("box5")
const box_6 = document.getElementById("box6")
const box_7 = document.getElementById("box7")
const box_8 = document.getElementById("box8")
const box_9 = document.getElementById("box9")
const game_status = document.getElementById("game-status")
const clear = document.getElementById("clear-button")
const all_boxes = [box_1 , box_2 , box_3 , box_4 , box_5 , box_6 , box_7 , box_8 , box_9]
const x_score_display = document.getElementById("x-score")
const o_score_display = document.getElementById("o-score")

let game_running = true
var x_score = 0
var o_score = 0
let x_turn = true;

function isBoardFull() {
   for (let i = 0; i < all_boxes.length; i++) {
      if (all_boxes[i].textContent === "") {
         return false;
      }
   }
   return true;
}

function clear_all() {
   all_boxes.forEach( function(box) {
      box.textContent = ""
      delete box.dataset.played
   }
   )
}

function victory(winner) {
   game_status.textContent = "Victory For " + winner
   game_running = false
   if(winner == "X") {
      x_score += 1
      x_score_display.textContent = "X : " + x_score
   } else if(winner == "O") {
      o_score += 1
      o_score_display.textContent = "O : " + o_score
   }
}

function ending() {
   console.log("checking")
   if(game_running && box_1.textContent !== "" && box_1.textContent == box_2.textContent && box_2.textContent == box_3.textContent) {
      console.log("Victory for " + box_1.textContent);
      victory(box_1.textContent)
   }  else if (game_running && box_4.textContent !== "" && box_4.textContent == box_5.textContent && box_5.textContent == box_6.textContent) {
      console.log("Victory for " + box_4.textContent);
      victory(box_4.textContent)
   }  else if (game_running && box_7.textContent !== "" && box_7.textContent == box_8.textContent && box_8.textContent == box_9.textContent) {
      console.log("Victory for " + box_7.textContent);
      victory(box_7.textContent)
   }  else if (game_running && box_1.textContent !== "" && box_1.textContent == box_4.textContent && box_4.textContent == box_7.textContent) {
      console.log("Victory for " + box_1.textContent);
      victory(box_1.textContent)
   }  else if (game_running && box_2.textContent !== "" && box_2.textContent == box_5.textContent && box_5.textContent == box_8.textContent) {
      console.log("Victory for " + box_2.textContent);
      victory(box_2.textContent)
   }  else if (game_running && box_3.textContent !== "" && box_3.textContent == box_6.textContent && box_6.textContent == box_9.textContent) {
      console.log("Victory for " + box_3.textContent);
      victory(box_3.textContent)
   }  else if (game_running && box_1.textContent !== "" && box_1.textContent == box_5.textContent && box_5.textContent == box_9.textContent) {
      console.log("Victory for " + box_1.textContent);
      victory(box_1.textContent)
   }  else if (game_running && box_3.textContent !== "" && box_3.textContent == box_5.textContent && box_5.textContent == box_7.textContent) {
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

all_boxes.forEach(function(box) {

   box.addEventListener("click" , function(event) {
      if(!box.dataset.played && x_turn == true && game_running) {
         box.dataset.played = true
         box.style.color = "rgba(0, 0, 0, 0.82)"
         box.textContent = "X";
         x_turn = false;
         ending()

      } else if(!box.dataset.played && game_running){
         box.dataset.played = true
         box.style.color = "rgba(0, 0, 0, 0.82)"
         box.textContent = "O";
         x_turn = true;
         ending()

      }
   })

   box.addEventListener("mouseover" , function() {
      if(x_turn && !box.dataset.played && game_running) {
         box.style.color = "rgba(1, 1, 102, 0.11)"
         box.textContent = "X"
      } else if(x_turn == false && !box.dataset.played && game_running) {
         box.textContent = "O"
         box.style.color = "rgba(1, 1, 102, 0.11)"
      }
   })
   
   box.addEventListener("mouseout" , function() {
      if(!box.dataset.played) {
         box.textContent = ""
      } else {
         box.style.color = "rgba(0, 0, 0, 0.82)"
      }
   })
}) 
