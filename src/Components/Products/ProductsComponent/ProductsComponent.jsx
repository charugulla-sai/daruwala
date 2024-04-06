import styles from './ProductsComponent.module.css';
import ProductCard from '../ProductsCard/ProductsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_SERVER}/api/products/`
        );
        setProducts([...products, ...response.data]);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);

  return (
    <div className={styles.products_component}>
      <div className={styles.products_section}>
        {products.map((product) => (
          <ProductCard
            key={product.image}
            productId={product._id}
            productImage={product.image}
            productTitle={product.title}
            productPrice={product.price}
            productSize={product.size}
            productType={product.type}
            inCartPage={false}
          />
        ))}
      </div>
    </div>
  );
}
