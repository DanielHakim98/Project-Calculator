# Project: Calculator

* Final Project for The Odin Project: Foundation course.
* It's a website contains GUI of calculator that is functional to perform some basics math operation.

---
6/10/21:
* Struggle a lot with the presentation of the numbers in the screen.
* Complete basics mathematical operation (add,subtract,divide,multiply).
* There is some error especially on:
    * Decimal insertion more than once on single number
    * Number is directly 'concat' after clicking on number "For example: 1+2=3, so the screen will show only '3' but when one the number buttons is clicked (assume clicked button "9"), it becomes '39' not '9'.
    * Calculation error if more than one operator stored inside array.
---
7/10/21:
* Fix 2/3 errors on the calculation error except for the decimal insertion and when "=" is clicked when there is no input.
* Style the calculator and add a background image. (The image is taken from Pexels.com, a Copyright free collection of photos).
* Special thanks to Jakub Novacek for the background photo uploaded at Pexels.com
---
8/10/21:
* Still struggling with number direct concats with previous total calculation when number clicked.
* Another thing is handling negative number. Such a mess actually, it's either I'm mindlessly coding or The project is really difficult.
* The code has been simplify but it looks messy because all of them are not put in a function.  
* Functions of calculation are changed with Object with all math operations.
* NaN is thrown when divided by zero but will be replaced when next number or operator is clicked.
