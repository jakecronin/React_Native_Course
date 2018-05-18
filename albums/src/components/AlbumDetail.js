import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {  //destructure album from props
  const { title, artist, thumbnail_image } = album; //optional destructure album
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle} = styles;  //optional destructure styles object
  return (
    <Card>
      <CardSection> //header of card
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View> //image to left
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>;
          <Text>{artist}</Text>;
        </View> //text on right
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle:{
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  }

}

export default AlbumDetail;
