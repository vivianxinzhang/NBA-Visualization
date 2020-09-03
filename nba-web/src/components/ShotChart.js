import React, {Component} from 'react';
import nba from '../nba-client';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';

window.d3_hexbin = {hexbin : hexbin};

class ShotChart extends Component {
    static propTypes = {
        playerId: PropTypes.number,
        minCount: PropTypes.number,
        chartType: PropTypes.string,
        displayTooltip: PropTypes.bool,
    }

    componentDidMount() {
        nba.stats.shots({ PlayerID: this.props.playId })
            .then(response => {
                console.log('shot response from backend->', response);
                const final_shots = response.shot_Chart_Detail.map(shots => ({
                    x: (shots.locX + 250) / 10,
                    y: (shots.locY + 250) / 10,
                    action_type: shots.actionType,
                    shot_distance: shots.shotDistance,
                    shot_made_flag: shots.shotMadeFlag,
                }))
                console.log('processed final shot data ->', final_shots);

                const courtSelection = d3.select("#shot-chart");
                const chart_court = court().width(600);
                const chart_shots = shots().shotRenderThreshold(1).displayToolTips(true).displayType("hexbin");
                courtSelection.call(chart_court);
                courtSelection.datum(final_shots).call(chart_shots);
            })
    }

    render() {
        return (
            <div id="shot-chart">
                Shot Chart
            </div>
        );
    }
}

export default ShotChart;