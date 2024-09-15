import Image from "next/image";

const OtherSellers = () => {
    return ( 
        <section>
            <header className="bg-[#001985] text-white px-10 py-[6px] mt-16 text-xl font-bold rounded">فروشندگان دیگر این محصول</header>
            <ul className="flex flex-col gap-4 mt-12">
                <li className="flex justify-between gap-2">
                    <div className="w-full flex items-center justify-between rounded px-4 py-2 bg-[#00198514]">
                        <div className="flex items-center gap-2">
                            <Image src="/images/circle.svg" className="translate-y-[2px]" alt="shop" width={8} height={8}/>
                            <div className="flex items-center gap-2 text-[#686868] font-bold">
                                <span>رشت سنتر</span>
                                <span>|</span>
                                <Image src="/images/star-fill.svg" alt="shop" width={12} height={12}/>
                            </div>
                        </div>
                        <p className="text-[#001985] text-xl font-bold">34.000.000 تومان</p>
                    </div>
                    <button className="min-w-40 py-2 text-white bg-[#001985] rounded">افزودن به سبد خرید</button>
                </li>
                <li className="flex justify-between gap-2">
                    <div className="w-full flex items-center justify-between rounded px-4 py-2 bg-white">
                        <div className="flex items-center gap-2">
                            <Image src="/images/circle.svg" className="translate-y-[2px]" alt="shop" width={8} height={8}/>
                            <div className="flex items-center gap-2 text-[#686868] font-bold">
                                <span>ایران سنتر</span>
                                <span>|</span>
                                <Image src="/images/star-fill.svg" alt="shop" width={12} height={12}/>
                            </div>
                        </div>
                        <p className="text-[#001985] text-xl font-bold">34.000.000 تومان</p>
                    </div>
                    <button className="min-w-40 py-2 text-white bg-[#001985] rounded">افزودن به سبد خرید</button>
                </li>
                <li className="flex justify-between gap-2">
                    <div className="w-full flex items-center justify-between rounded px-4 py-2 bg-[#00198514]">
                        <div className="flex items-center gap-2">
                            <Image src="/images/circle.svg" className="translate-y-[2px]" alt="shop" width={8} height={8}/>
                            <div className="flex items-center gap-2 text-[#686868] font-bold">
                                <span>ایران سنتر</span>
                                <span>|</span>
                                <Image src="/images/star-fill.svg" alt="shop" width={12} height={12}/>
                            </div>
                        </div>
                        <p className="text-[#001985] text-xl font-bold">34.000.000 تومان</p>
                    </div>
                    <button className="min-w-40 py-2 text-white bg-[#001985] rounded">افزودن به سبد خرید</button>
                </li>
            </ul>
        </section>
     );
}
 
export default OtherSellers;