import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import InfiniteScroll from 'react-native-infinite-scrolling'

const TestingApplication = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    loadMore()
  },[])

  const renderData = ({ item }) => {
    return(
      <View>
        <Text> {item.title} </Text>
        <Text> {item.id} </Text>
      </View>
    )
  }

  const loadMore = () => {
    axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=96358825614a5d3b1a1c3fd87fca2b47&text=kittens&format=json&nojsoncallback=2')
    .then((response) => {
     // let updatedData = data.concat(response.data.photos.photo)
      setData(response.data.photos.photo)
    })
    .catch((error) => console.log('error =', error))
  }
  return(
    <InfiniteScroll 
      renderData = {renderData}
      data = { data }
      loadMore = { loadMore }
    />
  )
}  

export default TestingApplication