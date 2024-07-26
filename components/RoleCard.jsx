import React from 'react'

export const RoleCard = ({role, number}) => {
  return (
    <>
      <div className='h-[90px] flex flex-col w-[33.3%] justify-center bg-white rounded-lg px-[20px]'>
        <p className='text-[13px] font-k2d text-[#8F9BB3]'>{role}</p>
        <h1 className='text-[25px] text-[#317ACC]'>{number}</h1>
      </div>
    </>
  )
}

export const DashboardCard = ({icon, title, stats, contCol, icnCol, titleCol, statsCol}) => {
  return (
    <>
      <div className={`w-full h-[96px] flex items-center gap-[8px] rounded-md px-2 md:w-[224px] ${contCol}`}>
        <div className={`w-[51px] h-[51px] text-[24px] rounded-full flex justify-center items-center ${icnCol}`}>{icon}</div>
        <div className='flex flex-col justify-center w-[70%]'>
          <p className={`text-[15px] font-k2d ${titleCol}`}>{title}</p>
          <p className={`text-[10px] ${statsCol}`}>{stats}</p>
       </div>
      </div>
    </>
  )
}