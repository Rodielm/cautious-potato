import { useParams } from "react-router";
import ProductDetail from "@/components/ProductDetail";
import { SkeletonCard } from "@/components/SkeletonCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { SkeletonDetail } from "@/components/SkeletonDetail";

const Product = () => {
  const url = (productId) =>
    `https://itx-frontend-test.onrender.com/api/product/${productId}`;
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const resp = await axios.get(url(productId));
        setProduct(resp.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return <>{loading ? <SkeletonDetail /> : <ProductDetail product={product} />}</>;
};

export default Product;
