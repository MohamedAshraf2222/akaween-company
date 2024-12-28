import React from 'react'

const HeaderText = ({header}) => {
  return (<>
  <div className='font-bold text-[40px] leading-none mb-8'>{header}</div>
    <div className="h-[4px] w-[130px] bg-primary"></div>
  </>
  )
}

export default HeaderText;