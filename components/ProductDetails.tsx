const ProductDetails = () => {
    return ( 
        <ul className="flex flex-col gap-4 px-8 py-6 text-[#686868] text-lg">
            <li className="flex items-center gap-10">
                <p className="w-60">عملکرد ماشین لباسشویی</p>
                <p className="font-bold">اتوماتیک</p>
            </li>
            <li className="flex items-center gap-10">
                <p className="w-60">امکانات</p>
                <p className="font-bold">نمایشگر</p>
            </li>
            <li className="flex items-center gap-10">
                <p className="w-60">دستگاه نمایش وضعیت</p>
                <p className="font-bold">صفحه نمایش</p>
            </li>
            <li className="flex items-center gap-10">
                <p className="w-60">نوع مخزن</p>
                <p className="font-bold">درب از جلو</p>
            </li>
            <li className="flex items-center gap-10">
                <p className="w-60">نوع موتور</p>
                <p className="font-bold">دایرکت درایو {"(Direct Drive)"}</p>
            </li>
        </ul>
     );
}
 
export default ProductDetails;