import React, {Component, Fragment} from 'react';
import FirstSection from '../../components/landing/FirstSection';
import SecondSection from '../../components/landing/SecondSection';
import LandingNav from '../../components/navigations/LandingNav';
import ThirdSection from '../../components/landing/ThirdSection';
import Footer from '../../components/footers/landingfooter/Footer';
import Auth from '../../hoc/auth/Auth';

class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            authState: false,
            backdrop: false
        }
    }

    getStartedHandler = () => {
        this.setState({authState: true, backdrop: true})
    }

    backDropHandler = () => {
        console.log(
            'backdrop clicked'
        )
        this.setState({backdrop: false, authState: false})
    }

    render(){
        return(
            <div>
                <LandingNav />
                <FirstSection getStarted={this.getStartedHandler}/>
                <SecondSection />
                <ThirdSection />
                <Footer />
                {(this.state.authState && this.state.backdrop)?
                <Auth closeAuth={this.backDropHandler} backDropClicked={this.backDropHandler}/>:
                <Fragment></Fragment>
                }   
            </div>
        )
    }
}

export default Landing;