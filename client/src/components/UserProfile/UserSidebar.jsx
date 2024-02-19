import React from 'react'
import { Link } from 'react-router-dom'
import './UserSidebar.css'
import { PiUserCircleLight } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa6";
import { GiSpellBook } from "react-icons/gi";
import { TbPencilStar } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";

const UserSidebar = ({ activepage }) => {
  const uData = JSON.parse(window.localStorage.getItem("user"));
  return (
    <div className='usersidebar'>
      {
        activepage === 'accountsettings' ?
          <div className='s2'>
            <PiUserCircleLight size={25} />
            <span>Account Settings</span>
          </div>
          :
          <Link
            to={`/user/${uData?.username}/accountsettings`}
            className='stylenone'

          >
            <div className='s1'>
              <PiUserCircleLight size={25} />
              <span>Account Settings</span>
            </div>
          </Link>
      }


      {
        activepage === 'changepassword' ?
          <div className='s2'>
            <FaRegEye />
            <span>Change Password</span>
          </div>

          :
          <Link
            to={`/user/${uData?.username}/changepassword`} className='stylenone'>
            <div className='s1'>
              <FaRegEye />
              <span>Change Password</span>
            </div>
          </Link>
      }

      {
        activepage === 'yourbooks' ?
          <div className='s2'>
            <GiSpellBook />
            <span>Your Books</span>
          </div>

          :
          <Link
            to={`/user/${uData?.username}/yourbooks`} className='stylenone'>
            <div className='s1'>
              <GiSpellBook />
              <span>Your Books</span>
            </div>
          </Link>
      }

      {
        activepage === 'premium' ?
          <div className='s2'>
            <TbPencilStar />
            <span>Premium</span>
          </div>
          :
          <Link to={`/user/${uData?.username}/premium`} className='stylenone'>
            <div className='s1'>
              <TbPencilStar />
              <span>Premium</span>
            </div>
          </Link>
      }

      {
        activepage === 'legalnotice' ?

          <div className='s2'>
            <IoDocumentTextOutline />
            <span>Legal Notice</span>
          </div>

          :
          <Link
            to={`/user/${uData?.username}/legalnotice`} className='stylenone'>
            <div className='s1'>
              <IoDocumentTextOutline />
              <span>Legal Notice</span>
            </div>
          </Link>
      }
    </div>
  )
}

export default UserSidebar