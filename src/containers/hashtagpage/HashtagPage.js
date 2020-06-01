import React, {Component} from 'react';
import HomeNav from '../../components/navigations/homenav/HomeNav';
import TopSection from '../../components/hashtagpage/top/TopSection';
import BottomSection from '../../components/hashtagpage/bottom/BottomSection';

class HashtagPage extends Component {
    render(){
        return(
            <div>
                <HomeNav />
                <TopSection />
                <br></br>
                <BottomSection />
            </div>
        )
    }
}

export default HashtagPage;