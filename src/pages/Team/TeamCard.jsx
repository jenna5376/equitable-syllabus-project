import React from 'react'

function TeamCard({Image, Name, Role, Email}) {
  return (
    <div className='team-card'>
        {Image == "" ? "" : <img src={Image} alt="" />}
        <h4>{Name}</h4>
        <p>{Role}</p>
        <p>{Email}</p>
    </div>
  )
}

export default TeamCard