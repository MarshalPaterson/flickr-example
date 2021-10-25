import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const PhotoDetail = ({ title, imageUrl }) => {

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image style={styles.thumbnailStyle} source={{ uri: imageUrl }} />
        </View>
      </CardSection>
      <CardSection>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 90,
  },
  headerTextStyle: {
    fontSize: 13,
  },
  thumbnailStyle: {
    height: 67,
    width: 67,
    borderRadius: 6,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 9,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
};

export default PhotoDetail;
