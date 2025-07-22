import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import type { HTMLAttributes } from 'react';

type NavListItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
} & HTMLAttributes<HTMLElement>;

/**
 * A reusable navigation list item component.
 * It renders a button with an icon and a link to the specified route.
 */
export default function NavListItem({ className, to, icon, label }: NavListItemProps) {
  return (
    <ListItemButton className={className}>
      <ListItemIcon>{icon}</ListItemIcon>
      <Link href={to}>{label}</Link>
    </ListItemButton>
  );
}
