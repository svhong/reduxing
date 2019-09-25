import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
    if (!mySelectedSong) {
        return <div>Please make a selection.</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {mySelectedSong.title}
                <br />
                Duration: {mySelectedSong.duration}
            </p>

            {mySelectedSong.title}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { mySelectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);