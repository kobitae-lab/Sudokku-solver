'use strict';

let board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
];


// i = row
// j = col

function backtrack(i, j){
    if(i === 9){ // end if went through whole board
        return true;
    }

    if(j === 9){ // if at the end of the row go to the next column (next pixel in the 9x9 grid)
        return backtrack(i+1, 0);
    }

    if(board[i][j] !== 0){ // skip pixel if already filled in
        return backtrack(i, j+1);
    }

    for (let k = 1; k <= 9; k++){ // for loop to try all numbers 1-9
        if(checkLegal(k, i, j) == true){ // check if a number is valid
            board[i][j] = k; // place the number
            if(backtrack(i, j+1)){ // if there is a valid solution for the next pixel, return true
                return backtrack(i, j+1); //or return true;
            }
            board[i][j] = 0; // otherwise reset the board at the pixel
        }
    }
    //return false; 
}

function solveBoard(){
    backtrack(0, 0);
    return board;
}


function checkLegal(num, row, col){
    for (let i = 0; i <= 8; i++){
        if(board[row][i] === num || board[i][col] === num){ // only checking i at 0
            return false;
        }
    }
    return isGridFree(num, row, col);
}



function whatGrid(row, col){ // find what grid a pixel is in
    if(row <= 2 && row >= 0){
        if(col <= 2 && col >= 0){
            return 1;
        }
        if(col <= 5 && col >= 3){
            return 2;
        }
        if(col <= 8 && col >=  6){
            return 3;
        }
    }
    else if(row <= 5 && row >= 3){
        if(col <= 2 && col >= 0){
            return 4;
        }
        if(col <= 5 && col >= 3){
            return 5;
        }
        if(col <= 8 && col >=  6){
            return 6;
        }
    }
    else if(row <= 8 && row >= 6){
        if(col <= 2 && col >= 0){
            return 7;
        }
        if(col <= 5 && col >= 3){
            return 8;
        }
        if(col <= 8 && col >=  6){
            return 9;
        }
    }
}

// check if the number is in the same grid
function isGridFree(num, row, col){
    if(whatGrid(row, col) == 1){ // if in first grid
        for (let i = 0; i <= 2; i++){
            for (let j = 0; j <= 2; j++){
                if(board[i][j] == num){
                    return false;
                }
            }
        }
        return true;
    }

    else if(whatGrid(row, col) == 2){ // if in second grid
            for (let i = 0; i <= 2; i++){
                for (let j = 3; j <= 5; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 3){ // if in third grid
            for (let i = 0; i <= 2; i++){
                for (let j = 6; j <= 8; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 4){ // if in fourth grid
            for (let i = 3; i <= 5; i++){
                for (let j = 0; j <= 2; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 5){ // if in fifth grid
            for (let i = 3; i <= 5; i++){
                for (let j = 3; j <= 5; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 6){ // if in sixth grid
            for (let i = 3; i <= 5; i++){
                for (let j = 6; j <= 8; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 7){ // if in seventh grid
            for (let i = 6; i <= 8; i++){
                for (let j = 0; j <= 2; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 8){ // if in eighth grid
            for (let i = 6; i <= 8; i++){
                for (let j = 3; j <= 5; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    else if(whatGrid(row, col) == 9){ // if in nineth grid
            for (let i = 6; i <= 8; i++){
                for (let j = 6; j <= 8; j++){
                    if(board[i][j] == num){
                        return false;
                    }
                }
            }
            return true;
        }

    }

    function resetBoard(){
        for (let i = 0; i <= 8; i++){
            for (let j = 0; j <= 8; j++){
                board[i][j] = 0;
            }
        }
        return board;
    }


    console.log(solveBoard());
    resetBoard();
    
    
    