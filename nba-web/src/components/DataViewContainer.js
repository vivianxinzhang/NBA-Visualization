import React, {Component} from 'react';
import CounterSlider from "./CounterSlider";
import ShotChart from "./ShotChart";

class DataViewContainer extends Component {
    render() {
        return (
            <div className="data-view">
                DataViewContainer
                <ShotChart playerId={this.props.playerId} />
                <CounterSlider />
            </div>
        );
    }
}

export default DataViewContainer;