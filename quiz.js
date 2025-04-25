const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

// destructured the object because we'll be needing these again for other questions we add
const { correctAnswer, options, question } = questionObj;
let score = 0;

//Accesing all the elements
const questionEl = document.querySelector("#question");
const optionEl = document.querySelector("#options");
const scoreEl = document.querySelector("#score");

//Manipulating the DOM

//Setting the question text context
questionEl.textContent = question;

const shuffledOptions = shuffleOptions(options);
//Populating the options div with the buttons
shuffledOptions.forEach((opt) => {
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionEl.appendChild(btn);

  //Event handling on the button
  btn.addEventListener("click", function () {
    if (opt === correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    console.log(score);
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = "Quiz Completed!";
    optionEl.textContent = "";
  });
});

//Shuffling the options
function shuffleOptions(options) {
  for(let i = options.length -1;i>=0;i--){
    const j = Math.floor(Math.random()*i+1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}


