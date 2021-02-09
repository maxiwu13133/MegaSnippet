// Load boards from file or manually
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  //Create variables
  var seconds
  var selected_number;
  var selected_tile;
  var disable_select;
  var total_seconds = 0;
  var timer;
  var gameIsLive = false;

  window.onload = function(){
      id("play_game").addEventListener("click", start_game);
      id("Dark").addEventListener("change", set_background_colour)
      id("White").addEventListener("change", set_background_colour)
      id("easy").addEventListener("change", clear_the_board)
      id("medium").addEventListener("change", clear_the_board)
      id("hard").addEventListener("change", clear_the_board)

      for (let i = 0; i < id("numbers").children.length; i++) {
          id("numbers").children[i].addEventListener("click", function() {
            if (!disable_select) {
                if (this.classList.contains("selected")){
                    this.classList.remove("selected");
                    selected_number = null;
                } else {
                    for (let i = 0; i < 9; i++) {
                        id("numbers").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selected_number = this;
                    update_move();
                }
            }
        })
    }
  }

  function set_background_colour(){
    if (id("White").checked) {
        qs ("body").classList.remove("dark");
    }else {
        qs("body").classList.add("dark");
    }
  }

  function start_game() {
      if(gameIsLive){return}
      set_background_colour();
      let board;
      if (id("easy").checked) board = easy[0];
      else if (id("medium").checked) board = medium[0];
      else board = hard[0];
      lives = 3
      disable_select = false;
      id("lives").textContent = "Lives Left: 3"
      id("status").textContent = "Lets see how good you are"
      create_board(board);
      timer = setInterval(start_timer, 1000);
      id("numbers").classList.remove("hidden");
      id("time_spent").classList.remove("hidden");
      id("status").classList.remove("hidden");
      id("lives").classList.remove("hidden");
      gameIsLive = true;
  }

  function start_timer() {
      ++ total_seconds;
      var minute = Math.floor(total_seconds/60);
      var seconds = total_seconds - minute*60;
      if (minute < 10){
        minute = "0" + minute; 
      }
      if (seconds < 10){
          seconds = "0" + seconds;
      }
      id("time_spent").innerHTML = minute + ":" + seconds;
  }
  
  function create_board(board) {
      clear_the_board();
      let idCount = 0;
      for (let i = 0; i < 81; i++) {
        let tile = document.createElement("p")
        if (board.charAt(i) != "-") {
            tile.textContent = board.charAt(i);
        } else {
          tile.addEventListener("click", function(){
              if (!disable_select){
                  if (tile.classList.contains("selected")){
                      tile.classList.remove("selected");
                      selected_tile = null;
                  } else {
                      for (let i = 0; i < 81; i++)
                      qsa(".tile")[i].classList.remove("selected");
                  }
                  tile.classList.add("selected");
                  selected_tile = tile;
                  update_move();
              }
          })
        }
        tile.id = idCount;
        idCount ++;
        tile.classList.add("tile");
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54) || (tile.id > 71 && tile.id <81)) {
            tile.classList.add("bottom_border");
        }

        if ((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6 || (tile.id + 1) % 9 == 0){
            tile.classList.add("right_border");
        }

        if ((tile.id + 1) % 9 == 1){
            tile.classList.add("left_border");
        }

        if (tile.id < 9){
            tile.classList.add("top_border");
        }
        id("board").appendChild(tile);
      }
  }

  function update_move() {
      if (selected_tile && selected_number) {
          selected_tile.textContent = selected_number.textContent;
          if (check_tile(selected_tile)) {
            selected_tile.classList.remove("selected");
            selected_number.classList.remove("selected");
            selected_number = null;
            selected_tile = null;
            if (check_if_game_is_done()){
                end_game();
            }
          } else {
              disable_select = true;
              selected_tile.classList.add("incorrect");
              setTimeout(function() {
                lives --;
                if (lives === 0) {
                    id("lives").textContent = "Lives Left: " + lives;
                    end_game();
                } else {
                    id("lives").textContent = "Lives Left: " + lives;

                    disable_select = false;
                    if (lives === 2){
                        id("status").textContent = "Big Mistake"
                    } else if (lives === 1) {
                        id("status").textContent = " Haha, you are hanging by a thread"
                    }
                }
                selected_tile.classList.remove("incorrect");
                selected_tile.classList.remove("selected");
                selected_number.classList.remove("selected");
                selected_tile.textContent = "";
                selected_tile = null;
                selected_number = null;
              }, 1000);
              
          }
        }
  }

  function check_if_game_is_done() {
      let tiles = qsa(".tile");
      for (let i = 0; i < tiles.length; i++) {
          if(tiles[i].textContent === "") return false;
      }
      return true;
  }

  function end_game() {
      disable_select = true;
      clearTimeout(timer);
      if (lives === 0) {
        id("status").textContent = "I thought so, You Lose!"
      } else {
          id("status").textContent = "Wow, you actually won. Congratz?"
      }

      gameIsLive = false
  }

  function check_tile(tile) {
      let solution;
      if (id("easy").checked) solution = easy [1];
      else if (id("medium").checked) solution = medium[1];
      else solution = hard[1];
      if (solution.charAt(tile.id) === tile.textContent) return true;
      else return false;
  }

  function clear_the_board() {
      if(gameIsLive){return}
      let tiles = qsa(".tile");
      for ( let i = 0; i < tiles.length; i++) {
          tiles[i].remove();
      }
      if(timer) clearInterval(timer);
      total_seconds = 0
      for (let i = 0; i < id("numbers").children.length; i++) {
          id("numbers").children[i].classList.remove("selected");
      }
      // Clear selected variables
      selected_tile = null;
      selected_number = null;
      id("numbers").classList.add("hidden");
      id("time_spent").classList.add("hidden");
      id("status").classList.add("hidden");
      id("lives").classList.add("hidden");
  }

  //Helper Functions
  function qs(selector) {
      return document.querySelector(selector);
  }

  function qsa(selector) {
      return document.querySelectorAll(selector);
  }

  function id(id){
      return document.getElementById(id);
  }