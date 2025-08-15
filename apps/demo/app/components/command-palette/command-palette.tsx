import Loader from '@/components/loader/loader.js';
import Search from '@/components/search/search.js';
import { closest } from '@/core/utils/dom.js';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { type MouseEvent, type ReactNode } from 'react';
import type { CommandPaletteItem } from './command-palette-item.js';
import CommandPaletteResults from './command-palette-results.js';
import styles from './command-palette.module.css';

const DIALOG_TITLE_SX = { padding: 1 };
const DIALOG_CONTENT_SX = { maxHeight: '350px' };
const SEARCH_END_ICON = <span className={styles.esc}>esc</span>;

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
  'use memo';

  const handleClick = ({ target }: MouseEvent) => {
    if (closest(target as Element, '.app-command-palette-item-link')) {
      onClose();
    }
  };

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
      <DialogTitle sx={DIALOG_TITLE_SX}>
        <Search
          autoFocus
          endIcon={SEARCH_END_ICON}
          placeholder="Type to search..."
          onSearch={onSearch}
        />
      </DialogTitle>
      <DialogContent
        className={styles.content}
        sx={DIALOG_CONTENT_SX}>
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
            src="/ghost.svg"
          />
        </div>
      </DialogActions>
    </Dialog>
  );
}
