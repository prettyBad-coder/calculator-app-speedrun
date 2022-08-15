const numberButtons = document.querySelectorAll(".calc__button--number");
const optionButtons = document.querySelectorAll(".calc__button--option");
const submitButton = document.querySelector(".calc__button--submit");
const screen = document.querySelector(".calc__screen");
let option = "";
let optionClicked = false;
let screenInnerOne = "";
let screenInnerTwo = "";

numberButtons.forEach(button => {
	button.addEventListener("click", () => {
		if (!optionClicked) {
			screenInnerOne += button.innerHTML;
			screen.innerHTML = screenInnerOne;
			console.log("one");
		} else {
			screenInnerTwo += button.innerHTML;
			console.log("two");
			screen.innerHTML = screenInnerTwo;
		}
	})
})

optionButtons.forEach(button => {
	const localOption = button.innerHTML;
	button.addEventListener("click", () => {
		optionClicked = true;
		screen.innerHTML = "";
		option = localOption;
	})
})

submitButton.addEventListener("click", () => {
	switch (option) {
		case "/":
			screen.innerHTML = +screenInnerOne / +screenInnerTwo;
			cleanScreen();
			break;

		case "*":
			screen.innerHTML = +screenInnerOne * +screenInnerTwo;
			cleanScreen();
			break;
			
		case "+":
			screen.innerHTML = +screenInnerOne + +screenInnerTwo;
			cleanScreen();
			break;
			
		case "-":
			screen.innerHTML = +screenInnerOne - +screenInnerTwo;
			cleanScreen();
			break;
			
		case ".":
			console.log("To nic nie robi bo mi się nie chciało");
			break;

		default:
			// cleanScreen();
			break;
	}
})

const cleanScreen = () => {
	optionClicked = false;
	screenInnerOne = "";
	screenInnerTwo = "";
}