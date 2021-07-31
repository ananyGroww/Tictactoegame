import React from 'react';

import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';

import Game from './gamescreen/game';
import GameOver from './gamescreen/gameover';
import history from './history';
import EnterPlayerDetails from './playersinfo/player';

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/' exact component={EnterPlayerDetails}/>
                    <Route path='/game' exact component={Game}/>
                    <Route path='/gameover' exact component={GameOver}/>
                </Switch>
            </Router>
        );
    }
}
export default Routes;