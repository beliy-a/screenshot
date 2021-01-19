import { configureStore } from '@reduxjs/toolkit';
import cameraSlice from '../features/cameraSlice';
import userSlice from '../features/userSlice';

export default configureStore({
  reducer: {
    camera: cameraSlice,
    user: userSlice,
  },
});
