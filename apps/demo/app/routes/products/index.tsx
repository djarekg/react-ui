import ErrorMessage from '@/components/error/error-message.js';
import ProductList from '@/components/product-list/product-list.js';
import { GetProducts, type Product } from '@/types/graphql.js';
import { useSuspenseQuery } from '@apollo/client/react/hooks';

export default function Products() {
  'use memo';

  const { data, error } = useSuspenseQuery(GetProducts);

  if (error) return <ErrorMessage message={error.message} />;

  return <ProductList products={data.products as Product[]} />;
}
