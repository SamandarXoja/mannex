import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Footer: React.FC = () => {
    return (
        <footer className='relative '>
            <div className='absolute z-[-1] top-[-350px]'>
                <Image width={457} height={457} src="/images/disk.png" alt='disk' />
            </div>

            <div className='bg-[#F5F5F5] min-h-[500px] pt-[49px]'>
                <div className='max-w-[1470px] mx-auto w-full pl-[15px] pr-[15px] flex justify-between'>
                    <div>
                        <Image src="/icons/footer-logo.svg" width={255} height={87} alt='icon-footer' />
                        <p className='mt-[49px] text-[#000] text-lg'>2020 © Mannex Все права защищены</p>
                        <p className='mt-[18px] text-[#000] text-lg'>Публичная оферта</p>
                    </div>

                    <ul className='flex flex-col gap-[15px] mt-[33px]'>
                        <li className='mb-[34px] text-2xl font-semibold'>Основное</li>
                        <li className='text-[#434242] text-lg'>Главная </li>
                        <li className='text-[#434242] text-lg'>О компании</li>
                        <li className='text-[#434242] text-lg'> Pro-Запрос</li>
                        <li className='text-[#434242] text-lg'>Гараж </li>
                        <li className='text-[#434242] text-lg'>Контакты  </li>
                        <li className='text-[#434242] text-lg'>Заказы  </li>
                    </ul>
                    <ul className='flex flex-col gap-[15px] mt-[33px]'>
                        <li className='mb-[34px] text-2xl font-semibold'>Аккаунт</li>
                        <li className='text-[#434242] text-lg'>Корзина  </li>
                        <li className='text-[#434242] text-lg'>Баланс </li>
                        <li className='text-[#434242] text-lg'>Мои заказы</li>
                        <li className='text-[#434242] text-lg'>Запрос продавцу  </li>
                        <li className='text-[#434242] text-lg'>Сравнение  </li>
                    </ul>
                    <ul className='flex flex-col gap-[15px] mt-[33px]'>
                        <li className='mb-[34px] text-2xl font-semibold'>Контакты</li>
                        <li className='text-[#434242] text-lg flex items-center gap-[19px]'><Mail color='#000' />  Главная </li>
                        <li className='text-[#434242] text-lg flex gap-[19px]'><Phone />
                            <div>
                                <p>8 900 203 8083 </p>
                                <p>8 912 294 5345</p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}


