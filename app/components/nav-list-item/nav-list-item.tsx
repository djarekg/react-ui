import { ListItemButton, ListItemIcon } from '@mui/material';
import { NavLink } from 'react-router';

type NavListItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

/**
 * A reusable navigation list item component.
 * It renders a button with an icon and a link to the specified route.
 */
export default function NavListItem({ to, icon, label }: NavListItemProps) {
  return (
    <ListItemButton>
      <ListItemIcon>{icon}</ListItemIcon>
      <NavLink to={to}>{label}</NavLink>
    </ListItemButton>
  );
}
