import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import api from "../../services/Api";


function Service() {

  const [allProducts, setAllProducts] = useState([])
  const [availableProducts, setAvailableProducts] = useState([])

  async function loadProducts() {
    setAllProducts(await api.products.GetActives())
    setAvailableProducts(await api.products.GetAvaibles())
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (

    <div className="w-screen items-center justify-center flex flex-wrap">
      {
        availableProducts.map((product) => {
          return (
            <ProductCard key={product.id} {...product} />
          )
        })
      }
    </div>

  );
}

export default Service;