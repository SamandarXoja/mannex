import React from 'react'

export const Categories: React.FC = () => {
    return (
        <div className='mt-[20px] mb-[103px]'>
            <div className='min-h-[241px] max-w-[1470px] w-full pl-[15px] pr-[15px] mx-auto'>
                <div className='relative'>
                    <h3 className='absolute top-[120px] text-[64px] font-bold text-[#434242]'>Каталог</h3>
                    <h2 className='custom-bg text-[200px] font-bold absolute z-[-1]'>Каталог</h2>
                </div>
            </div>

            <div className='mt-[60px]'>
                <ul className='max-w-[1098px] w-full mx-auto flex '>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px] active-bg'>Шини</li>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px]'>Диски </li>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px]'>Аксессуары </li>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px]'>Каталог ТО</li>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px]'>Аккумуляторы </li>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px]'>Колпаки </li>
                    <li className='cursor-pointer text-[#434242] text-lg pl-[26px] pr-[26px] pt-[9px] pb-[9px]'>Болты, гайки</li>
                </ul>
            </div>
        </div>
    )
}


