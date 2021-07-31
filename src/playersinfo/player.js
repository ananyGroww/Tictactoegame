import '../index.css';

import React from 'react';

import history from '../history';

class PlayerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: null,
            player2: null,
            startPlayer: `player1`,
        };
        console.log(`PlayerDetails/player.js`,this.state);
        /* legacy method of solving unknown `this`
        this.onInputPlayer1 = this.onInputPlayer1.bind(this); */
    }
    /* modern method of solving unknown `this`
    PageOne(){} is now: */
    PageOne = (props) => {
        return (
            <div className="initPageOne0133">
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
                            {/* <Link to="/game"><button onClick={this.startGame}>Start game</button></Link> */}
                            <button onClick={this.startGame}>Start game</button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
    clearInputField = (event) => {
        console.log(`clearinputfield/player.js BEFORE `, this.state);
        this.setState( { player1: null, player2: null, startPlayer: `player1` } );
        setTimeout(() => {
            console.log(`clearinputfield/player.js AFTER `, this.state);
        }, 10);
        
    }
    onPlayerNameChange  = (event) => {
        let statePlayerProp = ``;
        if(event.target.id === `user10133`){
            statePlayerProp = `player1`;
        }
        else{
            statePlayerProp = `player2`;
        }
        this.setState( { [statePlayerProp]: event.target.value } );
        // setTimeout(() => {
        //     console.log(`onPlayerNameChange/player.js`, this.state);  
        // }, 10);
        // console.log(`onPlayerNameChange/player.js`, this.state);
    }
    onDropdownChange = (event) => {
        this.setState( { startPlayer : event.target.value });
        // setTimeout(() => {
        //     console.log(`onDropdownChange/player.js`, this.state);
        // }, 50);
        // console.log(`onDropdownChange/player.js`, this.state);
    }
    startGame = () => {
        console.log(`startGame/player.js`, this.state);
        // https://stackoverflow.com/a/45263164
        history.push({
            pathname:'/game',
            state: this.state,
        });
    }
    onEnterKey =  (event) => {
        event.preventDefault();
    }
    render(props) {
        return(
            <this.PageOne alpha={`sigma`}/>
        );
    }
}
// ReactDOM.render(
//     <PlayerDetails/>,
//     document.querySelector('#root')
// );
export default PlayerDetails;