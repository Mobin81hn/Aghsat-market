"use client"
import Image from "next/image";
import { useState } from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";

const ProductInfo = () => {
    const [choosedSize, setChoosedSize] = useState<string>("");

    return ( 
        <section>
            <div className="flex justify-between">
                <div className="flex items-start gap-8">
                    <Image src="/images/product.svg" alt="product" width={320} height={320}/>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[#686868] text-xl font-bold mt-2">ماشین لباسشویی ال جی مدل WM-721N ظرفیت 7 کیلوگرم</h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4 text-[#686868] font-bold">
                                <div className="flex items-center gap-2">
                                    <Image src="/images/star.svg" alt="star" width={16} height={16}/>
                                    <span>4</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image src="/images/message.svg" alt="star" width={16} height={16}/>
                                    <span>10</span>
                                </div>
                            </div>
                            <p className="text-[#CEA244] text-xs font-bold">دسته بندی: لوازم خانگی</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-[#686868] font-bold">انتخاب رنگ</p>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border bg-black"/>
                                <div className="w-5 h-5 border bg-white"/>
                                <div className="w-5 h-5 border bg-[#979797]"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-[#686868] font-bold">انتخاب سایز</p>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={choosedSize === "s"} onClick={() => setChoosedSize("s")} id="size-s" name="size" className="w-4 h-4 translate-y-[1px]"/>
                                    <label htmlFor="size-s" className="text-sm font-bold text-[#686868]">S</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={choosedSize === "m"} onClick={() => setChoosedSize("m")} id="size-m" name="size" className="w-4 h-4 translate-y-[1px]"/>
                                    <label htmlFor="size-m" className="text-sm font-bold text-[#686868]">M</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={choosedSize === "l"} onClick={() => setChoosedSize("l")} id="size-l" name="size" className="w-4 h-4 translate-y-[1px]"/>
                                    <label htmlFor="size-l" className="text-sm font-bold text-[#686868]">L</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={choosedSize === "xl"} onClick={() => setChoosedSize("xl")} id="size-xl" name="size" className="w-4 h-4 translate-y-[1px]"/>
                                    <label htmlFor="size-xl" className="text-sm font-bold text-[#686868]">XL</label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" checked={choosedSize === "xxl"} onClick={() => setChoosedSize("xxl")} id="size-xxl" name="size" className="w-4 h-4 translate-y-[1px]"/>
                                    <label htmlFor="size-xxl" className="text-sm font-bold text-[#686868]">XXL</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddToCart/>
            </div>
            <div className="flex items-center gap-16 mt-6">
                <div className="flex items-center gap-2">
                    <Image src="/images/product-1.svg" alt="product" width={76} height={76}/>
                    <Image src="/images/product-2.svg" alt="product" width={76} height={76}/>
                    <Image src="/images/product-1.svg" alt="product" width={76} height={76}/>
                    <Link href={"/"} className="flex items-center gap-1 text-[#686868] text-sm font-bold mr-2">
                        <span>همه تصاویر</span>
                        <Image src="/images/chevron-left.svg" className="translate-y-1" alt="arrow" width={14} height={14}/>
                    </Link>
                </div>
                <div className="flex gap-16">
                    <div className="flex items-center gap-4">
                        <Image src="/images/free-shippment.svg" className="translate-y-1" alt="arrow" width={60} height={60}/>
                        <p className="text-[#686868] font-bold text-sm">ارسال رایگان و مرجوعی</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/images/safe-payment.svg" className="translate-y-1" alt="arrow" width={60} height={60}/>
                        <p className="text-[#686868] font-bold text-sm">پرداخت امن</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/images/guarantee.svg" className="translate-y-1" alt="arrow" width={60} height={60}/>
                        <p className="text-[#686868] font-bold text-sm">تضمین بازگشت پول</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/images/support.svg" className="translate-y-1" alt="arrow" width={60} height={60}/>
                        <p className="text-[#686868] font-bold text-sm">پشتیبانی</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ProductInfo;