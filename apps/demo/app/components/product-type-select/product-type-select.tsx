import { GetProductTypes } from '@/types/graphql.js';
import { useQuery } from '@apollo/client/react/hooks';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { lazy, useState, type FC } from 'react';
import styles from './product-type-select.module.css';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

const FORM_CONTROL_WIDTH = { width: 350 };

type ProductTypeSelectProps = {
  value?: string[];
  onChange?: (value: string[]) => void;
};

const ProductTypeSelect: FC<ProductTypeSelectProps> = ({ value, onChange }) => {
  'use memo';

  const [internalValue, setInternalValue] = useState<string[]>(value || []);
  const { data: { productTypes = [] } = {}, error } = useQuery(GetProductTypes);

  if (error) return <ErrorMessage message={error.message} />;

  const handleChange = ({ target: { value } }: SelectChangeEvent<string | string[]>) => {
    setInternalValue(typeof value === 'string' ? value.split(',') : value);
    onChange?.(Array.from(value));
  };

  const renderValue = (selected: string[]) =>
    productTypes
      .filter(({ id }) => selected.includes(id))
      .map(({ name }) => name)
      .join('');

  const renderItem = ({ id, name }: { id: string; name: string }) => {
    const isChecked = internalValue.includes(id);

    return (
      <MenuItem
        key={id}
        value={id}>
        <Checkbox checked={isChecked} />
        <ListItemText primary={name} />
      </MenuItem>
    );
  };

  return (
    <FormControl
      size="small"
      sx={FORM_CONTROL_WIDTH}>
      <InputLabel
        id="type-select-label"
        classes={{ shrink: styles.selectLabelShrink }}>
        Select types to filter
      </InputLabel>
      <Select
        labelId="type-select-label"
        multiple
        renderValue={renderValue}
        value={internalValue}
        onChange={handleChange}>
        {productTypes.map(renderItem)}
      </Select>
    </FormControl>
  );
};

export default ProductTypeSelect;
