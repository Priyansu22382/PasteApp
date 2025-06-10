import React from 'react'
import './Home.css'
import {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateToPastes, addToPastes } from '../redux/pasteSlice';
const Home = () => {
   const [title,setTitle] = useState('');
   const [value,setValue] = useState('');
   const [searchParams, setSearchParams] = useSearchParams();
   const pasteId = searchParams.get("pasteId");
   const dispatch = useDispatch();
   const pastes = useSelector((state) => state.paste.pastes);
   useEffect(() => {
        if(pasteId){
            const paste = pastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
   }, [pasteId])
   
   function createPaste(){
    const paste = {
        title : title,
        content : value,
        _id : pasteId || Date.now().toString(),
        createdAt : new Date().toISOString() 
    }

    if(pasteId){
        dispatch(updateToPastes(paste))
   }
   else{
        dispatch(addToPastes(paste))
   }
   // After Creation or Updation

   setTitle('');
   setValue('');
   setSearchParams({});
   }

   
  return (
    <div className='main-container'>
        <div className='home-container'>
            <input
                type='text'
                placeholder='enter title here'
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                id='input-title-field'
            />

            <button id='btn' onClick={createPaste}>
                {pasteId ? "Update My Paste" : "Create My Paste"}
            </button>
        </div>
        <div className='text-Area'>
            <textarea
                value = {value}
                placeholder='Enter Content Here.'
                onChange={(e) => setValue(e.target.value)}
                id='textArea-field'
            />
        </div>
    </div>
  )
}

export default Home
