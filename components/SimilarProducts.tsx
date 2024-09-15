import ProductCard from "./ProductCard";

const SimilarProducts = () => {
    return ( 
        <div className="mt-16 px-8">
            <h1 className="text-[#686868] text-2xl font-bold">محصولات مشابه</h1>
            <div className="flex items-center justify-center gap-8 mt-10">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
     );
}
 
export default SimilarProducts;