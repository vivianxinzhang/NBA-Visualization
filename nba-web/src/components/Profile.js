import React, {Component} from 'react';
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from '../constants';

class Profile extends Component {
    render() {
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            playerId,
            pts,
            reb,
            ast,
            pie
        } = this.props.playerInfo;

        return (
            <div className="profile">
                <div className="profile-entry player-name">
                    { playerName }
                </div>
                <img className="profile-picture"
                     src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                     alt="Profile"/>
                <div >
                    <div >Team</div>
                    <div>{`${teamCity} ${teamName}`}</div>
                    { playerName }
                </div>
                <img className="team-logo"
                     src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                     alt="Team"/>
                <div >
                    <div >Height</div>
                    <div>{``}</div>
                </div>
                <div >
                    <div ></div>
                    <div>{`${height}`}</div>
                </div>
                <div >
                    <div >Weight</div>
                    <div>{`${weight}`}</div>
                </div>
                <div >
                    <div >PTS</div>
                    <div>{`${pts}`}</div>
                </div>
                <div >
                    <div >REB</div>
                    <div>{`${reb}`}</div>
                </div>
                <div >
                    <div >AST</div>
                    <div>{`${ast}`}</div>
                </div>
                <div >
                    <div >PIE</div>
                    <div>{`${pie}`}</div>
                </div>
            </div>
        );
    }
}

export default Profile;
