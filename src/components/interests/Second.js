import React, {Component} from 'react';
import './Second.css';
import Item from './items/topics/Item';
import User from './items/people/User';
import Community from './items/comms/Community';
import Tag from './items/tags/Tag';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Second extends Component {
    constructor(props){
        super(props);
        this.state = {
            selection: 'TOPICS'
        }
    }

    ActiveElement = (event) => {
        const elementId = event.target.id;
        switch(elementId){
            case 'interesttopics': 
                this.setState({selection: 'TOPICS'});
                document.getElementById(elementId).classList.add('active')
                document.getElementById('interestpeople').classList.remove('active')
                document.getElementById('interestcommunities').classList.remove('active')
                document.getElementById('intereststags').classList.remove('active')
                break;
            case 'interestpeople': 
                this.setState({selection: 'PEOPLE'});
                document.getElementById('interesttopics').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('interestcommunities').classList.remove('active')
                document.getElementById('intereststags').classList.remove('active')
                break;
            case 'interestcommunities': 
                this.setState({selection: 'COMMUNITIES'});
                document.getElementById('interesttopics').classList.remove('active')
                document.getElementById('interestpeople').classList.remove('active')
                document.getElementById(elementId).classList.add('active')
                document.getElementById('intereststags').classList.remove('active')
                break;
            case 'intereststags': 
                this.setState({selection: 'HASHTAGS'});
                document.getElementById('interesttopics').classList.remove('active')
                document.getElementById('interestpeople').classList.remove('active')
                document.getElementById('interestcommunities').classList.remove('active')
                document.getElementById(elementId).classList.add('active');
                break;
            default: 
                console.log('wrong input');
        }
    }

    render(){
        let renderComponent;
        switch(this.state.selection){
            case 'TOPICS':
                renderComponent = (<div className="First">
                    {this.props.topics.map((topic, i) => {
                        return(
                            <Item key={topic._id} 
                                topic={topic}
                                me={this.props.me}/>
                        )
                    })}
                </div>)
                break;
            case 'PEOPLE':
                renderComponent = (<div className="Second">
                    {this.props.users.map((user, i) => {
                        return(
                            <User key={user._id} 
                                user={user}
                                me={this.props.me}/>
                        )
                    })}
                </div>)
                break;
            case 'COMMUNITIES':
                renderComponent = (<div className="Third">
                    {this.props.communities.map((community, i) => {
                        return(
                            <Community key={community._id} 
                                community={community}
                                me={this.props.me}/>
                        )
                    })}
                </div>)
                break;
            case 'HASHTAGS':
                renderComponent = (<div className="Fourth">
                    <GridList cellHeight={75} spacing={2}>
                        {this.props.hashtags.map((hashtag, i) => (
                        <GridListTile key={hashtag._id} cols={1} rows={1}>
                            <Tag 
                                hashtag={hashtag}
                                me={this.props.me}/>
                        </GridListTile>
                        ))}
                    </GridList>
                </div>)
                break;
            default:
                renderComponent = (<div className="First">
                    <h1>Loading...</h1>
                </div>)
        }
    return(
        <div className="InterestsSecond">
            <div className="OptionBox">
                <div className="Options">
                    <button id="interesttopics" className='active' onClick={this.ActiveElement}>TOPICS</button>
                    <button id="interestpeople" className='' onClick={this.ActiveElement}>PEOPLE</button>
                    <button id="interestcommunities" className='' onClick={this.ActiveElement}>COMMUNITIES</button>
                    <button id="intereststags" className='' onClick={this.ActiveElement}>HASHTAGS</button>
                </div>
                <hr></hr>
            </div>
            <div className="Container">
                {renderComponent}
            </div>
        </div>
    )
    }
}

export default Second