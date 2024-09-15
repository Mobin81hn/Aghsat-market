"use client"
import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductComments from "./ProductComments";

const ProductTabs = () => {
    const [currentTab, setCurrentTab] = useState("productDetails");

    return ( 
        <div className="flex flex-col gap-1 mt-16">
            <div className="flex gap-2">
                <button className={`px-4 py-2 rounded text-xl font-bold text-[#686868] ${currentTab === "productDetails" ? "bg-[#F9F3E7]" : "bg-white"}`} onClick={() => setCurrentTab("productDetails")}>مشخصات فنی محصول</button>
                <button className={`px-4 py-2 rounded text-xl font-bold text-[#686868] ${currentTab === "productComments" ? "bg-[#F9F3E7]" : "bg-white"}`} onClick={() => setCurrentTab("productComments")}>نظرات</button>
                <button className={`px-4 py-2 rounded text-xl font-bold text-[#686868] ${currentTab === "productsCompare" ? "bg-[#F9F3E7]" : "bg-white"}`}>مقایسه با محصول دیگر</button>
            </div>
            <div className="bg-[#F9F3E7] rounded">
                {currentTab === "productDetails" && <ProductDetails/>}
                {currentTab === "productComments" && <ProductComments/>}
            </div>
        </div>
     );
}
 
export default ProductTabs;