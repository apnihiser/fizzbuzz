//controller function

//get values from user
function getValues(){

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //validate information by use of boolean statement

    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {


        let resultant = fizzBuzz(fizzValue, buzzValue);

        displayFizzBuzz(resultant);

    } else {

        alert("Please enter an integer!");

    }    
}

//logic function
//increment range using forloop
//use modulo to check if number id divisible by 3 or 5, or both 3 and 5 (booleans)
//push to array and return
function fizzBuzz(fizzValue, buzzValue){

    fizzBuzzValues = [];

    for(i = 0; i <= 100; i++){

        if (i % fizzValue == 0){

            fizzBuzzValues.push("fizz");

        } else if (i % buzzValue == 0){

            fizzBuzzValues.push("buzz");

        } else if ((i % fizzValue == 0) && (i % buzzValue == 0)) {

            fizzBuzzValues.push("fizzbuzz");

        } else {

            fizzBuzzValues.push(i);

        }
    }

    return fizzBuzzValues;

}

//view function
//declare string to write
//display function to DOM
function displayFizzBuzz(fbData){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for(let i=0; i < fbData.legth; i += 5) {

        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}
