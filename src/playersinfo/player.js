import '../index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Link,
  Route,
} from 'react-router-dom';
import Cookies from 'universal-cookie';

import Game from '../gamescreen/game.js';

class PlayerDetails extends React.Component {
    constructor(props) {
        super(props);
        let cookie = new Cookies();
        this.state = {
            player1: cookie.get(`player1`)?cookie.get(`player1`):`Player Alpha`,
            player2: cookie.get(`player2`)?cookie.get(`player2`):`Player Gamma`,
            startPlayer: cookie.get(`startPlayer`)?cookie.get(`startPlayer`):`player1`,
            wins1: cookie.get(`wins1`)?cookie.get(`wins1`):0,
            loss1: cookie.get(`loss1`)?cookie.get(`loss1`):0,
            wins2: cookie.get(`wins2`)?cookie.get(`wins2`):0,
            loss2: cookie.get(`loss2`)?cookie.get(`loss2`):0,

        };
        console.log(`PlayerDetails/player.js`,this.state);
        /* legacy method of solving unknown `this`
        this.onInputPlayer1 = this.onInputPlayer1.bind(this); */
    }
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
                            <select value={this.state.startPlayer} onChange={this.onDropdownChange} name="startingPlayer0133" id="startingPlayer0133">
                                <option value="player1" id="player10133" defaultValue>Player 1</option>
                                <option value="player2" id="player20133">Player 2</option>
                            </select>
                        </li>
                        <li>
                            <button onClick={this.clearInputField}>Clear current entries</button>
                            <Link to="/game"><button onClick={this.startGame}>Start game</button></Link>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
    clearInputField = (event) => {
        this.setState( { player1: '', player2: '' } );
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
    onDropdownChange = (event) => {
        // console.log(event.target, event.target.value);
        this.setState( { startPlayer : event.target.value });
        setTimeout(() => {
            console.log(`values in state obj in TO: `, this.state);
        }, 50);
        // console.log(`onDropdownChange/player.js`, this.state);
    }
    setCookies = () => {
        const playerData = new Cookies();
        playerData.set('player1', this.state.player1, { path: '/' });
        playerData.set('player2', this.state.player2, { path: '/' });
        playerData.set('startPlayer', this.state.startPlayer, { path: '/' });
        playerData.set('wins1', this.state.wins1, { path: '/' });
        playerData.set('loss1', this.state.loss1, { path: '/' });
        playerData.set('wins2', this.state.wins2, { path: '/' });
        playerData.set('loss2', this.state.loss2, { path: '/' });
        // console.log(cookies.get('myCat'));
        console.log(`setCookies/player.js`,playerData);
    }
    startGame = () => {
        console.log(this.state);
        // https://stackoverflow.com/a/43684059
        if( this.state.player1 === null || this.state.player1 === '' ){
            this.setState( { player1: 'player Alpha' } );
        }
        if( this.state.player2 === null || this.state.player2 === '' ){
            this.setState( { player2: 'player Zeta' } );
        }
        this.setCookies();
        // let path = `/PageTwo`;
        // let history = useHistory();
        // history.push(path);
    }
    onEnterKey =  (event) => {
        
        event.preventDefault();
        console.log(`prevented enter key from refreshing the page.`)
        /* let statePlayerProp = ``;
        if(event.target.id === `user10133`){
            statePlayerProp = `player1`;
        }
        else{
            statePlayerProp = `player2`;
        }
        this.setState( { [statePlayerProp] : event.target.value } ); */
        // console.log(`values in state obj: `, this.state);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Route path='/' exact component={this.PageOne}/> */}
                    <Route path='/game' component={Game}/> 
                    <Route path='/' exact component={this.PageOne}/>
                </div>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(
    <PlayerDetails/>,
    document.querySelector('#root')
);
export default PlayerDetails;