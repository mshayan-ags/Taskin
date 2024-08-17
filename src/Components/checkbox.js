import React from 'react'

function Checkbox({ state, setState }) {
  return (
    <input type='checkbox' className='w-[24px] h-[24px] rounded-[10px] border-0 shadow-lg' style={{
      borderWidth: "0px !important",
      outline: "0px !important"
    }} checked={state} onChange={(e) => setState(!state)} />
  )
}

export default Checkbox
