TDD:
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of numbers regardless wether the input is a string or number"
Code: beepBoop("5");
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should identify a number with '3' in it and replace it"
code: beepBoop(5);
Expected Output: ["Won't you be my neighbor?"]

Test: "It should identify a number with '2' in it and replace it"
code: beepBoop(5);
Expected Output: ["Boop!", "Won't you be my neighbor?"]

Test: "It should identify a number with '1' in it and replace it"
code: beepBoop(5);
Expected Output: ["Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "It should identify a number that does not include '1','2' or '3'  and place that number back into the array unchanged."
code: beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should identify a negative number and prompt the user to enter a number>=0"
Code: beepBoop(-5);
Expected Output: "Please enter a number equal to 0 or greater"
