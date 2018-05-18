import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({ album }) => {  //destructure album from props
  const { title, artist, thumbnail_image, image, url } = album; //optional destructure album
  const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle,
     headerTextStyle, imageStyle } = styles;  //optional destructure styles object
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>;
          <Text>{artist}</Text>;
        </View>
      </CardSection>

      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} text={'Buy Now!'} />
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
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
    borderRadius: 10,
  },
};

export default AlbumDetail;
