import React from 'react'

import { FaPlus } from "react-icons/fa"
import { FiFilter } from "react-icons/fi"

const UserAction = () => {

  return (
    <div className="flex--cont--def user-actions--container">
      <div className="user-actions--child user-actions--child--a">
        User(256)
      </div>
      <div className="user-actions--child user-actions--child--b">
        <FaPlus size={22} />
      </div>
      <div className="user-actions--child user-actions--child--c">
        <FiFilter size={22} />
      </div>
      <div className="user-actions--child user-actions--child--d">
        <input type='text' name='search--filter' id='search--filter' placeholder='Search here' />
      </div>
    </div>
  )
}

export default UserAction