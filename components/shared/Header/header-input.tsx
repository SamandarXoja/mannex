
import { Button, Input } from '@/components/ui'
import React from 'react'

export const HeaderInput: React.FC = () => {
    return (
        <div className="mt-[72px] mb-[50px]">
            <form className="flex max-w-[677px] w-full mx-auto justify-center ">
                <Input placeholder="Поиск по артикулу" className="2xl:max-w-[524px] xl:max-w-[524px] lg:max-w-[524px] md:max-w-[400px] sm:max-w-[324px] xs:max-w-[206px] pl-[35px] h-[50px] border border-customBorder text-[#A6A6A6]" />
                <Button customClass="2xl:max-w-[153px] xl:max-w-[153px] lg:max-w-[153px] md:max-w-[153px] sm:max-w-[153px] xs:max-w-[80px] bg-[#4BA9FF] h-[50px] text-[#fff]  w-full hover:bg-[#4BA9FF] text-[20px]">Поиск</Button>
            </form>
        </div>

    )
}


