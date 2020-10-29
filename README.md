Describe: toRoman()

Test: "It will convert users input to numbers from string."
Expect: (toRoman("54")).toEqual(54);

Test: "It will give alert error for numbers entered above 3,999"
Expect: (toRoman (4000)).toEqual(alert("no numbers above 3900"));

Test: "It will give number values to roman numeral symbols"
Expect: (toRoman (1000)).toEqual("M");

Test: "It will give specific values based on what it is divisible by, based on subtractive method of if else statements""
Expect: (toRoman (2000)).toEqual("M,D,C,L,X,V,I");

Test: "It will join all pushed elements into a string"
Expect: (toRoman (6)).toEqual ("VI");

Test: "It will gather more consice roman numeral symbol for user input"
Expect: (toRoman (2000)).toEqual("MM");

Test: "It will give final roman numeral based on user input integer"
Expect: (toRoman (50)).toEqual("L");