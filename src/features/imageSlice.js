import { createSlice } from '@reduxjs/toolkit';

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    selectImage: null,
  },
  reducers: {
    setImage(state, action) {
      state.selectImage = action.payload;
    },
    clearImage(state) {
      state.selectImage = null;
    }
  }

});

export const { setImage, clearImage } = imageSlice.actions;

export const selectScreenImage = state => state.image.selectImage;
export default imageSlice.reducer;