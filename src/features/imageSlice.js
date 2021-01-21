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
  }

});

export const { setImage } = imageSlice.actions;

export const selectScreenImage = state => state.image.selectImage;
export default imageSlice.reducer;