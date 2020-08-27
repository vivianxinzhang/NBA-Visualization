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
            </div>
        );
    }
}

export default Profile;