import CardTemplate from '@/components/card-template/card-template.js';
import Search from '@/components/search/search.js';
import { isNullOrEmpty } from '@/core/utils/string.js';
import { GetProductTypes, type Product } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import DoNotDisturbAlt from '@mui/icons-material/DoNotDisturbAlt';
import EditOutlined from '@mui/icons-material/EditOutlined';
import OpenInNewOutlined from '@mui/icons-material/OpenInNewOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import { lazy, useEffect, useState } from 'react';
import styles from './product-list.module.css';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));
const formControlWidth = { width: 350 };
const noRecordsIconFontSize = { fontSize: '38px' };

type ProductListProps = {
  products: Product[];
};

export default function ProductList({ products = [] }: ProductListProps) {
  'use memo';

  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>([]);
  const [filterText, setFilterText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { data: { productTypes = [] } = {}, error } = useQuery(GetProductTypes);

  const renderItem = (product: Product) => {
    return (
      <ListItem key={product.id}>
        <CardTemplate
          className={styles.card}
          item={product}
          actions={
            <>
              <Tooltip title="Open product">
                <IconButton
                  color="primary"
                  size="small">
                  <OpenInNewOutlined />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit product">
                <IconButton
                  color="primary"
                  size="small">
                  <EditOutlined />
                </IconButton>
              </Tooltip>
            </>
          }
        />
      </ListItem>
    );
  };

  const renderCheckbox = ({ id, name }: { id: string; name: string }) => {
    const isChecked = selectedProductTypes.includes(id);

    return (
      <MenuItem
        key={id}
        value={id}>
        <Checkbox checked={isChecked} />
        <ListItemText primary={name} />
      </MenuItem>
    );
  };

  const handleSearch = (value: string) => setFilterText(value);
  const handleChange = ({ target: { value } }: SelectChangeEvent<string | string[]>) =>
    setSelectedProductTypes(Array.isArray(value) ? value : value.split(','));

  const handleRenderValue = (selected: string[]) => {
    return productTypes
      .filter(({ id }) => selected.includes(id))
      .map(({ name }) => name)
      .join('');
  };

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

  useEffect(() => {
    const filtered = filterProducts(products, selectedProductTypes, filterText);
    setFilteredProducts(filtered);
  }, [selectedProductTypes, filterText]);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <>
      <header className={styles.header}>
        <section className={styles.toolbar}>
          <FormControl
            size="small"
            sx={formControlWidth}>
            <InputLabel
              id="type-select-label"
              classes={{ shrink: styles.selectLabelShrink }}>
              Select types to filter
            </InputLabel>
            <Select
              labelId="type-select-label"
              multiple
              renderValue={handleRenderValue}
              value={selectedProductTypes}
              onChange={handleChange}>
              {productTypes.map(renderCheckbox)}
            </Select>
          </FormControl>

          <Search
            minLength={0}
            placeholder="Type to filter..."
            width={220}
            onSearch={handleSearch}
          />
        </section>
      </header>

      {filteredProducts.length ? (
        <List className={styles.container}>{filteredProducts.map(renderItem)}</List>
      ) : (
        <div className={styles.noRecords}>
          <div className={styles.noRecordsMessage}>
            <div>
              No records
              <DoNotDisturbAlt sx={noRecordsIconFontSize} />
            </div>
            <div className={styles.noRecordsTip}>Tip: use filter to query products</div>
          </div>
        </div>
      )}
    </>
  );
}
