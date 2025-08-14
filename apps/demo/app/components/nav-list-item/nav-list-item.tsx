import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import type { HTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';

type NavListItemProps = {
  endAdornment?: ReactNode;
  to: string;
  icon: React.ReactNode;
  label: string;
  viewTransition?: boolean;
} & HTMLAttributes<HTMLElement>;

/**
 * A reusable navigation list item component.
 * It renders a button with an icon and a link to the specified route.
 */
export default function NavListItem({
  className,
  endAdornment,
  to,
  icon,
  label,
  viewTransition,
}: NavListItemProps) {
  'use memo';

  return (
    <ListItemButton className={className}>
      <ListItemIcon>{icon}</ListItemIcon>
      <Link
        prefetch="viewport"
        to={to}
        discover="none"
        viewTransition={viewTransition}>
        {label}
      </Link>
      {endAdornment}
    </ListItemButton>
  );
}
