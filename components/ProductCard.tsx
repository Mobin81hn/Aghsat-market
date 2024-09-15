import Image from "next/image";

const ProductCard = () => {
    return ( 
        <div className="w-[280px] flex flex-col items-center rounded shadow-box">
            <div className="pt-8 pb-4 px-4">
                <Image src="/images/product-1.svg" alt="product" width={200} height={200}/>
            </div>
            <div>
                <div className="px-4">
                    <p className="text-[#686868] font-bold">ماشین لباسشویی ال جی مدل 721N ظرفیت 7 کیلوگرم</p>
                    <p className="text-[#001985] text-lg font-bold my-4 text-left">35,000,000 تومان</p>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-[#001985] bg-[#CEA24430] px-4 py-2">
                    <div className="flex items-center gap-2">
                        <Image src="/images/installments.svg" className="translate-y-[1px]" alt="shop" width={26} height={26}/>
                        <p>خرید قسطی</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/images/cash.svg" className="translate-y-[1px]" alt="shop" width={26} height={26}/>
                        <p>خرید نقدی</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ProductCard;