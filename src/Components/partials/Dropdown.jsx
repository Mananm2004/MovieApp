import React from 'react'

function Dropdown({title,options,func}) {
  return (
    <div className='select'>
            <select onChange={func} defaultValue="0" name="format" id="format">
              <option value="0">{title}</option>
              {options.map((o, i)=><option key={o} value={o}>{o.toUpperCase()}</option>)}
              </select>
              </div>
  )
}

export default Dropdown