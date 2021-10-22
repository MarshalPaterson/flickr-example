import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const getImages = async (imageStore, recall) => {
    imageStore.getImagesList(recall);
  };
  

const HomeScreen = inject('imageStore')(

    observer(props => {

        const {imageStore} = props;

        useEffect(() => {
            getImages(imageStore, false);
        },[]);

        return(
            <SafeAreaView>
<Text>Working !!!!!</Text>
            </SafeAreaView>
        )

    })

)

export default HomeScreen;