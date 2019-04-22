    const board = []
    // [0,1,2] 
    // [3,4,5]
    // [6,7,8]
    //board = [0,1,2,3,4,5,6,7,8]
    function play(clickedId) {
        const playerSpan = document.getElementById('player')
        const clickElement = document.getElementById(clickedId)
    
    
    if (board[0]!== undefined && board[0] ===board[1] && board[0] ===board[0]) {

    }else if (board[3] !== undefined && board[3] === board[4] && board[4] === board[5]){

    }else if (board[6]!== undefined &&board[6] ===board[7] && board[6] === board[8]) {

    }


    let boardFull = 'true'

    for (let i = 0; i < 9; i++) {
        if (board[i] === undefined){
            boardFull = false

        } 
           
        if (boardFull === true){
            window.alert('Cats Game')
        }
    }
    
    
        if (playerSpan.innerText === 'X'){
            playerSpan.innerText = 'O' 
            clickElement.innerText = 'X'
            board[clickedId] = 'X'
            

        }else {
            playerSpan.innerText = 'X'
            clickElement.innerText = 'O'
            board[clickedId] = 'O'
        }
        console.log(clickedId)
    
}
