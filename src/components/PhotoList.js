import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';

class PhotoList extends Component {
  state = {photos: null};

  //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=1

  componentWillMount() {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=1`,
      )
      .then((response) => {
        var modified = []
        if (response.data.photos.photo.length>0) {
          modified = response.data.photos.photo.reduce( (rows, key, index) =>{ 
             return (index % 3 === 0 ? rows.push([key]) 
               : rows[rows.length-1].push(key)) && rows;
           }, []);
         
      }

        this.setState({photos: modified})
      }
        
      );
  }

  renderAlbums() {
    return this.state.photos.map((photo) => (
      <View style={styles.containerStyle}>
  
{/* <View style={styles.powderblueStyle} />
<View style={styles.skyblueStyle} />
<View style={styles.steelblueStyle} /> */}
{
  photo.map((col) => (
    <PhotoDetail
        key={col.title}
        title={col.title}
        imageUrl={`https://farm${col.farm}.staticflickr.com/${col.server}/${col.id}_${col.secret}.jpg`}
        style={styles.containerStyle}
      />
  ))
}


      {/* <PhotoDetail
        key={photo.title}
        title={photo.title}
        imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        style={styles.containerStyle}
      />
            <PhotoDetail
        key={photo.title}
        title={photo.title}
        imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        style={styles.containerStyle}
      /> */}

      </View>

    ));
  }

  render() {
    console.log(this.state);

    if (!this.state.photos) {
      return (
        <View style={{flex: 1}}>
          <Text>Loading...</Text>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <ScrollView>{this.renderAlbums()}</ScrollView>
      </View>
    );
  }
}

  const styles = {
    containerStyle: {
      flex: 1,
      flexDirection: "row" // here we are settin row as the flexdirection
      }
  };

export default PhotoList;
