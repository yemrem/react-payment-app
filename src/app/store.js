import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterFromReactDefault/counterSlice';
import  virtualKeyboardSliceReducer  from './stores/virualKeyboardSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vkeyboard: virtualKeyboardSliceReducer
  },
});
