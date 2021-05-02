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
				word = "zero" + word;
				break;
			case 1:
				word = "one" + word;
				break;
			case 2:
				word = "two"+ word;
				break;
			case 3:
				word = "three"+ word;
				break;
			case 4:
				word = "four" + word;
				break;
			case 5:
				word = "five" + word;
				break;
			case 6:
				word = "six" + word;
				break;
			case 7:
				word = "seven" + word;
				break;
			case 8:
				word = "eight" + word;
				break;
			case 9:
				word = "nine" + word;
				break;
		} //switch
	} //while
	return word;
}
console.log(numToWord(1234));
console.log(numToWord(1234567890));
console.log(numToWord(9876543210));
console.log(numToWord(10));
console.log(numToWord(0));
