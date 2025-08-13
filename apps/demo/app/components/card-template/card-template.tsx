import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styles from './card-template.module.css';

export type CardItem = {
  id: string;
  name: string;
  description: string;
};

type CardTemplateProps<T extends CardItem> = {
  item: T;
};

/**
 * Template for display data in a Card component. This template should be used where ever
 * Card components are used so there is a consistent look.
 */
export default function CardTemplate<T extends CardItem>({ item }: CardTemplateProps<T>) {
  const { id, name, description } = item ?? {};

  return (
    <Card
      key={id}
      variant="outlined"
      sx={{ height: '250px' }}>
      <CardMedia
        className={styles.media}
        sx={{ height: '130px' }}>
        <img
          loading="lazy"
          height="75px"
          alt="tech clothing"
          src="/public/tech_clothing_black.png"
          className={styles.image}
        />
      </CardMedia>
      <CardContent className={styles.content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.description}>{description}</span>
      </CardContent>
    </Card>
  );
}
