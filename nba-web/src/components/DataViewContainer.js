import React, {Component} from 'react';
import CounterSlider from "./CounterSlider";
import ShotChart from "./ShotChart";
import _ from 'lodash';

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
                <CounterSlider
                    onCountSliderChange={_.debounce(this.onCountSliderChange, 1000)}/>
            </div>
        );
    }
}

export default DataViewContainer;