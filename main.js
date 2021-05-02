// Takes a number and returns a string with each number in its word format
function numToWord(num) {
	let word = "";
	let rem = 0; // remainder
	if (num == 0) {
		word = "zero";
		return word;
	}
	while(num > 0) {
		rem = num % 10;
		num = (num - rem) / 10;
		switch(rem) {
			case 0:
				word = "Zero" + word;
				break;
			case 1:
				word = "One" + word;
				break;
			case 2:
				word = "Two"+ word;
				break;
			case 3:
				word = "Three"+ word;
				break;
			case 4:
				word = "Four" + word;
				break;
			case 5:
				word = "Five" + word;
				break;
			case 6:
				word = "Six" + word;
				break;
			case 7:
				word = "Seven" + word;
				break;
			case 8:
				word = "Eight" + word;
				break;
			case 9:
				word = "Nine" + word;
				break;
		} //switch
	} //while
	return word;
}

function main() {
	if (process.argv != null && process.argv.length >= 3) {
		let finalWord = "";
		process.argv.slice(2).forEach((arg) => {
			finalWord += numToWord(arg) + ",";
		});
		console.log(finalWord.slice(0, -1)); // remove the extra comma at the end of the string
	}
}

main();
