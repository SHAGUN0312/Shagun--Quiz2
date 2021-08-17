//Level 1 array
var quiz_L1 = [
  {
    question:
      "\n" + "Harvey and Donna have a secret ritual involving a what?" + "\n",
    correctAns: "can opener",
  },
  {
    question: "\n" + "Where did Rachel earn her law degree?" + "\n",
    correctAns: "Columbia",
  },
  {
    question: "\n" + "What is Harvey Specter’s middle name?" + "\n",
    correctAns: "Reginald",
  },
];

//Level 2 array
var quiz_L2 = [
  {
    question:
      "\n" +
      "From which law school must all associates be graduated in order to work at Jessica Pearson's law firm?" +
      "\n",
    correctAns: "Harvard",
  },
  {
    question:
      "\n" +
      "In order to save the firm, Jessica once entered into a merger with _______________." +
      "\n",
    correctAns: "Edward Darby",
  },
  {
    question:
      "\n" + "Which partner loves mudding and had a cat named Bruno?" + "\n",
    correctAns: "Louis Litt",
  },
  {
    question:
      "\n" +
      "Who sends the tip to the U.S. Attorney’s office that Mike is a fraud?" +
      "\n",
    correctAns: "Sheila Sazs",
  },
];

//Level 3 array
var quiz_L3 = [
  {
    question:
      "\n" +
      "At the end of Suits Season 3, who does Mike leave Pearson Specter to work for instead?" +
      "\n",
    correctAns: "Sidwell Investment Group",
  },
  {
    question:
      "\n" +
      "Whose father is named partner at a rival law firm to that at which they work?" +
      "\n",
    correctAns: "Rachel Zane",
  },
  {
    question:
      "\n" +
      "What does Harvey whisper when Louis hugs him after recovering from a heart attack?" +
      "\n",
    correctAns: "Help Me",
  },
  {
    question: "\n" + "What is Mike's grandmother called?" + "\n",
    correctAns: "Grammy",
  },
  {
    question: "\n" + "What is the name of Nigel's cat?" + "\n",
    correctAns: "Mikado",
  },
];

const chalk = require("chalk");
readlineSync = require("readline-sync");

var final = 0;
var name = readlineSync.question("What is your name?" + "\n");
console.log(
  chalk.bold.yellowBright("Hello " + name + "!") +
    "\n" +
    "Welcome to the Quiz!\n"
);

console.log(
  "Rulebook: \nThis Quiz contains 3 levels, you'll be informed about the rules of each level, later in the game.\nOne general rule is: You have to write the full name to get full points.\n"
);
console.log(chalk.bold.yellowBright("All the best!"));

//Leaderboard
console.log(
  chalk.redBright.bold(
    "\nScoreboard:\n 1.Harvey - 12 points\n 2.Donna  - 9 points\n 3.Mike - 8 points"
  )
);

console.log("Are you Ready?");

//Press Enter to Continue
readlineSync.question(chalk.bold.blueBright("Hit Enter key to continue."), {
  hideEchoBack: true,
  mask: "",
});

var Score = 0;
//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bold.greenBright("Woohoo! Right answer"));
    console.log("Points gained: 1");
    readlineSync.question(chalk.bold.blueBright("Hit Enter key to continue."), {
      hideEchoBack: true,
      mask: "",
    });
    Score++;
  } else {
    console.log(chalk.bold.redBright("Oops! Wrong answer"));
    readlineSync.question(chalk.bold.blueBright("Hit Enter key to continue."), {
      hideEchoBack: true,
      mask: "",
    });
  }
}

console.clear();

//calling play() for L-1
console.log("\n" + "************ LEVEL - 1 ************");
console.log(
  "\n" +
    "This level contains 3 questions.If you get more than 1 of them correct, you'll be promoted to Level 2!\n"
);
console.log(chalk.bold.yellowBright("All the best!\n"));
readlineSync.question(chalk.bold.blueBright("Hit Enter key to continue."), {
  hideEchoBack: true,
  mask: "",
});
for (i = 0; i < quiz_L1.length; i++) {
  var current = quiz_L1[i];
  play(current.question, current.correctAns);
}
console.clear();
console.log("You scored " + Score + " out of 3");
final += Score;

if (Score >= 2) {
  console.log(
    "\n" +
      "Wow! Very Well Played " +
      name +
      "\n" +
      "You have been promoted to Level 2!" +
      "\n"
  );

  // Level 2
  console.log("************LEVEL 2************" + "\n");
  console.log(
    "\n" +
      "This level contains 4 questions.If you get 3 or more correct, you'll be promoted to Level 3!\n"
  );

  console.log(chalk.bold.yellowBright("All the best!\n"));
  readlineSync.question(chalk.bold.blueBright("Hit Enter key to continue."), {
    hideEchoBack: true,
    mask: "",
  });

  var Score = 0;

  //calling function for L-2
  for (i = 0; i < quiz_L2.length; i++) {
    var current = quiz_L2[i];
    play(current.question, current.correctAns);
  }
  console.clear();
  console.log("You scored " + Score + " out of 4");
  final += Score;

  if (Score >= 3) {
    console.log(
      "Awesome! " +
        name +
        "\n" +
        "\n" +
        " Congratulations! You have been promoted to Level 3!\n"
    );

    // Level 3
    console.log("************LEVEL 3************");
    console.log(
      "\n" +
        "This level contains 5 questions.If you get 4 of them correct, you are a genius!\n"
    );

    console.log(chalk.bold.yellowBright("All the best!\n"));

    readlineSync.question(chalk.bold.blueBright("Hit Enter key to continue."), {
      hideEchoBack: true,
      mask: "",
    });
    var Score = 0;
    //calling function for L-3
    for (i = 0; i < quiz_L3.length; i++) {
      var current = quiz_L3[i];
      play(current.question, current.correctAns);
    }
    console.clear();
    console.log("You scored " + Score + " out of 5");
    final += Score;
    if (Score >= 5)
      console.log(
        "You are a Genius! " +
          name +
          "\n" +
          " Thank you for your precious time."
      );
    else console.log("Thank you for your precious time.");
  } else {
    console.log(
      "Thanks for trying! Play again to unlock level - 3. Good Luck!" + "\n"
    );
  }
} else {
  console.log("No more questions for you! Thanks for trying.");
}

console.log("\nYour final Score is: " + final);
console.log(
  "\nShare a screenshot if you've beaten the highest Score!\nLet's see if you know Suits better than Harvey himself."
);
