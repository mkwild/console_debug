
let myGrid = [
    [0,1,0,0,1],
    [0,0,0,0,0],
    [0,0,1,1,0],
    [1,1,0,0,0],
    [0,0,1,0,1],
    [0,1,0,0,0],
]


// the function checkGrid should be checking if each row
// has exactly 2 ones
// but it is not giving the correct results
// let's see if we can fix this function
// use console.log to help debug this code.
function checkGrid(grid){
    
    let result = []
    let count = 0;

    for (let rowIndex = 0; rowIndex < grid.length; rowIndex += 1){
        
        let row = grid[rowIndex];

        for (let index = 0; index < row.length; index += 1){

            if(index === 1){
                count = count + 1;
            }

        }
        
        if (count === 2 ){
            result.push(true);
        } else {
            result.push(false)
        }
    
    }

    return result
    
}

// Do not change any of the bellow code
// feel free to investigate it

showGridResults(myGrid,checkGrid(myGrid));

function showGridResults(grid,gridResult){
    let tableElement = document.createElement('table');
    let colGroupElement = document.createElement('colgroup');
    tableElement.append(colGroupElement);
    let colElement = document.createElement('col')
    colElement.className = 'resultCol';
    colGroupElement.append(colElement);

    for (let i = 0; i < grid.length; i++ ){

        colGroupElement.prepend(document.createElement('col'));
        let tableRowElement = document.createElement('tr');

        for (let j = 0; j < grid[i].length; j++){

            let tableDataGrid = document.createElement('td');
            tableDataGrid.append(grid[i][j]);
            tableRowElement.append(tableDataGrid);

        }

        let tableDataResult = document.createElement('td');
        tableDataResult.append(gridResult[i]);
        tableRowElement.append(tableDataResult);
        
        tableElement.append(tableRowElement);
    }
    document.querySelector('body').append(tableElement);
}