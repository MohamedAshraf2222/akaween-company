import React from 'react'

const SwiperTitle = ({number,title,description}) => {
  return (<>
    <div className="font-bold leading-none text-[80px] text-white header-number-stroke text-right w-full pr-5 drop-shadow-lg lg:pr-36 sm:pr-10 sm:text-[96px]">
    +{number}
  </div>
  <div className="w-full">
    <div className="font-bold leading-none text-[26px] text-white  text-right w-full pr-5 drop-shadow-lg lg:pr-36 sm:pr-10 sm:text-[32px]">
      {title} , {description}
    </div>
  </div>
  </>
  )
}

export default SwiperTitle