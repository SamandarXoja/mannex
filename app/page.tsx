import { About, Categories, Filter, Header, HeaderInput, Paginations, ProductsCards } from "@/components/shared";



export default function Home() {
  return (
    <>

      <HeaderInput />
      <Header />
      <About />
      <Categories />
      <div className="max-w-[1470px] pl-[15px] pr-[15px] w-full mx-auto flex gap-[36px]">
        <Filter />
        <ProductsCards />
      </div>
      <div className="mt-[88px] ml-[300px]">
        <Paginations />
      </div>




    </>
  );
}