import Button from '@mui/material/Button';
import type { FC, HTMLAttributes, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './item-detail-template.module.css';

type ActionsProps = {
  isEditing: boolean;
  onCancel?: () => void;
  onEdit?: () => void;
  onSave?: () => void;
};

const Actions = ({ isEditing, onCancel, onEdit, onSave }: ActionsProps) => {
  'use memo';

  const { pending } = useFormStatus();

  if (isEditing) {
    return (
      <>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          variant="outlined"
          disabled={pending}
          onClick={onSave}>
          Save
        </Button>
      </>
    );
  }

  return (
    <Button
      variant="outlined"
      onClick={onEdit}>
      Edit
    </Button>
  );
};

type ItemDetailTemplateProps = {
  header: ReactNode;
  isReadonly: boolean;
  onCancel: () => void;
  onEdit: () => void;
  onSave: () => void;
} & HTMLAttributes<HTMLElement>;

const ItemDetailTemplate: FC<ItemDetailTemplateProps> = ({
  children,
  header,
  isReadonly,
  onCancel,
  onEdit,
  onSave,
}) => {
  'use memo';

  const handleCancel = () => onCancel();
  const handleEdit = () => onEdit();
  const handleSave = () => onSave();

  return (
    <>
      <header className={styles.header}>{header}</header>
      <form className={styles.form}>{children}</form>
      <footer className={styles.footer}>
        <Actions
          isEditing={!isReadonly}
          onCancel={handleCancel}
          onEdit={handleEdit}
          onSave={handleSave}
        />
      </footer>
    </>
  );
};

export default ItemDetailTemplate;
