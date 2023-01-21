import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
function Feed() {
  return (
    <div className='feed'>
      <StoryReel/>
      {/* StoryReel */}
      <MessageSender/>
      {/* MessageSender */}

      <Post
        profilePic='https://scontent-syd2-1.xx.fbcdn.net/v/t1.18169-9/23559489_1904915916190288_3581100815175114238_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nXRQmuZmEHEAX97JF_P&tn=xwnQYdv8QfTv9V5w&_nc_ht=scontent-syd2-1.xx&oh=00_AfAYFdjylvkZHGGt4_U98bf0t_bE8s6hTYLzzwpxhBa2WQ&oe=63C7671B'
        message='Wow this works'
        timestamp='This is a timestamp'
        username='Tom Golding'
        image='https://media.istockphoto.com/id/951374324/photo/sydney-opera-house-dawn.jpg?s=612x612&w=0&k=20&c=yaVVS_w4GrC6z33W6m_aSi5UtR0LE7s5TSvBWmcdPak='/>
    </div>
  )
}

export default Feed