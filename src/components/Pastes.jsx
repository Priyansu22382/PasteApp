import React, { useState } from 'react'
import './Pastes.css'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Pastes = () => {

    const pastes = useSelector((state) => state.paste.pastes);
    console.log(pastes)
    const dispatch = useDispatch();
    const [searchTerm,setSearchTerm] = useState('');
    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    function handleDelete(pasteId){
        dispatch(removeFromPastes(pasteId));
    }
  return (
    <div>

        <input
            id='search-input-field'
            type='search'
            placeholder='search here'
            value = {searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className='pasteContent-heading'>
        <h1 id='pastes-heading'>All Pastes</h1>
        </div>

        <div className='pastes-cards'>
            {
                filteredData.length > 0 &&
                filteredData.map(
                    (paste) => {
                        return (
                            <div className='card' key={paste?._id}>
                                <div className='card-data'>
                                    <div className='card-title'>
                                        {paste.title}
                                    </div>  
                                    <div className='card-content'>
                                        {paste.content}
                                    </div>    
                                </div>  

                                <div className='buttonSection'>
                                    <button>
                                        <Link to={`/?pasteId=${paste?._id}`} id='edit-btn'>Edit</Link>
                                    </button> 
                                    <button>
                                        <Link to={`/pastes/${paste?._id}`} id='view-btn'>View</Link>
                                    </button>
                                    <button onClick={() => handleDelete(paste?._id)}>Delete</button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste?.content);
                                        toast.success("Copied to Clipboard.");
                                    }}>Copy</button>
                                </div>
                                
                            </div>    
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Pastes
