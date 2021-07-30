// KNOWN BUGS
// 1.  empty a input box on the webpage. press enter. see console. 
// 2.  the data in state obj is one keystroke behind whats shown 
//      on website. (Obs: printing in console again after 50 milliseconds, prints correct value)

import './index.css';

// Import the react and React ReactDOM lib
import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Game from './gamescreen/game';

// necessary to hot reload to work
// if(module.hot){
//     module.hot.accept();
// }
// Create a react component
// const App = () => {
//     return <div> Hi there!</div>
// };
class GetPlayerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: `playerA`,
            player2: `playerB`,
            startPlayer: `player1`,
        };
        // legacy method of solving unknown `this`
        // this.onInputPlayer1 = this.onInputPlayer1.bind(this);
    }
    onPlayerNameChange  = (event) => {
        // console.log(event.target);
        let statePlayerProp = ``;
        if(event.target.id === `user10133`){
            statePlayerProp = `player1`;
        }
        else{
            statePlayerProp = `player2`;
        }
        this.setState( { [statePlayerProp] : event.target.value } );
        // console.log(`values in state obj: `, this.state);
    }
    onWhoWillStart = (event) => {
        console.log(event.target, event.target.value);
        this.setState( { startPlayer : event.target.value });
        setTimeout(() => {
            console.log(`values in state obj in TO: `, this.state);
        }, 50);
        console.log(`values in state obj: `, this.state);
    }
    startGame = () => {
        // https://stackoverflow.com/a/43684059
        const playerData = new Cookies();
        playerData.set('player1', this.state.player1, { path: '/' });
        playerData.set('player2', this.state.player2, { path: '/' });
        playerData.set('startPlayer', this.state.startPlayer, { path: '/' });
        // console.log(cookies.get('myCat'));
        console.log(playerData);
        // let path = `/PageTwo`;
        // let history = useHistory();
        // history.push(path);
    }
    onEnterKey =  (event) => {
        
        event.preventDefault();
        console.log(`prevented enter key from refreshing the page.`)
        // let statePlayerProp = ``;
        // if(event.target.id === `user10133`){
        //     statePlayerProp = `player1`;
        // }
        // else{
        //     statePlayerProp = `player2`;
        // }
        // this.setState( { [statePlayerProp] : event.target.value } );
        console.log(`values in state obj: `, this.state);
    }
    // https://www.cluemediator.com/navigate-from-one-page-to-another-page-in-reactjs
    PageOne = () => {
        return (
            <div>
                <h1>Please type names of both players</h1>
                <form onSubmit={this.onEnterKey} className="nameForm0133root">
                    <ul>
                        <li className="user1Name0133nameForm">
                            <label htmlFor="user10133">Player 1</label>
                            <input type="text" value={this.state.player1} onChange={this.onPlayerNameChange} id="user10133" placeholder="Type the name of first player"/>
                        </li>
                        <li>
                            <label htmlFor="user20133">Player 2</label>
                            <input type="text" value={this.state.player2} onChange={this.onPlayerNameChange} id="user20133" placeholder="Type the name of second player"/>
                        </li>
                        <li>
                            <label htmlFor="startingPlayer0133">Who will start? (with X)</label>
                            <select value={this.state.startPlayer} onChange={this.onWhoWillStart} name="startingPlayer0133" id="startingPlayer0133">
                                <option value="player1" id="player10133" defaultValue>Player 1</option>
                                <option value="player2" id="player20133">Player 2</option>
                            </select>
                        </li>
                        <li>
                            <button type="reset">Clear current entries</button>
                            <Link to="/game"><button onClick={this.startGame}>Start game</button></Link>
                        </li>
                    </ul>
                </form>
            </div>
        );
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
    // compulsary requirement
    render() {
        // console.log(`render func ran. ${this.state.player1} ${this.state.player2} ${this.state.startPlayer}`);
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={this.PageOne}/>
                    {/* <Route path='/game' component={this.PageTwo}/>  */}
                    <Route path='/game' exact component={Game}/>
                </div>
            </BrowserRouter>
        );
    }
}
// Take the react component & show it on the screen
ReactDOM.render(
    <GetPlayerInfo/>,
    document.querySelector('#root')
);