"use client"
import React, { useState } from 'react'
import { Pagination } from '../ui'
import { PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'


export const Paginations: React.FC = () => {
  const [activePage, setActivePage] = useState(2);

  const handlePageClick = (page: number, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setActivePage(page)
  }


  return (
    <div className='mb-[50px]'>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {[1, 2, 3].map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(event) => handlePageClick(page, event)}
                className={`font-bold text-2xl ${activePage === page ? "bg-[#4BA9FF] hover:bg-[#4BA9FF] hover:text-[#fff] text-white rounded-md px-2" : "text-[#000]"
                  }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}


