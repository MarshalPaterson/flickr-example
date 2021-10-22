import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from '../components/PhotoDetail';
import { useEffect } from 'react/cjs/react.development';

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

const PhotoListScreen = (props) => {
  const { total, photos, fetchImages } = props.store;
  //const [photos, setPhotos] = useState(photos);
  // const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(15);
  const [loadingMore, setLoadingMore] = useState(false);
  //const [total, setTotal] = useState(total)

  //https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=1

  useEffect(() => {
    fetchImages();
  }, []);

  // function fetchImages() {
  //   axios
  //     .get(
  //       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=plants&format=json&nojsoncallback=1&safe_search=1&per_page=${perPage}&page=${page}`,
  //     )
  //     .then((response) => {
  //       var modified = []
  //       if (response.data.photos.photo.length > 0) {
  //         modified = response.data.photos.photo.reduce((rows, key, index) => {
  //           return (index % 3 === 0 ? rows.push([key])
  //             : rows[rows.length - 1].push(key)) && rows;
  //         }, []);

  //       }

  //       setTotal(response.data.photos.perpage);
  //       setPhotos(modified);
  //     }

  //     );
  // }
 
  function fetchMoreImages() {
    //setPage(page + 1);
    setPerPage(perPage + 15);
    setLoadingMore(true);
    fetchImages();
  }

  function renderAlbums() {
    return photos.map((photo) => (
      <View style={styles.containerStyle}>
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

  // return (
  //   <View style={{ flex: 1 }}>
  //     <FlatList data={photos} renderItem={() => renderAlbums()} />
  //   </View>
  // );

  if (!photos) {
    return (
      <View style={{ flex: 1 }}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={photos} onEndReached={() => {
          fetchMoreImages()
        }} renderItem={() => renderAlbums()}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Displaying {total} Items</Text>
          </View>
        }
        ListFooterComponent={
          <View style={styles.footer}>
            {loadingMore &&
              <Text style={styles.footerText}>Loading More...</Text>
            }
          </View>
        }
        scrollEventThrottle={250}
        onEndReached={info => {
          fetchMoreImages();
        }}
        onEndReachedThreshold={0.01} />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "row", // here we are settin row as the flexdirection
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  list: {

  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    width: '100%',
  },
  footer: {
    padding: 15,
  },
  footerText: {
    fontWeight: '600',
  }
};

// export default PhotoListScreen;
export default inject("store")(observer(PhotoListScreen));
