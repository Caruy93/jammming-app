import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SearchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, 
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3},
        {name: 'name4', artist: 'artist4', album: 'album4', id: 4}
      ] ,
      playlistName: 'My List',
      playlistTracks: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2}, 
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    const tracksList = this.state.playlistTracks;
    if (tracksList.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracksList.push(track);
    this.setState({
      playlistTracks: tracksList
    });

  }

  removeTrack(trackToRemove) {
    const tracksList = this.state.playlistTracks.filter(
      track => track.id !== trackToRemove.id
    );

    this.setState({
      playlistTracks: tracksList
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.SearchResults} 
              onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks} 
              onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
