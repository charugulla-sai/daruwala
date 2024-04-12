import styles from './ProductsComponent.module.css';
import ProductCard from '../ProductsCard/ProductsCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const getProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_SERVER}/api/products/${
            category !== 'new_arrival' ? `filter?category=${category}` : ''
          }`,
          { signal: controller.signal }
        );
        setProducts([...products, ...response.data]);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();

    return () => {
      return controller.abort();
    };
  }, []);

  return (
    <div className={styles.products_component}>
      <div className={styles.products_section}>
        {products.map((product) => (
          <ProductCard
            key={product.image}
            productId={product._id}
            productImage={product.imageUrl}
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
