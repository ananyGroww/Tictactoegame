// KNOWN BUGS & ISSUES
// 1.  empty a input box on the webpage. press enter. see console. 
// 2.  the data in state obj is one keystroke behind whats shown 
//      on website. (Obs: printing in console again after 50 milliseconds, prints correct value)
// 4.  On pressing `clear entries` button, the state clears but the input box still contains values.
// 3.  Line37 player.js (<select> line) not working (made as shown as in https://reactjs.org/docs/forms.html#:~:text=implement%20a%20controlled%20component)
//      so that component is controlled
//      <OR>
//      For <input> fields to maintain the src of truth be VirtualDOM we add `value={this.state.player2}`, so what do we do for dropdown menus (<select>) such
//      </select> that their src of truth also remains to be VirtualDOM? (Eg: Line33 vs Line38 in player.js) (Is what shown here: https://stackoverflow.com/a/29109365 is what I have done?)

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);