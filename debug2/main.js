myNumbers = [
    '1230000',
    '0201030',
    '1203010',
    '0031002',
    '0102030',
]


// the function oneTwoThree should be determining if a string is a valid number
// 1. has exactly 1 of each 1,2,3
// 2. and that 1,2,3 appear in the right order (1 before 2 before 3)
// the given example should only have the first and last as true
// but it is giving all as true (valid)
// something is clearly wrong
function oneTwoThree(numbers){

    let result = []

    for (let numberIndex = 0; numberIndex < numbers.length; numberIndex += 1){
        
        let numberString = numbers[numberIndex];
        let validNumber = true;
        let numberCounts = {
            1: 0,
            2: 0,
            3: 0,
        }
        
        for (let index = 0; index < numberString.length; index += 1){
            let char = numberString[index];
            if (char === "1"){
                numberCounts[1] += 1
            }
            if (char === "2"){
                numberCounts[2] += 1
            }
            if (char === "3"){
                numberCounts[3] += 1
            }
        }

        if (numberCounts[1] === 1 && numberCounts[2] === 1 && numberCounts[3] === 1){
            validNumber = true;
        } else {
            validNumber = false;
        }

        if (validNumber === true){

            let oneLocation = numberString.indexOf("1");
            let twoLocation = numberString.indexOf("2");
            let threeLocation = numberString.indexOf("3");

            if (oneLocation < twoLocation && twoLocation < threeLocation){
                validNumber = true
            } else {
                validNumber = false
            }

        }

        result.push(validNumber)

        
    }

    return result;
}

// do not modify the below code

showNumbersResults(myNumbers,oneTwoThree(myNumbers));

function showNumbersResults(numbers,numbersResult){
    let tableElement = document.createElement('table');
    let colGroupElement = document.createElement('colgroup');
    tableElement.append(colGroupElement);
    let colElement = document.createElement('col')
    colElement.className = 'resultCol';
    colGroupElement.prepend(document.createElement('col'));
    colGroupElement.append(colElement);

    for (let i = 0; i < numbers.length; i++ ){
        
        let tableRowElement = document.createElement('tr');
        
        let tableDataNumbers = document.createElement('td');
        tableDataNumbers.append(numbers[i]);
        tableRowElement.append(tableDataNumbers);
        
        let tableDataResult = document.createElement('td');
        tableDataResult.append(numbersResult[i])
        tableRowElement.append(tableDataResult)
        
        tableElement.append(tableRowElement);
    }
    document.querySelector('body').append(tableElement);
}