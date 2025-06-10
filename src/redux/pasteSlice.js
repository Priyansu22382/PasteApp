import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
  pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      const paste = action.payload;
      // difference between state and payload : state is the current state of an Application and if we write this state.pastes means what is the current state of the pasetes array. and action means it's an objet which contains type : what action we have to perform and payload : paste data that comes from the Home.jsx
      // state.pastes is an array of pastes
      // state.pastes.some function iterate over a whole array and check if the paste.title is already exist then return true else return false.
      const titleExist = state.pastes.some((p) => p.title === paste.title);
      if(titleExist){
        toast.error("Title already exists. Choose a different title.");
        return;
      }
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("Paste Created Successfully");
    },
    updateToPastes: (state,action) => {
      // extract the paste from the payload
      const paste = action.payload;
      // find the index of the data which we have to update by using the .findIndex function 
      const index = state.pastes.findIndex((p) => p._id === paste._id);
      if(index >= 0){
        state.pastes[index] = paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Updated");
      }

    },
    resetAllPastes: (state, action) => {
        state.pastes = [];
        localStorage.removeItem("pastes");
    },
    removeFromPastes: (state,action) => {
        const pasteId = action.payload;
        const index = state.pastes.findIndex((item) => item._id === pasteId);
        if(index >= 0){
          // delete the 1 item from the index : index.
          state.pastes.splice(index,1);
          localStorage.setItem("pastes",JSON.stringify(state.pastes));
          toast.success("Paste Deleted.");
        }
    }
  }
})  

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes,  removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer