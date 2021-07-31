import '../game.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Redirect,
  Route,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import GameOver from './gameover.js';

class TicTacToeGame extends React.Component {
    constructor(props) {
        super(props);
        let cookie = new Cookies();
        this.state = {
            player1: cookie.get(`player1`),
            player2: cookie.get(`player2`),
            startPlayer: cookie.get(`startPlayer`),
            wins1: cookie.get('wins1'),
            loss1: cookie.get(`loss1`),
            wins2: cookie.get(`wins2`),
            loss2: cookie.get(`loss2`),
            board: [ [-1,-1,-1], [-1,-1,-1], [-1,-1,-1] ],
            val: 1,
            noOfPlays: 0,
            winner: `none`,
            id: ``,
        };
        // legacy method of solving unknown `this`
        // this.onInputPlayer1 = this.onInputPlayer1.bind(this);
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
    updateBoard = (arr) => {
        let boardCopy = this.state.board;
        boardCopy[ arr[0] ][ arr[1] ] = this.state.val; 
        this.setState( { board : boardCopy })
    }
    onTilePress = (event) => {
        this.setState({ noOfPlays: (this.state.noOfPlays+1), id: `${event.target.id}` });
        console.log(`onTilePress/game.js`, event);
        let arr = this.idToIndex(event.target.id);
        this.updateBoard(arr);
        if(this.state.val === 1) this.setState({val: 0});
        else this.setState({val: 1});
        console.log(`onTilePress/game.js`, this.state.board[arr[0]][arr[1]], ` `, this.state);

        this.logicOfGame();
    }
    rowFound = () => {
        let gameBoard = this.state.board;
        for( let i = 0; i < 3 ; i++ ){
            if( (gameBoard[i][0] === gameBoard[i][1]) && (gameBoard[i][1] === gameBoard[i][2]) && (gameBoard[i][2] === gameBoard[i][0]) && (gameBoard[i][2] === 0 || gameBoard[i][2] === 1) ) return 1;
        }
        return 0;
    }
    colFound = () => {
        let gameBoard = this.state.board;
        for( let i = 0; i < 3 ; i++ ){
            if( (gameBoard[0][i] === gameBoard[1][i]) && (gameBoard[1][i] === gameBoard[2][i]) && (gameBoard[2][i] === gameBoard[0][i]) && (gameBoard[i][2] === 0 || gameBoard[i][2] === 1) ) return 1;
        }
        return 0;
    }
    diagFound = () => {
        let gameBoard = this.state.board;
        if( (gameBoard[0][0] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][2]) && (gameBoard[2][2] === gameBoard[0][0]) && (gameBoard[2][2] === 0 || gameBoard[2][2] === 1) ) return 1;
        if( (gameBoard[0][2] === gameBoard[1][1]) && (gameBoard[1][1] === gameBoard[2][0]) && (gameBoard[2][0] === gameBoard[0][2]) && (gameBoard[0][2] === 0 || gameBoard[0][2] === 1) ) return 1;
        return 0;
    }
    logicOfGame = () => {
         if( this.rowFound()===1 || this.colFound===1 || this.diagFound()===1 ){
            console.log(`logicofgame/game.js`, this.rowFound(), this.colFound(), this.diagFound());
            this.gameOver();
         }
    }
    gameOver = () => {
        let won;
        if( this.state.val === 2) won = `${this.state.player1}`;
        else won = `${this.state.player2}`;
        this.setState( {winner : won});
        setTimeout(() => {
            // console.log(`gameOver/game.js`, `${this.state.winner} won`); 
            alert(`${this.state.winner} won`);
        }, 100);
        
        <Route path='/gameover' exact component={GameOver}>
            <Redirect to='/gameover'/>;
        </Route>;
    }
    PageTwo = () => {
        return (
            <div>
                <div className="leftPane0133root">
                    <div id="player1Name0133leftPane"><h2>{this.state.player1}</h2></div>
                    <div id="player1CounterPanel0133">Counter</div>
                    <div>Wins <div id="player1Wins0133">{this.state.wins1}</div></div>
                    <div>Losses <div id="player1Losses0133">{this.state.loss1}</div></div>
                </div>
                <div className="centralPlayArea0133troot">
                    <h1>Tic-Tac-Toe</h1>
                    <div className="ninePanel0133centralPlayArea">
                        <div className="row00133ninePanel">
                            <div onClick={this.onTilePress} className="cell" id="zerozero0133">X</div>
                            <div onClick={this.onTilePress} className="cell" id="onezero0133">0</div>
                            <div onClick={this.onTilePress} className="cell" id="twozero0133">X</div>
                        </div>
                        <div className="row10133ninePanel">
                            <div onClick={this.onTilePress} className="cell" id="zeroone0133">XX</div>
                            <div onClick={this.onTilePress} className="cell" id="oneone0133">0X</div>
                            <div onClick={this.onTilePress} className="cell" id="twoone0133">XX</div>
                        </div>
                        <div className="row20133ninePanel0133">
                            <div onClick={this.onTilePress} className="cell" id="zerotwo0133">X0</div>
                            <div onClick={this.onTilePress} className="cell" id="onetwo0133">00</div>
                            <div onClick={this.onTilePress} className="cell" id="twotwo0133">X0</div>
                        </div>
                    </div>
                </div>
                <div className="rightPane0133root">
                    <div id="player2Name0133rightPane"><h2>{this.state.player2}</h2></div>
                    <div id="player2CounterPanel0133">Counter</div>
                    <div>Wins <div id="player2Wins0133">{this.state.wins2}</div></div>
                    <div>Losses <div id="player2Losses0133">{this.state.loss2}</div></div>
                </div>
            </div>
        );
    }
    componentDidUpdate (event){
        console.log(`componentDidUpdate/game.js`)
        return <div ref={`${this.state.id}`}>${this.state.val}</div>
    }
    render() {
        // console.log(`render func ran. ${this.state.player1} ${this.state.player2} ${this.state.startPlayer}`);
        return (
            <BrowserRouter>
                <div>
                    {/* <Route path='/' exact component={this.PageOne}/> */}
                    {/* <Route path='/game' component={this.PageTwo}/>  */}
                    <Route path='/game' exact component={this.PageTwo}/>
                    {/* <Route path='/gameover' exact component={GameOver}/> */}
                </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(
    <TicTacToeGame/>,
    document.querySelector('#root')
);
export default TicTacToeGame;