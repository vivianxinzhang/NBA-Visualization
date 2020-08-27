import React, {Component} from 'react';
import Profile from "./Profile";
import nba from '../nba-client';

class Main extends Component {
    // state = {
    //     playerInfo: {},
    //     playerId: 201939
    // }

    constructor() {
        super();
        this.state = {
            playerInfo: {},
            playerId: 201939
        }
    }

    componentDidMount() {
        window.nba = nba;  // 把 nba 变为全局变量
        const curry = nba.findPlayer('Stephen Curry');
        console.log('data from Curry', curry);
        nba.stats.playerInfo({ PlayerID: nba.findPlayer('Stephen Curry').playerId})
            .then(info => {
                console.log(info);
            })
    }

    render() {
        return (
            <div className="main">
                Main
                <Profile />
            </div>
        );
    }
}

export default Main;