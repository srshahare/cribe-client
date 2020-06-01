import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import HomeNav from '../../components/navigations/homenav/HomeNav'
import TopSection from '../../components/myaccount/top/TopSection';
import BottomSection from '../../components/myaccount/bottom/BottomSection';
import EditAccount from '../../components/myaccount/edit/EditAccount';

class MyAccount extends Component{
    render() {
        return(
            <div>
                <HomeNav />
                <Route exact path="/account"><TopSection/></Route>
                <Route path="/account/edit"><EditAccount /></Route>
                <br></br>
                <BottomSection />
            </div>
        )
    }
}

export default MyAccount