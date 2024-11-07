import { Minus, Plus, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



export const ProductsCards: React.FC = () => {


    const products = [
        {
            id: 1,
            name: 'Michelin',
            info: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
            price: 300,
            image: '/images/wheel.png'
        },
        {
            id: 2,
            name: 'Michelin',
            info: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
            price: 300,
            image: '/images/wheel.png'
        },
        {
            id: 3,
            name: 'Michelin',
            info: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
            price: 300,
            image: '/images/wheel.png'
        },
        {
            id: 4,
            name: 'Michelin',
            info: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
            price: 300,
            image: '/images/wheel.png'
        },
        {
            id: 5,
            name: 'Michelin',
            info: 'Шина летняя "Primacy 3 GRNX 205/55R16 91V"',
            price: 300,
            image: '/images/wheel.png'
        },
    ]

    return (
        <>

            <div className='flex flex-wrap  max-w-[1059px] w-full gap-[42px]'>
                {products.map((item) => (
                    <div key={item.id}>
                        <div className='pl-[30px] pt-[30px] pb-[27px] max-w-[325px] w-full  border border-[#A6A6A6]'>
                            <Image src="/images/wheel.png" width={248} height={248} alt='name' />

                            <div className='mt-[21px] '>
                                <h3 className='text-[36px] font-bold'>Michelin</h3>
                                <p className='text-[#000] text-[17px] leading-normal'>Шина летняя Primacy 3 GRNX 205/55R16 91V</p>
                            </div>

                            <div className='flex gap-[35px] mt-[30px]'>
                                <span className='max-w-[80px] block h-[25px] text-[#fff] font-semibold bg-[#4BA9FF] text-center w-full'>990р.</span>
                                <div className='flex items-center pl-[11px] pr-[11px] min-h-[25px] justify-between max-w-[80px] w-full border border-[#00000033]'>
                                    <span className='cursor-pointer'><Minus size={18} color='#FF5454' strokeWidth={5} /></span>
                                    <span>0</span>
                                    <span className='cursor-pointer'><Plus size={18} color='#48D399' strokeWidth={5} /></span>
                                </div>

                                <ShoppingCart size={25} color='#4BA9FF' />
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </>

    )
}


