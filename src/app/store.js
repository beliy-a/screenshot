import { configureStore } from '@reduxjs/toolkit';
import cameraSlice from '../features/cameraSlice';

export default configureStore({
  reducer: {
    camera: cameraSlice,
  },
});
