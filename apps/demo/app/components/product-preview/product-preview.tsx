import FormInput from '@/components/form-input/form-input.js';
import type { Product } from '@/types/graphql.js';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

type ProductPreviewProps = {
  product: Product;
  open: boolean;
  onClose: () => void;
};

const ProductPreview = ({ product, open, onClose }: ProductPreviewProps) => {
  const { name, description } = product;

  return (
    <Dialog
      open={open}
      onClose={onClose}>
      <DialogTitle>Product Preview</DialogTitle>
      <DialogContent>
        <FormInput
          label={'Product name'}
          name="name"
          value={name}
        />
        <FormInput
          label={'Description'}
          name="description"
          value={description}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ProductPreview;
