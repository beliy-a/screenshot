import { createSlice } from '@reduxjs/toolkit';

const cameraSlice = createSlice({
  name: 'camera',
  initialState: {
    cameraImage: null,
  },
  reducers: {
    setCameraImage(state, action) {
      state.cameraImage = action.payload;
    },

  }

});

export const { setCameraImage } = cameraSlice.actions;

export const selectCameraImage = state => state.camera.cameraImage;
export default cameraSlice.reducer;