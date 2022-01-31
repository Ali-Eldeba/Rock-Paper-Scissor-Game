new WOW().init();

let game = document.querySelector(".game");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let elements = ["rock", "paper", "scissor"];

// Choosing a Random Element From elements Array
let randomElement = elements[Math.floor(Math.random() * elements.length)];

function choose(id) {
  rock.style.display = "none";
  paper.style.display = "none";
  scissor.style.display = "none";

  document.getElementById(id).style.display = "block";

  let h1 = document.createElement("h1");
  let vs = document.createTextNode("VS");

  // Appending
  h1.appendChild(vs);
  game.appendChild(h1);

  if (randomElement === "rock") {
    var div = document.createElement("div");
    var shape = document.createElement("i");
    var h3 = document.createElement("h3");
    var text = document.createTextNode("Rock");

    // classing / iding
    div.id = "rock";
    shape.className = "fas fa-hand-rock";

    // Appending
    h3.appendChild(text);
    div.appendChild(shape);
    div.appendChild(h3);
    game.appendChild(div);
  } else if (randomElement === "paper") {
    var div = document.createElement("div");
    var shape = document.createElement("i");
    var h3 = document.createElement("h3");
    var text = document.createTextNode("Paper");

    // classing / iding
    div.id = "paper";
    shape.className = "fas fa-toilet-paper";

    // Appending
    h3.appendChild(text);
    div.appendChild(shape);
    div.appendChild(h3);
    game.appendChild(div);
  } else if (randomElement === "scissor") {
    var div = document.createElement("div");
    var shape = document.createElement("i");
    var h3 = document.createElement("h3");
    var text = document.createTextNode("Scissor");

    // classing / iding
    div.id = "scissor";
    shape.className = "fas fa-hand-scissors";

    // Appending
    h3.appendChild(text);
    div.appendChild(shape);
    div.appendChild(h3);
    game.appendChild(div);
  }

  // Draw
  if (id === "rock" && div.id === "rock") {
    end("draw");
  } else if (id === "paper" && div.id === "paper") {
    end("draw");
  } else if (id === "scissor" && div.id === "scissor") {
    end("draw");
  }

  // Win
  if (id === "rock" && div.id === "scissor") {
    end("win");
  } else if (id === "paper" && div.id === "rock") {
    end("win");
  } else if (id === "scissor" && div.id === "paper") {
    end("win");
  }

  // Lose
  if (id === "rock" && div.id === "paper") {
    end("lose");
  } else if (id === "paper" && div.id === "scissor") {
    end("lose");
  } else if (id === "scissor" && div.id === "rock") {
    end("lose");
  }
}

function end(state) {
  if (state === "win") {
    var h1 = document.createElement("h1");
    var won = document.createTextNode("You Won!");

    // Appending
    h1.appendChild(won);
    document.body.appendChild(h1);

    // Styling
    h1.style.cssText =
      "position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); ";

    setTimeout(function () {
      location.reload();
    }, 2000);
  } else if (state === "lose") {
    var h1 = document.createElement("h1");
    var lose = document.createTextNode("You Lost!");

    // Appending
    h1.appendChild(lose);
    document.body.appendChild(h1);

    // Styling
    h1.style.cssText =
      "position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); ";

    setTimeout(function () {
      location.reload();
    }, 2000);
  } else if (state === "draw") {
    var h1 = document.createElement("h1");
    var draw = document.createTextNode("Draw!");

    // Appending
    h1.appendChild(draw);
    document.body.appendChild(h1);

    // Styling
    h1.style.cssText =
      "position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); ";

    setTimeout(function () {
      location.reload();
    }, 2000);
  }
}
