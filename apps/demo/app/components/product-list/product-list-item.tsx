import CardTemplate from '@/components/card-template/card-template.js';
import type { Product } from '@/types/graphql.js';
import EditOutlined from '@mui/icons-material/EditOutlined';
import OpenInNewOutlined from '@mui/icons-material/OpenInNewOutlined';
import PreviewOutlined from '@mui/icons-material/PreviewOutlined';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import type { FC } from 'react';
import styles from './product-list-item.module.css';

type ProductListItemProps = {
  product: Product;
  onPreview: (id: string) => void;
};

const ProductListItem: FC<ProductListItemProps> = ({ product, onPreview }) => {
  const handlePreviewClick = () => {
    onPreview(product.id);
  };

  return (
    <ListItem key={product.id}>
      <CardTemplate
        className={styles.card}
        item={product}
        actions={
          <>
            <Tooltip title="Open product">
              <IconButton
                size="small"
                onClick={handlePreviewClick}>
                <PreviewOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open product">
              <IconButton
                size="small"
                component="a"
                href={`/products/${product.id}`}
                target="_blank"
                rel="noopener noreferrer">
                <OpenInNewOutlined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit product">
              <IconButton
                size="small"
                component="a"
                href={`/products/${product.id}?m=edit`}
                target="_blank"
                rel="noopener noreferrer">
                <EditOutlined />
              </IconButton>
            </Tooltip>
          </>
        }
      />
    </ListItem>
  );
};

export default ProductListItem;
