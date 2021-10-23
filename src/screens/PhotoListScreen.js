import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';
import PhotoDetail from '../components/PhotoDetail';
import { useEffect } from 'react/cjs/react.development';

// imports inject and observer from 'mobx-react':
import { inject, observer } from "mobx-react";

const PhotoListScreen = (props) => {
  const { total, photos, fetchImages, perPage, getPerPage, setPerPage } = props.store;
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  function fetchMoreImages() {
    setPerPage(perPage + 15)
    setLoadingMore(true);
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
    flexDirection: "row",
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
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
    padding: 6,
    textAlign: 'center'
  }
};

export default inject("store")(observer(PhotoListScreen));
