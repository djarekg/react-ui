import { useDebounce } from '@/core/hooks/use-debounce.js';
import { isNull } from '@/core/utils/string.js';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect, useState, type ChangeEvent, type ReactNode } from 'react';

type SearchProps = {
  autoFocus?: boolean;
  endIcon?: ReactNode;
  minLength?: number;
  width?: number | string;
  placeholder?: string;
  onSearch: (value: string) => void;
};

export default function Search({
  autoFocus = false,
  endIcon,
  minLength = 2,
  width = '100%',
  placeholder,
  onSearch,
}: SearchProps) {
  'use memo';

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  // If end icon specified, then setup
  const endAdornment = () => {
    if (endIcon) {
      return <InputAdornment position="end">{endIcon}</InputAdornment>;
    }

    return {};
  };

  useEffect(() => {
    if (isNull(debouncedSearchTerm) && debouncedSearchTerm.length >= minLength) {
      return;
    }

    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <OutlinedInput
      autoFocus={autoFocus}
      fullWidth
      size="small"
      placeholder={placeholder}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      {...endAdornment}
      onChange={handleChange}
      sx={{ width: width }}
    />
  );
}
