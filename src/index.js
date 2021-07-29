// Import the react and React ReactDOM lib
import React from 'react';

if(module.hot){
    module.hot.accept();
}
// Create a react component
const App = () => {
    return <div> Hi there!</div>
};
// Take the react component & show it on the screen
// ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
// );