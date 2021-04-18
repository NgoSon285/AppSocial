import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({
  name: 'AppSocial',
  port: 9090,
})
  .useReactNative({
    asyncStorage: true, // there are more options to the async storage.
    networking: {},
    editor: false, // there are more options to editor
    errors: {veto: (stackFrame) => false}, // or turn it off with false
  })
  .setAsyncStorageHandler(AsyncStorage)
  .use(
    reactotronRedux({
      except: ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED'],
    }),
  )
  .use(sagaPlugin())
  .connect();
export default reactotron;

