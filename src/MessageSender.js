import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material';
import { Avatar } from '@mui/material'
import React from 'react'
import './MessageSender.css'
import {useState} from 'react';
function MessageSender() {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    
    // Some clever db stuff

    setInput('');
    setImageUrl('');
  }

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input 
            value={input}
            className='messageSender__input'
            placeholder="What's on your mind"
            onChange={e => setInput(e.target.value)}
            />
          <input 
            value={imageUrl}
            placeholder='image URL (Optional)'
            onChange={e => setImageUrl(e.target.value)}
            />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <Videocam style={{ color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibrary style={{ color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticon style={{ color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default MessageSender