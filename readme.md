# _Mr. Roboger's Neighborhood_

#### By _**Carl Sustrich**_

#### _A simple Javascript interface designed to Robotify your number._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Javascript_

## Description

_This browser application will receive a number input from a user, and convert it to robotified text. Numbers including the digits 1, 2 or 3 will be replaced with robotic text._

## Setup/Installation Requirements

* _This page is deployed to GH-Pages. Simply open in your web browser to view._
* _If you wish to clone this work and download the code to your local machine:_

* _Click the '↓Code' button at the top right of [this](https://github.com/CarlSustrich/mrRobogersNeighborhood) respository_
* _Copy the URL for the repository._
* _Open Terminal._
* _Change the current working directory to the location where you want the cloned directory._
* _Type 'git clone' followed by the URL you copied earlier, then press enter_
* _Open the repository in VS Code, and double click the index.html file_

## Known Bugs

* _No known issues_

## License

_This application is not currently covered under any license._

Copyright (c) _11/18/22_ _Carl Sustrich_


## _TDD:_

#### Describe: beepBoop()

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
