import React, {Component} from 'react';
import nba from '../nba-client';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';

window.d3_hexbin = {hexbin : hexbin};

class ShotChart extends Component {
    componentDidMount() {
        nba.stats.shots({ PlayerID: this.props.playId })
            .then(response => {
                console.log('shot response ->', response);
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