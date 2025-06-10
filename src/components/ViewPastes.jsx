import React from 'react'
import './ViewPastes.css'
import {useState, useEffect} from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
const ViewPastes = () => {
    const allPastes = useSelector((state) => state.paste.pastes);
    const {id} = useParams();
    const paste = allPastes.filter((p) => p._id === id) [0];

  return (
    <div className='main-container'>
        <div className='home-container'>
            <input
                type='text'
                placeholder='enter title here'
                disabled
                value = {paste.title}
                // onChange={(e) => setTitle(e.target.value)}
                id='input-title-field'
            />

            {/* <button id='btn' onClick={createPaste}>
                {pasteId ? "Update My Paste" : "Create My Paste"}
            </button> */}
        </div>
        <div className='text-area-content'>
            <button id='copy-content-btn' onClick={() => {
                navigator.clipboard.writeText(paste?.content);
                toast.success("Copied to Clipboard");
            }}>Copy Content</button>
            <textarea
                value = {paste.content}
                placeholder='Enter Content Here.'
                disabled
                // onChange={(e) => setValue(e.target.value)}
                id='textArea-field'
            />
        </div>
    </div>
  )
}

export default ViewPastes
