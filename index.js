// ### Problem 1

// Asks the user to enter 1 for 'count down' and 2 for 'count up'.
// Keep asking them to do that until they enter 'q' to quit. If they enter 1, ask them what they want to count down to.
// Start from 0 and count down to that number by ones. If they enter 2, ask them what they want to count up to.
// Start from 0 and count up to the number by ones.



var user1 = parseInt(prompt("Enter '1' for count down and '2' for count up or hit 'q' to quit"));

// while (user1 === 'q') {
 // user1 = prompt("try again in the loop");
  if (user1 === 1) {
    user1 = parseInt(prompt("what do you want to count down to"));
    for (var x = 0; x >= user1; x--){
      alert(x);
      // if (user1 === 'q') {
      //   alert("successfully quit");
      // }
    }
    x--;

  } else if (user1 === 2) {
    user1 = parseInt(prompt("what do you want to count up to"));
    for (var x = 0; x <= user1; x++){
      alert(x);
      // if (user1 === 'q') {
      //   alert("successfully quit");
      // }
    }
    x++;
  } else if (user1 === 'q') {
    alert("you successfully quit the session bruh");
  }
// }

// ### Challenge
//
// Asks the user to enter their name and keep asking them until they enter 'quit' to quit.
// If they enter Kevin say 'What's up Kevin'. If they enter Kenn say 'Hi Kenn'.
// If they enter Autumn say 'Good morning Autumn'. If they don't enter any of those names say 'Hello [NAME]'.
var userName = prompt("Enter your name");

if (userName === "Kevin") {
  alert("Whats up Kevin");
} else if (userName === "Autumn") {
  alert("Good morning Autumn");
} else {
  alert("Hello" + userName);
}
