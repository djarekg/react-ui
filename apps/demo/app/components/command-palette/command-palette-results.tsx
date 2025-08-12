import type { CommandPaletteItem } from '@/components/command-palette/command-palette-item.js';
import NavListItem from '@/components/nav-list-item/nav-list-item.js';
import List from '@mui/material/List';
import type { MouseEvent, ReactNode } from 'react';

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
          icon={icon}
          label={label}
          to={href}
        />
      ))}
    </List>
  );
}
