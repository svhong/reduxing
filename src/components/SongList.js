import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    //create renderlist function that returns the mapped state that is wrapped in jsx
    renderList() {
        return this.props.songs.map((song) => {
            //returning jsx with mapped song
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => { this.props.selectSong(song) }}
                        >
                            select
                        </button>
                    </div>
                    <div className="content">               {song.title}
                    </div>
                </div>
            )
        })
    }

    render() {
        //connected component will have the list of songs from mapStateToProps as this.props
        return <div className="ui divided list">{this.renderList()}</div>
    }
}
// created a function to map the data in store as state
// anytime we change redux state, mapStatetoProps runs
const mapStateToProps = (state) => {
    console.log(state);
    return { songs: state.songs };
}

// connect the state to the component
// action creator passed in as second parameter
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);