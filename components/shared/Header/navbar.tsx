"use client";

import { AlignJustify, ShoppingCart, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "../../../public/icons/logo.svg";


interface Props {
    className?: string,
}


export const Navbar: React.FC<Props> = ({ className }) => {

    const [toggleBtn, setToggleBtn] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [cartActive, setCarActive] = useState(false)

    function handleOpenNavbar() {
        setToggleBtn(!toggleBtn)
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Element | null

            if (
                dropdownRef.current &&
                target &&
                !dropdownRef.current.contains(event.target as Node) &&
                !target.closest(".toggle_btn")) {
                setToggleBtn(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])



    return (
        <nav className={`header ${className}`}>
            <div className="navbar">
                <div className="logo">
                    <Link href="/">
                        <Image src={logo} width={163} height={56} alt="Logo" priority />
                    </Link>
                </div>
                <ul className="links">
                    <li className="actives">
                        <Link href="#" className="text-[#FFFFFF] text-lg">
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#434242] text-lg">
                            Pro-Запрос
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#434242] text-lg">
                            Гараж
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#434242] text-lg">
                            Контакты
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-[#434242] text-lg">
                            Заказы
                        </Link>
                    </li>

                </ul>

                <div className="flex  items-center">
                    <button className="cart flex items-center gap-[16px] relative mr-[36px]">
                        <ShoppingCart color="#4BA9FF" />
                        {cartActive && <div className="bg-[#FF8181] absolute w-[15px] h-[15px] rounded-full top-0 left-[15px]"></div>}



                        <span className="text-[#434242] text-lg">10000р.</span>
                    </button>

                    <button
                        className="action_btn font-bold flex items-center justify-center  text-[16px] border border-[#4BA9FF] text-[#4BA9FF]  w-[83px] min-h-[40px]"
                    >
                        <UserRound size={25} color="#4BA9FF" />
                    </button>
                    <button

                        className="action_btn font-[400] w-[100px] min-h-[40px] bg-[#4BA9FF] text-[#FFFFFF]  text-[18px]"
                    >
                        Войти
                    </button>
                </div>

                <div className="toggle_btn" onClick={handleOpenNavbar}>
                    {toggleBtn ? <AlignJustify color="#37B5E8" /> : <X color="#37B5E8" />}
                </div>
            </div>

            <div
                ref={dropdownRef}
                className={`dropdown_menu ${toggleBtn ? "" : "open"}`}
            >
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        Our Events
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        Members
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        News
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        Partners
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        Certification
                    </Link>
                </li>
                <li>
                    <Link href="#" className="text-[#1E1E1E]">
                        Rating
                    </Link>
                </li>
                <div className="flex gap-[14px] mb-7 justify-center">
                    <button

                        className="action_btn app-btn items-center font-bold rounded-[10px] text-[16px] border border-[#074082] text-[#074082]   min-h-[48px]"
                    >
                        EN
                    </button>
                    <button

                        className="action_btn app-btn items-center font-bold  min-h-[48px] bg-[#37B5E8] text-[#FFFFFF] rounded-[10px] text-[16px]"
                    >
                        Log in
                    </button>
                </div>
            </div>
        </nav>
    )
}