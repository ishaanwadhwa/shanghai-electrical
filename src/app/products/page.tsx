import { Metadata } from "next";
import Products from "@/components/Products";

export const metadata: Metadata = {
  title: "Our Products - Shanghai Everest Iron and Steel",
  description: "Explore our range of high-performance silicon steel products.",
};

const ProductsPage = () => {
  return (
    <>
      <Products />
    </>
  );
};

export default ProductsPage; 