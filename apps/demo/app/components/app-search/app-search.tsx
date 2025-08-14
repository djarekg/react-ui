import type { CommandPaletteItem } from '@/components/command-palette/command-palette-item.js';
import { isNullOrEmpty } from '@/core/utils/string.js';
import { GetSearchResults } from '@/types/graphql.js';
import { useLazyQuery } from '@apollo/client/react/hooks';
import PeopleOutlineRounded from '@mui/icons-material/PeopleOutlineRounded';
import PermContactCalendar from '@mui/icons-material/PermContactCalendar';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';
import { lazy, useEffect, useState, type ReactNode } from 'react';
import AppSearchResultsDefaultTemplate from './app-search-results-default-template.js';
import styles from './app-search.module.css';

const CommandPalette = lazy(() => import('@/components/command-palette/command-palette.js'));

type ResultTypeMapType = {
  [key: string]: {
    href: string;
    icon: ReactNode;
  };
};

const resultTypeMap: ResultTypeMapType = {
  1: {
    href: '/users/',
    icon: <PeopleOutlineRounded />,
  },
  2: {
    href: '/customers/',
    icon: <ShoppingBagOutlined />,
  },
  3: {
    href: '/customer/contacts/',
    icon: <PermContactCalendar />,
  },
} as const;

export default function AppSearch() {
  'use memo';

  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState<CommandPaletteItem[]>([]);
  const [getSearchResults, { data, error, loading }] = useLazyQuery(GetSearchResults);
  const handleSearch = (value: string) => setSearchTerm(value);

  const handleClose = () => {
    setItems([]);
    setSearchTerm('');
    setOpen(false);
  };

  // Open command palette on "Cmd/Ctrl + K"
  // This is a common shortcut for search functionality in many applications.
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!isNullOrEmpty(searchTerm)) {
      const fetchResults = async () => await getSearchResults({ variables: { query: searchTerm } });
      fetchResults();
    }
  }, [searchTerm]);

  useEffect(() => {
    const _items = data?.search?.map(item => {
      const mapping = resultTypeMap[item.type || 1];

      return {
        label: item.name,
        href: `${mapping.href}${item.id}`,
        // @ts-ignore
        icon: mapping.icon,
      } as CommandPaletteItem;
    });

    setItems(_items || []);
  }, [data]);

  return (
    <>
      <div
        className={styles.container}
        onClick={() => setOpen(true)}>
        <SearchIcon />
        <span>Search</span>
        <div className={styles.divider} />
        <span
          role="img"
          aria-label="mac command">
          ⌘
        </span>
        <span
          role="img"
          aria-label="mac command">
          K
        </span>
      </div>
      <CommandPalette
        defaultResultsTemplate={<AppSearchResultsDefaultTemplate />}
        items={items}
        loading={loading}
        open={open}
        onSearch={handleSearch}
        onClose={handleClose}
      />
    </>
  );
}
