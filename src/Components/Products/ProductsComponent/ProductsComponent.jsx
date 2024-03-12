import styles from './ProductsComponent.module.css';
import ProductCard from '../ProductsCard/ProductsCard';

const products = [
  {
    image:
      'https://admin.livingliquidz.com/ImagesUpload/RAMPURINDIANSINGLEMALT20231522022.jpg',
    title: 'Rampur indian single malt',
    type: 'single malt whiskey',
    size: 750,
    price: 6499.41,
  },
  {
    image:
      'https://admin.livingliquidz.com/ImagesUpload/ROCKPAPERRUMZESTYLEMON20234333190.jpg',
    title: 'Rock Paper Rum Zesty Lemon',
    type: 'White Rum',
    size: 750,
    price: 1500.0,
  },
  {
    image:
      'https://admin.livingliquidz.com/img/MD/CRAZY-COCK-DHUA-THE-PEATED-ONE-2969.jpg',
    title: 'Crazy cock dhua-the peated one',
    type: 'Whisky',
    size: 750,
    price: 12500.39,
  },
  {
    image:
      'https://admin.livingliquidz.com/img/MD/DYAVOL-BLENDED-MALT-SCOTCH-2675.jpg',
    title: "D'Yavol blended malt scotch",
    type: 'Blended Scotch Malt whiskey',
    size: 750,
    price: 9899.92,
  },
  {
    image:
      'https://admin.livingliquidz.com/ImagesUpload/DONJULIOANEJO20240917814.jpg',
    title: 'Don julio anejo',
    type: 'Tequila',
    size: 750,
    price: 14599.39,
  },
  {
    image:
      'https://admin.livingliquidz.com/ImagesUpload/BARISTABLACK20242010500.jpg',
    title: 'Barista Black',
    type: 'Red wine',
    size: 750,
    price: 5899.41,
  },
];

export default function ProductsComponent() {
  return (
    <div className={styles.products_component}>
      <div className={styles.products_section}>
        {products.map((product) => (
          <ProductCard
            key={product.image}
            productImage={product.image}
            productTitle={product.title}
            productPrice={product.price}
            productSize={product.size}
            productType={product.type}
          />
        ))}
      </div>
    </div>
  );
}
