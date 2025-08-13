import CardTemplate from '@/components/card-template/card-template.js';
import { GetProductTypes, type Product } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import Search from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { lazy, useEffect, useState, type ChangeEvent } from 'react';
import styles from './product-list.module.css';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products = [] }: ProductListProps) {
  const { data: { productTypes = [] } = {}, error } = useQuery(GetProductTypes);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const renderItem = (product: Product) => {
    return (
      <ListItem key={product.id}>
        <CardTemplate item={product} />
      </ListItem>
    );
  };

  const renderCheckbox = ({ id, name }: { id: string; name: string }) => {
    return (
      <MenuItem
        key={id}
        value={id}>
        <Checkbox />
        <ListItemText primary={name} />
      </MenuItem>
    );
  };

  const handleChange = ({ target: { value } }: SelectChangeEvent<string | string[]>) => {
    setSelectedProductTypes(Array.isArray(value) ? value : value.split(','));
  };

  const handleRenderValue = (selected: string[]) => {
    return productTypes
      .filter(({ id }) => selected.includes(id))
      .map(({ name }) => name)
      .join('');
  };

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {};

  useEffect(() => {
    setFilteredProducts(() =>
      products.filter(({ productTypeId }) => selectedProductTypes.includes(productTypeId))
    );
  }, [selectedProductTypes]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <header className={styles.header}>
        <section className={styles.toolbar}>
          <FormControl
            size="small"
            sx={{ width: 350 }}>
            <Select
              multiple
              aria-placeholder="Type filter"
              renderValue={handleRenderValue}
              value={selectedProductTypes}
              onChange={handleChange}>
              {productTypes.map(renderCheckbox)}
            </Select>
          </FormControl>

          <OutlinedInput
            autoFocus
            fullWidth
            size="small"
            placeholder="Type to filter..."
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            onChange={handleChange}
          />
        </section>
      </header>

      <List className={styles.container}>{filteredProducts.map(renderItem)}</List>
    </>
  );
}
