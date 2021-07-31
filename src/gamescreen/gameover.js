import React from 'react';

class GameFinished extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winner : props.location.state.winner,
        }
    }
    render() {
        console.log(`GameFinished/gameover.js`);
        return(
            <div className="winner0133root">
                The winner is {this.state.winner}
            </div>
        );
    }
}
// ReactDOM.render(
//     <GameFinished/>,
//     document.querySelector('#root')
// );
export default GameFinished;