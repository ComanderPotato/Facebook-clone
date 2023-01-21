import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.18169-9/23559489_1904915916190288_3581100815175114238_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nXRQmuZmEHEAX97JF_P&tn=xwnQYdv8QfTv9V5w&_nc_ht=scontent-syd2-1.xx&oh=00_AfAYFdjylvkZHGGt4_U98bf0t_bE8s6hTYLzzwpxhBa2WQ&oe=63C7671B" title="Tom Golding"/>
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center"/>
      <SidebarRow Icon={EmojiFlags} title="Pages"/>
      <SidebarRow Icon={People} title="Friends"/>
      <SidebarRow Icon={Chat} title="Messenger"/>
      <SidebarRow Icon={Storefront} title="Marketplace"/>
      <SidebarRow Icon={VideoLibrary} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>
    </div>
  )
}

export default Sidebar