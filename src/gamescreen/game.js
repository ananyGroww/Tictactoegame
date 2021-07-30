import '../game.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

class TicTacToeGame extends React.Component {

    constructor(props) {
        super(props);
        let cookie = new Cookies();
        this.state = {
            player1: cookie.get(`player1`),
            player2: cookie.get(`player2`),
            startPlayer: cookie.get(`startPlayer`)
        };
        // legacy method of solving unknown `this`
        // this.onInputPlayer1 = this.onInputPlayer1.bind(this);
    }

    PageTwo = () => {
        return (
            <div>
                <div className="leftPane0133root">
                    <div id="player1Name0133leftPane"><h2>{this.state.player1}</h2></div>
                    <div id="player1CounterPanel0133">Counter</div>
                    <div>Wins <div id="player1Wins0133">3</div></div>
                    <div>Losses <div id="player1Losses0133">0</div></div>
                </div>
                <div className="centralPlayArea0133troot">
                    <h1>Tic-Tac-Toe</h1>
                    <div className="ninePanel0133centralPlayArea">
                        <div className="row00133ninePanel">
                            <div className="cell">X</div>
                            <div className="cell">0</div>
                            <div className="cell">X</div>
                        </div>
                        <div className="row10133ninePanel">
                            <div className="cell">XX</div>
                            <div className="cell">0X</div>
                            <div className="cell">XX</div>
                        </div>
                        <div className="row20133ninePanel0133">
                            <div className="cell">X0</div>
                            <div className="cell">00</div>
                            <div className="cell">X0</div>
                        </div>
                    </div>
                </div>
                <div className="rightPane0133root">
                    <div id="player2Name0133rightPane"><h2>{this.state.player2}</h2></div>
                    <div id="player2CounterPanel0133">Counter</div>
                    <div>Wins <div id="player2Wins0133">1</div></div>
                    <div>Losses <div id="player2Losses0133">2</div></div>
                </div>
            </div>
        );
    }
    render() {
        // console.log(`render func ran. ${this.state.player1} ${this.state.player2} ${this.state.startPlayer}`);
        return (
            <BrowserRouter>
                <div>
                    {/* <Route path='/' exact component={this.PageOne}/> */}
                    {/* <Route path='/game' component={this.PageTwo}/>  */}
                    <Route path='/game' exact component={this.PageTwo}/>
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