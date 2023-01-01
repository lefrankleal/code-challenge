import axios, { AxiosResponse } from 'axios';
import { API_URL, API_V } from '@env';

type ProductProps = {
  createdAt: Date;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
};

axios.interceptors.request.use(config => {
  config.baseURL = `${API_URL}/${API_V}`;
  return config;
});

const getProductsList = async (): Promise<
  AxiosResponse<Array<ProductProps>>
> => {
  return await axios.get('/products');
};

export type { ProductProps };

export { getProductsList };
