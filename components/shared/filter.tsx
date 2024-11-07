import React from 'react'
import { Button, Select } from '../ui'
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { ChevronDownIcon } from 'lucide-react'

export const Filter: React.FC = () => {
    return (
        <div>
            <div className='max-w-[345px] w-full bg-[#fff] shadow-2xl  pl-[40px] pr-[40px] pt-[25px] pb-[25px]'>
                <div>
                    <span className='block mb-[7.5px] text-[#434242] font-semibold text-2xl'> Тип</span>
                    <Select>
                        <SelectTrigger className="w-[265px] min-h-[50px] border border-[#43424233]">
                            <span className="custom-placeholder text-[#434242] text-lg">
                                <SelectValue placeholder="Летние" />
                            </span>
                        </SelectTrigger>
                        <SelectContent className='bg-[#fff]'>
                            <SelectGroup>
                                <SelectLabel className='text-[#434242] text-lg'>Летние</SelectLabel>
                                <SelectItem value="apple" className='text-[#434242] text-lg'>Apple</SelectItem>
                                <SelectItem value="banana" className='text-[#434242] text-lg'>Banana</SelectItem>
                                <SelectItem value="blueberry" className='text-[#434242] text-lg'>Blueberry</SelectItem>
                                <SelectItem value="grapes" className='text-[#434242] text-lg'>Grapes</SelectItem>
                                <SelectItem value="pineapple" className='text-[#434242] text-lg'>Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className='mt-[20px]'>
                    <span className='block mb-[7.5px] text-[#434242] font-semibold text-2xl'> Производитель</span>
                    <Select>
                        <SelectTrigger className="w-[265px] min-h-[50px] border border-[#43424233]">
                            <span className="custom-placeholder text-[#434242] text-lg">
                                <SelectValue placeholder="Выбраны все" />
                            </span>
                        </SelectTrigger>
                        <SelectContent className='bg-[#fff]'>
                            <SelectGroup>
                                <SelectLabel className='text-[#434242] text-lg'>Летние</SelectLabel>
                                <SelectItem value="apple" className='text-[#434242] text-lg'>Apple</SelectItem>
                                <SelectItem value="banana" className='text-[#434242] text-lg'>Banana</SelectItem>
                                <SelectItem value="blueberry" className='text-[#434242] text-lg'>Blueberry</SelectItem>
                                <SelectItem value="grapes" className='text-[#434242] text-lg'>Grapes</SelectItem>
                                <SelectItem value="pineapple" className='text-[#434242] text-lg'>Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-[20px]'>
                    <span className='block mb-[7.5px] text-[#434242] font-semibold text-2xl'> Размер</span>
                    <Select>
                        <SelectTrigger className="w-[265px] min-h-[50px] border border-[#43424233]">
                            <span className="custom-placeholder text-[#434242] text-lg">
                                <SelectValue placeholder="Выбраны все" />
                            </span>
                        </SelectTrigger>
                        <SelectContent className='bg-[#fff]'>
                            <SelectGroup>
                                <SelectLabel className='text-[#434242] text-lg'>Летние</SelectLabel>
                                <SelectItem value="apple" className='text-[#434242] text-lg'>Apple</SelectItem>
                                <SelectItem value="banana" className='text-[#434242] text-lg'>Banana</SelectItem>
                                <SelectItem value="blueberry" className='text-[#434242] text-lg'>Blueberry</SelectItem>
                                <SelectItem value="grapes" className='text-[#434242] text-lg'>Grapes</SelectItem>
                                <SelectItem value="pineapple" className='text-[#434242] text-lg'>Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='mt-[20px]'>
                    <span className='block mb-[7.5px] text-[#434242] font-semibold text-2xl'> Диаметр</span>
                    <Select>
                        <SelectTrigger className="w-[265px] min-h-[50px] border border-[#43424233]">
                            <span className="custom-placeholder text-[#434242] text-lg">
                                <SelectValue placeholder="Выбраны все" />
                            </span>
                        </SelectTrigger>
                        <SelectContent className='bg-[#fff]'>
                            <SelectGroup>
                                <SelectLabel className='text-[#434242] text-lg'>Летние</SelectLabel>
                                <SelectItem value="apple" className='text-[#434242] text-lg'>Apple</SelectItem>
                                <SelectItem value="banana" className='text-[#434242] text-lg'>Banana</SelectItem>
                                <SelectItem value="blueberry" className='text-[#434242] text-lg'>Blueberry</SelectItem>
                                <SelectItem value="grapes" className='text-[#434242] text-lg'>Grapes</SelectItem>
                                <SelectItem value="pineapple" className='text-[#434242] text-lg'>Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button customClass='' className='max-w-[265px] w-full min-h-[63px] mt-[63px] text-xl text-[#fff] bg-[#4BA9FF] hover:bg-[#4BA9FF]'>Подобрать</Button>
            </div>
        </div>
    )
}