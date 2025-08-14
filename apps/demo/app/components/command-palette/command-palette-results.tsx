import type { CommandPaletteItem } from '@/components/command-palette/command-palette-item.js';
import NavListItem from '@/components/nav-list-item/nav-list-item.js';
import List from '@mui/material/List';
import type { MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router';

type CommandPaletteResultsProps = {
  defaultTemplate?: ReactNode;
  items: CommandPaletteItem[];
  onClick: (e: MouseEvent) => void;
};

export default function CommandPaletteResults({
  defaultTemplate,
  items = [],
  onClick,
}: CommandPaletteResultsProps) {
  'use memo';

  if (items?.length === 0 && defaultTemplate) {
    return <div onClickCapture={onClick}>{defaultTemplate}</div>;
  }

  return (
    <List
      component="nav"
      onClickCapture={onClick}>
      {items.map(({ icon, label, href }) => (
        <NavListItem
          className="app-command-palette-item-link"
          endAdornment={
            <Link
              to={{
                pathname: href,
                search: '?m=edit',
              }}
              style={{
                display: 'flex',
                justifySelf: 'flex-end',
              }}>
              edit
            </Link>
          }
          icon={icon}
          label={label}
          to={href}
        />
      ))}
    </List>
  );
}
