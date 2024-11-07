import Image from 'next/image'
import React from 'react'
import { Button } from '../ui'


export const About: React.FC = () => {
    return (
        <>
            <div className="max-w-[1470px] w-full pl-[15px] pr-[15px] mx-auto ">
                <div className='min-h-[241px]'>
                    <div className='relative'>
                        <h3 className='absolute top-[120px] text-[64px] font-bold text-[#434242]'>О компании</h3>
                        <h2 className='custom-bg text-[200px] font-bold absolute z-[-1]'>О компании</h2>
                    </div>
                </div>

            </div>
            <div className='mt-2 max-w-[1700px] flex mx-auto gap-[23px] flex-wrap '>
                <div className='max-w-[800px] w-full mt-[20px] ml-[130px]'>
                    <p className='text-xl text-left'>Компания Mannex: продажа запчастей и аксессуаров высокого качества</p>
                    <p className='mb-[20px] mt-[20px] text-xl text-left'>Компания Mannex начала свою деятельность недавно, но уже успела заслужить хорошую репутацию среди покупателей. Количество положительных отзывов в адрес нашей компании от благодарных клиентов растет с каждым днем. В нашем интернет-магазине вы можете купить необходимые запчасти и аксессуары для своего автомобиля по выгодным ценам.</p>
                    <p className='mb-[20px] text-xl text-left'>Большой ассортимент</p>
                    <p className='text-[#000] text-xl text-left'>В каталоге нашего магазина вы найдете автозапчасти для Lexus, Mazda или иных автомобилей. Среди широкого ассортимента</p>

                    <Button customClass='' className='text-[24px] font-bold border border-[#0000004D] shadow-none mt-[93px] max-w-[470px] w-full min-h-[99px]'>
                        Читать дальше
                    </Button>

                </div>
                <div className='absolute  right-0'>
                    <Image src="/images/about.png" width={856} height={593} alt="sad" />
                </div>
            </div>
        </>
    )
}


