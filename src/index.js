// KNOWN BUGS
// 1.  empty a input box on the webpage. press enter. see console. 
// 2.  the data in state obj is one keystroke behind whats shown 
//      on website. (Obs: printing in console again after 50 milliseconds, prints correct value)

// Import the react and React ReactDOM lib
import React from 'react';
import ReactDOM from 'react-dom';

import Cookies from 'universal-cookie';

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
        const playerData = new Cookies();
        playerData.set('player1', this.state.player1, { path: '/' });
        playerData.set('player2', this.state.player2, { path: '/' });
        playerData.set('startPlayer', this.state.startPlayer, { path: '/' });
        // console.log(cookies.get('myCat'));
        console.log(playerData);
    }
    onEnterKey =  (event) => {
        
        event.preventDefault();
        console.log(`prevented enter key from refreshing the page.`)
        let statePlayerProp = ``;
        if(event.target.id === `user10133`){
            statePlayerProp = `player1`;
        }
        else{
            statePlayerProp = `player2`;
        }
        this.setState( { [statePlayerProp] : event.target.value } );
        console.log(`values in state obj: `, this.state);
    }
    // compulsary requirement
    render() {
        // console.log(`render func ran. ${this.state.player1} ${this.state.player2} ${this.state.startPlayer}`);
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
                            <button onClick={this.startGame}>Start game</button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}
// Take the react component & show it on the screen
ReactDOM.render(
    <GetPlayerInfo/>,
    document.querySelector('#root')
);