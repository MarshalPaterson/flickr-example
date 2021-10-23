import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import PhotoDetail from '../components/PhotoDetail';

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
    return (
      <View style={styles.containerStyle}>
        {
          photos.map((items, index) => {
            return (
              <View>
                {items.map((subItems, sIndex) => {
                  return (
                    <PhotoDetail
                      key={subItems.id}
                      title={subItems.title}
                      imageUrl={`https://farm${subItems.farm}.staticflickr.com/${subItems.server}/${subItems.id}_${subItems.secret}.jpg`}
                      style={styles.containerStyle}
                    />
                  )
                })}
              </View>
            );
          })}
      </View> 
    )
  }

  if (photos.length !== 3) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
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
          onEndReachedThreshold={0.01}
          keyExtractor={item => item.id} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
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
