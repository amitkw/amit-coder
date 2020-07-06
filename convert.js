//method convert amount from number to readable word format
function convertNumberToWord(amount) {
    let EMPTY = "";
    let wordFormat = "";
	let single_digits =
	[
		EMPTY, "One ", "Two ", "Three ", "Four ", "Five ", "Six ",
		"Seven ", "Eight ", "Nine ", "Ten ", "Eleven ","Twelve ",
		"Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ",
		"Seventeen ", "Eighteen ", "Nineteen "
    ];
	let tens_multiple =
	[ 
		EMPTY, EMPTY, "Twenty ", "Thirty ", "Forty ", "Fifty ","Sixty ", "Seventy ", "Eighty ", "Ninety "
	];
	let tens_power = [ "Hundred ", "Thousand ", "Lakh ", "Crore " ];
	
	wordFormat = convertTwoDigitNumber(amount % 100,"");
	if(amount > 100 && (amount % 100) != 0)
	wordFormat = "and " + wordFormat + "Only";
	if(amount > 99) {
		//This line of code handel Hundred
		wordFormat = convertTwoDigitNumber((Math.floor(amount / 100))%10, tens_power[0] ) + wordFormat;
		//This line of code handel Thousand(1000 - 10,000)
		wordFormat = convertTwoDigitNumber((Math.floor(amount / 1000))%100, tens_power[1] )+ wordFormat;
		//This line of code handel Lakh(1,00000 - 10,00000)
		wordFormat = convertTwoDigitNumber((Math.floor(amount / 100000))%100, tens_power[2])  + wordFormat;
		//This line of code handel Crore(1,0000000 - 10,0000000)
		wordFormat = convertTwoDigitNumber((Math.floor(amount / 10000000))%100, tens_power[3])  + wordFormat;
		}
	return wordFormat;

	//This method handling last-two-digit of amount
	function convertTwoDigitNumber(value, suffix) {
		let word = "";
		if(value == 0)
		return EMPTY;
		if(value > 19)
		{
		word = tens_multiple[Math.floor(value/10)];
		word += single_digits[value%10] +suffix;
		return word;
		}
		else
		{
		word = single_digits[value] + suffix;
		return word;
		}
	}
    
}