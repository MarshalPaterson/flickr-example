import React, { Component, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from './PhotoDetail';
import { useEffect } from 'react/cjs/react.development';

const PhotoList = () => {

  const [photos, setPhotos] = useState([]);

  //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=1

  useEffect(() => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=auto&format=json&nojsoncallback=1&page=2`,
      )
      .then((response) => {
        var modified = []
        if (response.data.photos.photo.length > 0) {
          modified = response.data.photos.photo.reduce((rows, key, index) => {
            return (index % 3 === 0 ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows;
          }, []);

        }

        setPhotos(modified)
      }

      );
  })

  function renderAlbums() {
    return photos.map((photo) => (
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
      </View>

    ));
  }

  if (!photos) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={photos} renderItem={() => renderAlbums()} />
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
