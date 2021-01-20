import { configureStore } from '@reduxjs/toolkit';
import cameraSlice from '../features/cameraSlice';
import userSlice from '../features/userSlice';
import imageSlice from '../features/imageSlice';

export default configureStore({
  reducer: {
    camera: cameraSlice,
    user: userSlice,
    image: imageSlice,
  },
});
