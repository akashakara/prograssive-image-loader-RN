
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ProgressiveImage from './ProgressiveImage';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <ProgressiveImage
          thumbnailSource={{ uri: `https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/67782063_1407586609382016_1464967693458210816_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=yRz96LQ4sTwAX9E6V_N&_nc_ht=scontent.fpat1-1.fna&oh=b8d5c0bbc33494ba6b4cb39948fa1cf9&oe=5F796902` }}
          source={{ uri: `https://scontent.fpat1-1.fna.fbcdn.net/v/t1.0-9/67782063_1407586609382016_1464967693458210816_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=yRz96LQ4sTwAX9E6V_N&_nc_ht=scontent.fpat1-1.fna&oh=b8d5c0bbc33494ba6b4cb39948fa1cf9&oe=5F796902` }}
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />
      </View>
    );
  }
}