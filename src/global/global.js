import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
console.log("width", width);

export default Global = {
  width: width
}