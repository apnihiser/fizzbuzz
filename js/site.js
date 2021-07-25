//controller function

//get values from user
function getValues(){

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //validate information by use of boolean statement
    //parse for numbers, check that numbers are ints
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //call logic function
        let resultant = fizzBuzzC(fizzValue, buzzValue);

        //call display function
        displayFizzBuzz(resultant , fizzValue, buzzValue);

    } else {

        alert("Please enter an integer!");

    }    
}

//logic function
//increment range using forloop
//use modulo to check if number id divisible by 3 or 5, or both 3 and 5 (booleans)
//push to array and return
function fizzBuzz(fizzValue, buzzValue){

    let fizzBuzzValues = [];

    for(i = 1; i <= 100; i++){

        if ((i % fizzValue == 0) && (i % buzzValue == 0)){

            fizzBuzzValues.push("FizzBuzz");

        } else if (i % fizzValue == 0) {

            fizzBuzzValues.push("Fizz");

        } else if (i % buzzValue == 0){

            fizzBuzzValues.push("Buzz");

        } else {

            fizzBuzzValues.push(i);

        }
    }

    return fizzBuzzValues;

}

function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {

        Fizz = i % fizzValue == 0;
        Buzz = i % buzzValue == 0;

        switch(true) {

            case Fizz && Buzz: {
                returnArray.push("FizzBuzz");
                break;
            }
            case Fizz: {
                returnArray.push("Fizz");
                break;
            }
            case Buzz: {
                returnArray.push("Buzz");
                break;
            }
            default: {
                returnArray.push(i);
                break;
            }
        }
        
    }

    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue) {
    let returnArray = [];

    for (let i = 1; i < 100; i++) {

        //Empty String evaluates to False
        let value = ((i % fizzValue == 0 ? "Fizz" : "") + (i % buzzValue == 0 ? "Buzz" : "")  || i );
        returnArray.push(value);
        
    }

    return returnArray
}

//view function
//declare string to write
//display function to DOM
function displayFizzBuzz(fbData, fizzValue, buzzValue){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);
        
        //grab just the tds and put them into an array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i + 1]);
        rowCols[1].textContent = fbData[i + 1];

        rowCols[2].classList.add(fbData[i + 2]);
        rowCols[2].textContent = fbData[i + 2];

        rowCols[3].classList.add(fbData[i + 3]);
        rowCols[3].textContent = fbData[i + 3];

        rowCols[4].classList.add(fbData[i + 4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }



}
