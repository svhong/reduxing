import { combineReducers } from 'redux';

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

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})