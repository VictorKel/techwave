import { GetServerSideProps } from 'next';
import ProductDetails from '../../components/ProductDetails';
import RelatedProduct from '../../components/RelatedProduct';
import Specifications from '../../components/Specifications';
import Newsletter from '../../components/Newsletter';
import { Product } from '../../types';
import router from 'next/router';

interface Props {
  product: Product;
}

export default function ProductPage({ product }: Props) {

  return (
    <>
      <ProductDetails product={product} />
      <Specifications product={product} />
      <RelatedProduct products={mockRelatedProducts}  /> 
      <Newsletter />
    </>
  );
}

// ✅ Mock related products (replace with real data or fetch it)
const mockRelatedProducts = [
  {
    id: 'rel-1',
    name: 'Get proof of delivery with Hikvision',
    price: 500000,
    vat:    5000,
    image: '/images/cam1.png',
  },
  {
    id: 'rel-2',
    name: 'Compact PoE Switches 10/100 or 10/100/1000',
    price: 5000000,
    vat:    5000,
    image: '/images/fuse.png',
  },
  {
    id: 'rel-3',
    name: 'Discover Hikvision\'s Latest ColorVu Technology',
    price: 500000,
    vat:    5000,
    image: '/images/cam2.png',
  },
];

// ✅ Proper typing for getServerSideProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.params as { productId: string };

  const product: Product = 
  {
    id: productId,
    name: 'Mixed Horizontal PDU 4 x C13 + 5 x C19',
    part: 'E700002',
    brand: 'PowerData',
    price: 500000,
    vat: 5000,
    images: ['/images/pdu1.png', '/images/connect-wire.png', '/images/wire.png'],
    availability: 'In stock',
    features: [
      'IEC PDUs with C13 & C19 Mixed Sockets.',
      '1U 19" Horizontally Rack Mounted.',
      'Quality UK manufactured.',
      'Punched and folded steel units with textured black powder coat finish. Bespoke colours available.',
      'All come with 3m lead as standard. Bespoke lengths available.',
      'Genuine Integra Brand power distribution units.',
    ],
    specifications: [
      'Steel Chassis Construction',
      'Black RAL 9005 Fine Texture Powder Coat Finish',
      'M5 External Earth Stud c/w Anti Shake Washer & Nut',
      'Red Illuminated 16A Double Pole Switch c/w Switch Cover (Where Applicable)',
      'Operating Voltage 250V 50Hz AC max',
      'EN IEC 62368 1:2020+A11:2020',
    ],
  };

  return { props: { product } };
};
