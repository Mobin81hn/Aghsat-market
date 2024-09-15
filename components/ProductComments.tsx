import Image from "next/image";
import ProductComment from "./ProductComment";

const ProductComments = () => {
  return (
    <div className="bg-[#F9F3E7] text-[#686868] rounded px-10 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-bold">
          <h1 className="text-xl ml-4">امتیاز کاربران به این محصول</h1>
          <Image
            src="/images/star-fill.svg"
            className="translate-y-[1px]"
            alt="shop"
            width={28}
            height={28}
          />
          <span className="text-2xl mx-2">4/5</span>
          <p className="text-sm">از مجموع 4 نظر</p>
        </div>
        <button className="w-56 h-11 text-white bg-[#CEA244] rounded text-lg font-bold">دیدگاه خود را ثبت کنید</button>
      </div>
      <div className="bg-white px-8 pt-6 pb-14 mt-6 rounded">
        <h2 className="text-lg font-bold mb-6">مشاهده  تصاویر ارسالی کاربران</h2>
        <div className="flex items-center gap-4">
            <Image src="/images/product-1.svg" alt="product" width={80} height={80}/>
            <Image src="/images/product-1.svg" alt="product" width={80} height={80}/>
            <Image src="/images/product-1.svg" alt="product" width={80} height={80}/>
        </div>
        <div className="flex flex-col gap-14 mt-10">
            <ProductComment/>
            <ProductComment/>
            <ProductComment/>
        </div>
      </div>
    </div>
  );
};

export default ProductComments;
