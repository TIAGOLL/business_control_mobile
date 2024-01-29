import axios from "axios";

const api = {
  products: {
    async GetActives() {
      const result = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_API_URL}/api/products/load/actives`
      );
      return result.data.products;
    },

    async GetAvaibles() {
      const result = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_API_URL}/api/products/load/avaibles`
      );
      return result.data.products;
    },

    async GetInTransit() {
      const result = await axios.get(
        `${import.meta.env.VITE_REACT_BASE_API_URL}/api/products/load/intransit`
      );
      return result.data.products;
    },
  },
};

export default api;
