import OtherSellers from "@/components/OtherSellers";
import ProductInfo from "@/components/ProductInfo";
import ProductTabs from "@/components/ProductTabs";
import SimilarProducts from "@/components/SimilarProducts";

export default function Home() {
  return (
    <div className="min-h-screen px-8 pt-6 pb-12">
      <ProductInfo/>
      <OtherSellers/>
      <ProductTabs/>
      <SimilarProducts/>
    </div>
  );
}
