import React, {Component} from 'react';
import Profile from "./Profile";
import nba from '../nba-client';
import ShotChart from "./ShotChart";

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
                console.log('nba info from backend->', info);
                console.log('commonPlayerInfo ->', info.commonPlayerInfo);
                const playerInfo = Object.assign(info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log('playerInfo ->', playerInfo);
                this.setState({
                    playerInfo: playerInfo
                })
            })
    }

    render() {
        return (
            <div className="main">
                <Profile playerInfo = {this.state.playerInfo}/>
                <ShotChart playId = {this.state.playerId}></ShotChart>
            </div>
        );
    }
}

export default Main;