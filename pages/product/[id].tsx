import { useRouter } from 'next/router';
import { products } from '../../data/products';
import ProductDetails from '../../components/ProductDetails';
import Specifications from '../../components/Specifications';
import RelatedProduct from '../../components/RelatedProduct';
import Newsletter from '../../components/Newsletter';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  const product = products.find((p) => p.id === String(id));
  if (!product) return <div className="p-6">Product not found</div>;

  const relatedProduct = products.filter(
    (p) => p.brand === product.brand && p.id !== product.id
  );

  return (
    <div>
      <ProductDetails product={product} />
      <Specifications product={product} />
      <RelatedProduct products={products} />
      <Newsletter />
    </div>
  );
};