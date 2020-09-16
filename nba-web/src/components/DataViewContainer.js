import React, {Component} from 'react';
import {Radio, Row, Col} from 'antd';
import CounterSlider from "./CounterSlider";
import ShotChart from "./ShotChart";
import _ from 'lodash';

class DataViewContainer extends Component {
    state = {
        minCount: 2,
        chartType: 'hexbin'
    }
    onChartTypeChange = (e) => {
        console.log(e.target.value);
        this.setState({
            chartType: e.target.value
        })
    }
    onCountSliderChange = (count) => {
        console.log('count in parent -> ', count);
        this.setState({ minCount: count });
    }

    render() {
        return (
            <div className="data-view">
                DataViewContainer
                <ShotChart
                    playerId={this.props.playerId}
                    minCount={this.state.minCount}
                    chartType={this.state.chartType}
                />
                <div className="filter">
                    <CounterSlider
                        onCountSliderChange={
                            _.debounce(this.onCountSliderChange, 500)
                        }
                    />
                    <br/>
                    <Row>
                        <Col span={9}>
                            <Radio.Group onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={4}>Tooltip</Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default DataViewContainer;