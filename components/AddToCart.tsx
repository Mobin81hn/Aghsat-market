import Image from "next/image";

const AddToCart = () => {
    return ( 
        <div className="flex flex-col gap-6 text-[#001985] bg-[#0019851A] w-[300px] h-[270px] px-5 py-6 rounded">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <Image src="/images/shop.svg" alt="shop" width={28} height={28}/>
                    <p className="text-xs font-bold">فروشنده این محصول</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                        <Image src="/images/circle.svg" className="translate-y-[2px]" alt="shop" width={8} height={8}/>
                        <p className="text-sm font-bold">ستاد مرکزی</p>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1">
                        <Image src="/images/star-fill.svg" className="translate-y-[1px]" alt="shop" width={12} height={12}/>
                        <p className="text-sm font-bold">3</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-[26px] font-bold">35,200,000 تومان</p>
                <button className="w-full h-11 flex justify-center items-center text-white bg-[#001985] rounded">افزودن به سبد خرید</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/images/installments.svg" className="translate-y-[1px]" alt="shop" width={26} height={26}/>
                    <p className="text-sm font-bold">خرید قسطی</p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/images/cash.svg" className="translate-y-[1px]" alt="shop" width={26} height={26}/>
                    <p className="text-sm font-bold">خرید نقدی</p>
                </div>
            </div>
        </div>
     );
}
 
export default AddToCart;