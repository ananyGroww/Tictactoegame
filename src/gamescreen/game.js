// 1.  ERR01 TicTacToeGame/onTilePress

import '../game.css';

import React from 'react';

import history from '../history';

class TicTacToeGame extends React.Component {
    constructor(props) {
        super(props);
        console.log(`constructor/game.js`, props.location.state);
        this.state = {
            player1: props.location.state.player1,//`predefined1`,
            player2: props.location.state.player2,//`predefined2`,
            startPlayer: props.location.state.startPlayer,//`player1`,
            wins1: 0,
            loss1: 0,
            wins2: 0,
            loss2: 0,
            board: [ [``,``,``], [``,``,``], [``,``,``] ],
            winner: `none`,
            currentPlaySymbol: `X`,
        };
    }
    idToIndex = (str) => {
        if(str===`zerozero0133`) return [0,0];
        if(str===`onezero0133`) return [1,0];
        if(str===`twozero0133`) return [2,0];
        if(str===`zeroone0133`) return [0,1];
        if(str===`oneone0133`) return [1,1];
        if(str===`twoone0133`) return [2,1];
        if(str===`zerotwo0133`) return [0,2];
        if(str===`onetwo0133`) return [1,2];
        if(str===`twotwo0133`) return [2,2];
    }
    updateBoard = (row, col) => {
        let boardCopy = this.state.board;
        boardCopy[ row ][ col ] = this.state.currentPlaySymbol; 
        this.setState( { board : boardCopy })
    }
    updateCurrentSymbol = () => {
        if( this.state.currentPlaySymbol === `X` ){
            this.setState( { currentPlaySymbol: `O` } );
        }
        else{
            this.setState( { currentPlaySymbol: 'X' } );
        }
    }
    onTilePress = (event) => {
        let [row, col] = this.idToIndex(event.target.id);
        let boardalias = this.state.board;
        if( boardalias[row][col] !== `` ){
            alert('This box is already marked! ERR01');
            return;
        }
        this.updateBoard( row, col );
        this.logicOfGame();
        this.updateCurrentSymbol();        
    }
    rowFound = () => {
        let gameBoard = this.state.board;
        for( let i = 0; i < 3 ; i++ ){
            if( (gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][1] === gameBoard[i][2]) && (gameBoard[i][2] === gameBoard[i][0]) && (gameBoard[i][2] === `O` || gameBoard[i][2] === `X` ) ) return 1;
        }
        return 0;
    }
    colFound = () => {
        let gameBoard = this.state.board;
        for( let i = 0; i < 3 ; i++ ){
            if( (gameBoard[0][i] === gameBoard[1][i]) && (gameBoard[1][i] === gameBoard[2][i]) && (gameBoard[2][i] === gameBoard[0][i]) && (gameBoard[2][i] === `O` || gameBoard[2][i] === `X` ) ) return 1;
        }
        return 0;
    }
    diagFound = () => {
        let gameBoard = this.state.board;
        if( (gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2]) && (gameBoard[2][2] === gameBoard[0][0]) && (gameBoard[2][2] === `O` || gameBoard[2][2] === `X` ) ) return 1;
        if( (gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][0]) && (gameBoard[2][0] === gameBoard[0][2]) && (gameBoard[0][2] === `O` || gameBoard[0][2] === `X` ) ) return 1;
        return 0;
    }
    logicOfGame = () => {
         if( this.rowFound()===1 || this.colFound()===1 || this.diagFound()===1 ){
            // console.log(`logicofgame/game.js`, this.rowFound(), this.colFound(), this.diagFound());
            this.gameOver();
         }
    }
    gameOver = () => {
        if( this.state.currentPlaySymbol === `X`){
            let whoWon = this.state.startPlayer;
            if(whoWon===`player1`){
                this.setState( {wins1: (this.state.wins1+1), loss2: (this.state.loss2+1), winner: this.state.player1 } )
            }
            else{
                this.setState( {wins2: (this.state.wins2+1), loss1: (this.state.loss1+1), winner: this.state.player2 } )
            }
        }
        else{
            let whoWon;
            if(this.state.startPlayer===`player1`)  whoWon=`player2`; else whoWon=`player1`;
            if(whoWon===`player1`){
                this.setState( {wins1: (this.state.wins1+1), loss2: (this.state.loss2+1), winner: this.state.player1 } )
            }
            else{
                this.setState( {wins2: (this.state.wins2+1), loss1: (this.state.loss1+1), winner: this.state.player2 } )
            }
        }
        setTimeout(() => {
            alert(`The winner is `+this.state.winner+`!`);
            this.finishGame();
        }, 400);
        // alert(`The winner is `+this.state.winner+`!`);
        // history.push({
        //     pathname: '/gameover',
        //     state: this.state,
        // });
    }
    // https://stackoverflow.com/a/45263164
    finishGame = () => {
        history.push({
            pathname: '/gameover',
            state: this.state,
        });
    }
    PageTwo = () => {
        let board = this.state.board;
        return (
            <div className="initPageTwo0133">
                <div className="leftPane0133initPageTwo">
                    <div id="player1Name0133leftPane"><h2>{this.state.player1}</h2></div>
                    <div id="player1CounterPanel0133">
                        <div>Wins <div id="player1Wins0133">{this.state.wins1}</div></div>
                        <div>Losses <div id="player1Losses0133">{this.state.loss1}</div></div>
                    </div>
                </div>
                <div className="centralPlayArea0133troot">
                    <h1>Tic-Tac-Toe</h1>
                    <div className="ninePanel0133centralPlayArea">
                        <div className="row00133ninePanel">
                            <div onClick={this.onTilePress} className="cell" id="zerozero0133">{board[0][0]}</div>
                            <div onClick={this.onTilePress} className="cell" id="onezero0133">{board[1][0]}</div>
                            <div onClick={this.onTilePress} className="cell" id="twozero0133">{board[2][0]}</div>
                        </div>
                        <div className="row10133ninePanel">
                            <div onClick={this.onTilePress} className="cell" id="zeroone0133">{board[0][1]}</div>
                            <div onClick={this.onTilePress} className="cell" id="oneone0133">{board[1][1]}</div>
                            <div onClick={this.onTilePress} className="cell" id="twoone0133">{board[2][1]}</div>
                        </div>
                        <div className="row20133ninePanel0133">
                            <div onClick={this.onTilePress} className="cell" id="zerotwo0133">{board[0][2]}</div>
                            <div onClick={this.onTilePress} className="cell" id="onetwo0133">{board[1][2]}</div>
                            <div onClick={this.onTilePress} className="cell" id="twotwo0133">{board[2][2]}</div>
                        </div>
                    </div>
                </div>
                <div className="rightPane0133root">
                    <div id="player2Name0133rightPane"><h2>{this.state.player2}</h2></div>
                    <div id="player2CounterPanel0133">
                        <div>Wins <div id="player2Wins0133">{this.state.wins2}</div></div>
                        <div>Losses <div id="player2Losses0133">{this.state.loss2}</div></div>
                    </div>
                </div>
            </div>
        );
    }
    render(props) {
        return (
            <this.PageTwo props/>
        );
    }
}
// ReactDOM.render(
//     <TicTacToeGame/>,
//     document.querySelector('#root')
// );
export default TicTacToeGame;