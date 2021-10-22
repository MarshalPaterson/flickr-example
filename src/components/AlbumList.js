import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { photoset: null };

  componentWillMount() {
    axios
      .get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=1',
      )
      .then((response) =>
        this.setState({ photoset: response.data.photos.photo }),
      ).catch(error => 
        console.log(error));
  }

  renderAlbums() {
    return this.state.photoset.map((album) => (
      <AlbumDetail
        navigation={this.props.navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
      />
    ));
  }

  render() {
    console.log(this.state);

    if (!this.state.photoset) {
      return <Text>Loading...</Text>;
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>{this.renderAlbums()}</ScrollView>
      </View>
    );
  }
}

export default AlbumList;
