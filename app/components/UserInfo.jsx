
import React from 'react'

const UserInfo = ({userInfo}) => {
  console.log(userInfo);
  return (
    <div>
        <Image src={userInfo.userImage}
        alt='userImage'
        width={80}
        height={80}/>
    </div>
  )
}

export default UserInfo
