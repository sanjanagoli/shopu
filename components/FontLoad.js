
import { Font } from 'expo';

let FontLoad = Font.loadAsync({
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
  'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.otf'),
  'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.otf'),
});

export default FontLoad;
