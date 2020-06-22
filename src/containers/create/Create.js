import React, {Component} from 'react';
import EditorJS from '@editorjs/editorjs';
import './Create.css';

import CreateNav from '../../components/navigations/createnav/CreateNav';

//editorjs tools
import Header from '@editorjs/header';
import LinkTool from '@editorjs/link';
// import Raw from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list'; 
import Embed from '@editorjs/embed'; 
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code'; 
import Quote from '@editorjs/quote'; 
import Marker from '@editorjs/marker'; 
import Delimiter from '@editorjs/delimiter'; 
import Table from '@editorjs/table'
import Publish from '../../hoc/dialog/publish/Publish';

import axios from 'axios';
import {ArticleImages} from '../../utils/ArticleImages';

import Unsplash from 'unsplash-js';
import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

class Create extends Component {
    constructor(props){
        super(props);
        this.state = { 
            unplashImages: null,
            dialogOpen: false,
            title: '',
            description: '',
            image: '',
            content: {},
            searchKey: '',
            communities: [],
            hashtags: [],
            commId: null,
            selectedTags: [],
            checkedA: false,
            articleImages: [],
            errorTitle: true,
            errorDesc: true,
            disablePublishBtn: true
        }
        this.tags = []
        this.editor = new EditorJS({
            placeholder: 'Start Writing...',
            tools: {
                header: Header,
                image: SimpleImage,
                // imagetool: {
                //     class: ImageTool,
                //     // config: {
                //     //     uploader: {
                //     //         uploadByFile(file){
                //     //             // your own uploading logic here
                //     //             console.log(file)
                //     //             const formData = new FormData();
                //     //             formData.append('image', file);
                //     //             fetch('http://localhost:5000/editor/image', {
                //     //                 method: 'POST',
                //     //                 body: formData
                //     //             })
                //     //             .then(res => {
                //     //                 if(res.status !== 200){
                //     //                     throw new Error("Failed to fetch posts.");
                //     //                 }
                //     //                 return res.json();
                //     //             })
                //     //             .then(resData => {
                //     //                 return resData;
                //     //             })
                //     //             .catch(err => {
                //     //                 console.log(err)
                //     //             })
                //     //         }
                //     //     }
                //     // }
                // },
                list: List,
                quote: Quote,
                marker: Marker,
                code: CodeTool,
                delimiter: Delimiter,
                inlineCode: InlineCode,
                linkTool: LinkTool,
                embed: Embed,
                table: Table
            },
        });
        this.unsplash = new Unsplash({ accessKey: "wxCjEHg2QqB3JLrCLWohfjXneUq3O6AbBVpZ0pODy98" });
    }

    handleChecked = (event) => {
        console.log('checked')
        if(this.state.commId === null){
            this.setState({disablePublishBtn: true})
        }
        if(!event.target.checked){
            if(this.state.errorTitle === false){
                if(this.state.errorDesc === false){
                    this.setState({disablePublishBtn: false})
                }
            }
        }
        this.setState({checkedA: event.target.checked});
    }

    saveArticle = () => {
        this.editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }
    handleClose = () => {
        this.setState(
            { dialogOpen: false, checkedA: false }
        );    
    };

    publishArticle = () => {
        this.setState(
            { dialogOpen: true }
        );
        this.editor.save().then((outputData) => {
            const content = outputData;
            const articleImages = ArticleImages(outputData);
            this.setState({image: articleImages[0], content: content, articleImages: articleImages});
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }

    handlePublishBlog = () => {
        this.setState(
            { dialogOpen: true }
        );
        fetch('https://thawing-reaches-88200.herokuapp.com/feed/createblog', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                image: this.state.image,
                community: this.state.commId,
                tags: this.state.selectedTags,
                content: JSON.stringify(this.state.content)
            })
        })
        .then(res => {
            if(res.status !== 200 && res.status !== 201) {
                throw new Error('Creating or eidting blog failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData)
        });
    }

    inputChaneHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(this.state.errorTitle === false){
            if(this.state.errorDesc === false){
                this.setState({disablePublishBtn: false})
            }
        }
        switch(name){
            case 'title':
                this.setState({title: value})
                if(value.length < 6){
                    this.setState({errorTitle: true});
                }else{
                    this.setState({errorTitle: false})
                }
                break;
            case 'desc':
                this.setState({description: value});
                if(value.length < 12){
                    this.setState({errorDesc: true})
                }else{
                    this.setState({errorDesc: false})
                }
                break;
            default: 
                console.log('wrong input');
        }
    }

    handleSearchCommunity = (e) => {
        const value = e.target.value;
        axios.get('https://thawing-reaches-88200.herokuapp.com/community/searchcomm', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                searchKey: value 
            }
        })
        .then(res => {
            const comm = res.data.communities;
            this.setState({ communities: comm })
        })
        .catch(err => {
            console.log(err)
        })
    }

    onSelectedCategory = (id) => {
        if(id){
            this.setState({disablePublishBtn: false})
        }
        this.setState({commId: id})
    }

    onSelectedTag = (id) => {
        this.tags.push(id);
        this.setState({selectedTags: this.tags})
    }

    handleSearchHashtags = (e) => {
        const value = e.target.value;
        axios.get('https://thawing-reaches-88200.herokuapp.com/hashtag/search/tags', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            params: {
                searchKey: value 
            }
        })
        .then(res => {
            const tags = res.data.hashtags;
            this.setState({ hashtags: tags })
        })
        .catch(err => {
            console.log(err)
        })
    }

    selectPreview = (imageUrl) => {
        this.setState({image: imageUrl})
    }

    searchOnUnplash = (e) => {
        const search = e.target.value;
        this.unsplash.search.photos(search, 1, 20)
        .then(toJson => {
            return toJson.json();
        })
        .then(json => {
            this.setState({unplashImages: json.results});
            console.log(json);
            // Your code
        });
    }

    render(){
        return (
            <div className="Create">
                <CreateNav 
                    publishArticle = {this.publishArticle}
                    saveArticle={this.saveArticle}
                    profile={this.props.profile}/>
                <Publish 
                    disablePublishBtn={this.state.disablePublishBtn}
                    errorTitle={this.state.errorTitle}
                    errorDesc={this.state.errorDesc}
                    clickPreview={this.selectPreview}
                    imagesList={this.state.articleImages}
                    onInputChange={this.inputChaneHandler}
                    handleSearchHashtags={this.handleSearchHashtags}
                    onSelectedCategory={this.onSelectedCategory}
                    onSelectedTag={this.onSelectedTag}
                    handleSearchCommunity={this.handleSearchCommunity}
                    handleChecked={this.handleChecked}
                    checkedA={this.state.checkedA}
                    communities={this.state.communities}
                    hashtags={this.state.hashtags}
                    image={this.state.image}
                    title={this.state.title}
                    desc={this.state.description}
                    handleClose={this.handleClose}
                    handlePublishBlog={this.handlePublishBlog}
                    open={this.state.dialogOpen} />
                <br></br>
                <Grid container>
                    <Grid item xs={8}>
                        <div id="editorjs">
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="UnplashImageContainer">
                        <TextField variant="outlined" 
                            label="Search for image" 
                            fullWidth
                            onChange={this.searchOnUnplash}/>
                            {this.state.unplashImages === null?
                            "":
                            <div className="Container">
                                {this.state.unplashImages.map(image => {
                                    return (
                                        <img src={image.urls.regular} alt={image.alt_description}></img>
                                    )
                                })}
                            </div>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Create;