import React from 'react'

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

const GridHeader = () => {

  return (

    <div className="flex--cont--def grid-headers--container">
      <div className="grid-headers--container--child--def">
        Name <IoMdArrowDropdown />
      </div>
      <div className="grid-headers--container--child--def">
        Order Date <IoMdArrowDropup />
      </div>
      <div className="grid-headers--container--child--def">
        Unit
      </div>
      <div className="grid-headers--container--child--def">
        discount
      </div>
      <div className="grid-headers--container--child--def">
        in stock
      </div>
      <div className="grid-headers--container--child--def">
        edit-delete
      </div>
    </div>

  )
}

export default GridHeader