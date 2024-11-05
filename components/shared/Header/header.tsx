"use client";

import { Navbar } from "./navbar";
import { Button, Input } from "@/components/ui";


interface Props {
  className?: string,
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Navbar />

      <div className="mt-[72px]">
        <form className="flex max-w-[677px] w-full mx-auto">
          <Input placeholder="Поиск по артикулу" className="pl-[35px] h-[50px] border border-customBorder text-[#A6A6A6]" />
          <Button customClass="bg-[#4BA9FF] h-[50px] text-[#fff] max-w-[153px] w-full hover:bg-[#4BA9FF] text-[20px]">Поиск</Button>
        </form>
      </div>

    </header>
  )
}