import React, { Component } from 'react'
import {onGetData} from '../../../action';
import {connect} from 'react-redux';
// import Display from '../Component/Display';
import DisplayGrid from '../Component/DisplayGrid';
import PlayerImage from '../Component/PlayerImage';
import Video from '../Component/Video';

class Player extends Component {

    componentDidMount=() => {
        this.props.onGetPosts();
    }
  
    render() {
    
    return (
         <div>
            <PlayerImage />
            <Video />
            <DisplayGrid data={this.props.posts}/>
           
        </div>
    );
  }
};

const mapStateToProps = state => {
    return {posts: state.posts}
}

const mapDispatchToProps = dispatch => {
    return{
        onGetPosts: () => dispatch(onGetData())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Player);

