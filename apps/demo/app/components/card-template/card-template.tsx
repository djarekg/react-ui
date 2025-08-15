import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import type { ReactNode } from 'react';
import styles from './card-template.module.css';

const CARD_SX = { height: '320px' };
const CARD_MEDIA_SX = { height: '130px' };

export type CardItem = {
  id: string;
  name: string;
  description: string;
};

type CardTemplateProps<T extends CardItem> = {
  actions?: ReactNode;
  className?: string;
  item: T;
};

/**
 * Template for display data in a Card component. This template should be used where ever
 * Card components are used so there is a consistent look.
 */
export default function CardTemplate<T extends CardItem>({
  actions,
  className,
  item,
}: CardTemplateProps<T>) {
  'use memo';

  const Actions = () => <div className={styles.actions}>{actions}</div>;
  const { id, name, description } = item ?? {};

  return (
    <Card
      key={id}
      variant="outlined"
      className={`${styles.card} ${className}`}
      sx={CARD_SX}>
      <CardMedia
        className={styles.media}
        sx={CARD_MEDIA_SX}>
        <img
          loading="lazy"
          height="75px"
          alt="tech clothing"
          src="/tech_clothing_black.png"
          className={styles.image}
        />
      </CardMedia>
      <CardContent className={styles.content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
        {actions && <Actions />}
      </CardContent>
    </Card>
  );
}
