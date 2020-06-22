import React, {Component} from 'react';
import './Statistic.css'

import HomeNav from '../../components/navigations/homenav/HomeNav'
import First from '../../components/stats/first/First';
import Graph from '../../components/stats/graph/Graph';
import Bottom from '../../components/stats/bottom/Bottom';

class Statistic extends Component{
    render() {
        return(
            <div className="Statistic">
                <First />
                <Graph />
                <Bottom />
            </div>
        )
    }
}

export default Statistic;