"use client"
import React, { useEffect } from 'react'

const Profile = ({params}) => {
    useEffect(() =>{
        console.log(params.userId.replace('%40','@'))
    },[params]);
  return (
    <div>Profile</div>
  )
}

export default Profile
