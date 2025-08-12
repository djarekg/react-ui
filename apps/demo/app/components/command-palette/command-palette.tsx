import Loader from '@/components/loader/loader.js';
import { useDebounce } from '@/core/hooks/use-debounce.js';
import { closest } from '@/core/utils/dom.js';
import { isNullOrEmpty } from '@/core/utils/string.js';
import Search from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect, useState, type ChangeEvent, type MouseEvent, type ReactNode } from 'react';
import type { CommandPaletteItem } from './command-palette-item.js';
import CommandPaletteResults from './command-palette-results.js';
import styles from './command-palette.module.css';

type CommandPaletteProps = {
  defaultResultsTemplate?: ReactNode;
  items: CommandPaletteItem[];
  loading: boolean;
  open: boolean;
  onSearch: (value: string) => void;
  onClose: () => void;
};

export default function CommandPalette<T = unknown>({
  defaultResultsTemplate,
  items = [],
  loading,
  open,
  onSearch,
  onClose,
}: CommandPaletteProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(value);
  };

  const handleClick = ({ target }: MouseEvent) => {
    if (closest(target as Element, '.app-command-palette-item-link')) {
      onClose();
    }
  };

  useEffect(() => {
    if (isNullOrEmpty(debouncedSearchTerm)) {
      console.log('Search term is empty.');
      return;
    }

    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <Dialog
      className={styles.dialog}
      fullWidth
      maxWidth="sm"
      classes={{
        scrollPaper: styles.topScrollPaper,
      }}
      open={open}
      onClose={onClose}>
      <DialogTitle sx={{ padding: 1 }}>
        <OutlinedInput
          autoFocus
          fullWidth
          size="small"
          placeholder="Type to search..."
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <span className={styles.esc}>esc</span>
            </InputAdornment>
          }
          onChange={handleChange}
        />
      </DialogTitle>
      <DialogContent
        className={styles.content}
        sx={{ maxHeight: '350px' }}>
        {loading ? (
          <Loader />
        ) : (
          <CommandPaletteResults
            defaultTemplate={defaultResultsTemplate}
            items={items}
            onClick={handleClick}
          />
        )}
      </DialogContent>
      <DialogActions>
        <div className={styles.actions}>
          <span>Search powered by</span>
          <img
            width="28"
            height="28"
            loading="lazy"
            alt="ghost"
            src="/public/ghost.svg"
          />
        </div>
      </DialogActions>
    </Dialog>
  );
}
