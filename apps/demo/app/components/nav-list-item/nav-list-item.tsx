import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import type { HTMLAttributes } from 'react';
import { Link } from 'react-router';

type NavListItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
} & HTMLAttributes<HTMLElement>;

/**
 * A reusable navigation list item component.
 * It renders a button with an icon and a link to the specified route.
 */
const NavListItem = ({ className, to, icon, label }: NavListItemProps) => {
  return (
    <ListItemButton className={className}>
      <ListItemIcon>{icon}</ListItemIcon>
      <Link
        to={to}
        discover="none">
        {label}
      </Link>
    </ListItemButton>
  );
};

export default NavListItem;
