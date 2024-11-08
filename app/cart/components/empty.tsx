import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Empty: React.FC = () => {
    return (
        <div className='mt-[50px]'>
            <div className='max-w-[1470px] w-full pl-[15px] pr-[15px] mx-auto'>
                <h2 className='text-[#434242] text-[64px] font-bold'>Корзина </h2>
                <div className='flex flex-col items-center mt-[59px]'>
                    <Image src="/icons/empty.svg" width={400} height={300} alt="s" />
                    <p className='mt-[31px] max-w-[500px] w-full text-[#4BA9FF80] text-2xl text-center'>Пока что здесь ничего нет, перейдите в каталог и добавьте интересующий товар</p>
                    <Link href={"/"} className='flex justify-center items-center text-2xl font-bold text-[#fff] custom-cart min-h-[100px]  mt-[92px] mb-[100px] max-w-[470px] w-full'>Перейти в каталог</Link>
                </div>
            </div>
        </div>
    )
}