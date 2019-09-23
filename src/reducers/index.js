// Refer back to documentation for other named imports on redux
import { combineReducers } from 'redux';
// created two reducers that will get called by the action creator

const songsReducer = () => {
    return [
        { title: 'Little Wing', duration: '6:48' },
        { title: 'Gravity', duration: '9:51' },
        { title: 'Macarena', duration: '3:15' },
        { title: 'I want it that way', duration: '1:45' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong
}


//combine the reducers as values that will show up in state
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})