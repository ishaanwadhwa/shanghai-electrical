import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productsData from "./productsData";

const Products = () => {
  return (
    <>
      <section id="products" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Products"
            paragraph="We offer a wide range of high-performance silicon steel products to meet the diverse needs of the modern electrical industry."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {productsData.map((product) => (
              <SingleProduct key={product.id} feature={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products; 