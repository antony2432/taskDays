import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
}

export const modalShowSlice = createSlice({
  name: "modalShow",
  initialState,
  reducers: {
    onModal: (state) => {
      state.value = true
    },
    offModal: (state) => {
      state.value = false
    }
  }
})

export const {onModal, offModal} = modalShowSlice.actions
export default modalShowSlice.reducer