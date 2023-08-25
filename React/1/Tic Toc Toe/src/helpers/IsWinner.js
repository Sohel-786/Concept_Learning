function isWinner(board, symbole){

    if( board[0] === board[1] && board[1] === board[2] && board[2] === symbole) return symbole;
    if( board[3] === board[4] && board[4] === board[5] && board[5] === symbole) return symbole;
    if( board[6] === board[7] && board[7] === board[8] && board[8] === symbole) return symbole;
    
    if( board[0] === board[3] && board[3] === board[6] && board[6] === symbole) return symbole;
    if( board[1] === board[4] && board[4] === board[7] && board[7] === symbole) return symbole;
    if( board[2] === board[5] && board[5] === board[8] && board[8] === symbole) return symbole;
    
    if( board[0] === board[4] && board[4] === board[8] && board[8] === symbole) return symbole;
    if( board[6] === board[4] && board[4] === board[2] && board[2] === symbole) return symbole;
    
    return "";
}

export default isWinner;