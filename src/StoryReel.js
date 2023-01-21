import React from 'react'
import Story from './Story'
import './StoryReel.css'
function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
            image="https://thumbor.forbes.com/thumbor/trim/0x53:980x604/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/60834c47698b7d2cd708c3f0/0x0.jpg"
            profileSrc="https://scontent-syd2-1.xx.fbcdn.net/v/t1.18169-9/23559489_1904915916190288_3581100815175114238_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nXRQmuZmEHEAX97JF_P&tn=xwnQYdv8QfTv9V5w&_nc_ht=scontent-syd2-1.xx&oh=00_AfAYFdjylvkZHGGt4_U98bf0t_bE8s6hTYLzzwpxhBa2WQ&oe=63C7671B"
            title="Tom Golding"
            />


            {/* Story */}
            <Story 
            image="https://cdn.mos.cms.futurecdn.net/68nJwaxHSFmE6whdL4r5oH-970-80.jpg.webp"
            profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
            title="Hardik Kumar"
            />

            {/* Story */}
            <Story
            image="https://scifusion360.com/wp-content/uploads/2020/03/What-Types-of-Coders-are-There-300x200.jpg"
            profileSrc="https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?s=612x612"
            title="Sonny Sangha"
            />

            {/* Story */}
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnG0NLa59PE1ZVQeqq4ZJkkkhuibDTG2hHYg&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49lVeJq2QAD6w6c-tmzAg31hHmiyrRMrcXw&usqp=CAU"
            title="Sandeep Singh"
            />

            {/* Story */}
            <Story
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191101175718/How-do-I-become-a-good-Java-programmer.png"
            profileSrc="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200326191711/How-to-Think-Like-a-Programmer.png"
            title="Vinit"
            />
    </div>
  )
}

export default StoryReel