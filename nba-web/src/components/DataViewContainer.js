import React, {Component} from 'react';
import CounterSlider from "./CounterSlider";
import ShotChart from "./ShotChart";

class DataViewContainer extends Component {
    state = {
        minCount: 2
    }

    onCountSliderChange = (count) => {
        console.log('count in parent -> ', count);
        this.setState({ minCount: count });
    }

    render() {
        return (
            <div className="data-view">
                DataViewContainer
                <ShotChart playerId={this.props.playerId} />
                <CounterSlider onCountSliderChange={this.onCountSliderChange}/>
            </div>
        );
    }
}

export default DataViewContainer;