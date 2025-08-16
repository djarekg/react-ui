import ProductTypeSelect from '@/components/product-type-select/product-type-select.js';
import Search from '@/components/search/search.js';
import { isNullOrEmpty } from '@/core/utils/string.js';
import { type Product } from '@/types/graphql.js';
import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import ProductListItem from './product-list-item.js';
import styles from './product-list.module.css';

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products = [] }: ProductListProps) {
  'use memo';

  const [filterText, setFilterText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);

  const handleProductTypeChange = (value: string[]) => setSelectedProductTypes(value);
  const handleSearch = (value: string) => setFilterText(value);

  // Filter products by the filter controls' values.
  const filterProducts = (array: Product[], types: string[], filter: string) => {
    const filteredByTypes = types.length
      ? array.filter(({ productTypeId }) => types.includes(productTypeId))
      : array;

    const filterRegex = new RegExp(filter, 'i');

    const filtered = isNullOrEmpty(filter)
      ? filteredByTypes
      : filteredByTypes.filter(
          ({ name, description }) => filterRegex.test(name) || filterRegex.test(description)
        );

    return filtered;
  };

  // If any of the filter controls change, then run the filter function.
  useEffect(() => {
    const filtered = filterProducts(products, selectedProductTypes, filterText);
    setFilteredProducts(filtered);
  }, [selectedProductTypes, filterText]);

  return (
    <>
      <header className={styles.header}>
        <section className={styles.toolbar}>
          <ProductTypeSelect onChange={handleProductTypeChange} />
          <Search
            minLength={0}
            placeholder="Type to filter..."
            width={220}
            onSearch={handleSearch}
          />
        </section>
      </header>

      {filteredProducts.length ? (
        <List className={styles.container}>
          {filteredProducts.map(product => (
            <ProductListItem product={product} />
          ))}
        </List>
      ) : (
        <div className={styles.noRecords}>
          <div className={styles.noRecordsTip}>Tip: use filter to query products</div>
        </div>
      )}
    </>
  );
}
