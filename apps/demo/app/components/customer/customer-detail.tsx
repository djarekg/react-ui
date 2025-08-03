import FormInput from '@/components/form-input/form-input.js';
import type { Customer } from '@/types/graphql.js';
import Button from '@mui/material/Button';
import { useCallback, useState, type FC, type HTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './customer-detail.module.css';

type ActionsProps = {
  isEditing: boolean;
  onCancel: () => void;
  onEdit: () => void;
  onSave: () => void;
};

const Actions: FC<ActionsProps> = ({ isEditing, onCancel, onEdit, onSave }) => {
  const { pending } = useFormStatus();

  if (isEditing) {
    return (
      <>
        <Button
          variant="outlined"
          onClick={onCancel}>
          Cancel
        </Button>
        <Button
          type="submit"
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

type CustomerDetailProps = {
  customer: Customer;
  onSave?: (customer: Customer) => void;
  onCancel?: () => void;
} & HTMLAttributes<HTMLElement>;

const CustomerDetail: FC<CustomerDetailProps> = ({ customer }) => {
  const [isReadonly, setIsReadonly] = useState(true);
  const [customerCopy, setCustomerCopy] = useState<Customer>(customer);

  const handleCancel = useCallback(() => {
    setIsReadonly(true);
    setCustomerCopy(customer); // Reset to original customer data
  }, [customer]);

  const handleEdit = useCallback(() => {
    setIsReadonly(false);
  }, []);

  const handleSave = useCallback(() => {
    setIsReadonly(true);
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <header className={styles.header}>
        <span>Created: {new Date(customerCopy?.dateCreated as string).toLocaleDateString()}</span>
      </header>

      <form
        className={styles.form}
        onSubmit={handleSubmit}>
        <section>
          <FormInput
            label="Name"
            name="name"
            required
            readonly={isReadonly}
            value={customerCopy?.name}
            onChange={value => setCustomerCopy(prev => ({ ...prev, name: value as string }))}
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            required
            readonly={isReadonly}
            value={customerCopy?.phone}
            onChange={value => setCustomerCopy(prev => ({ ...prev, phone: value as string }))}
          />
        </section>
        <section>
          <FormInput
            name="streetAddress"
            label="Street Address"
            required
            readonly={isReadonly}
            value={customerCopy?.streetAddress}
            onChange={value =>
              setCustomerCopy(prev => ({ ...prev, streetAddress: value as string }))
            }
          />
          <FormInput
            name="streetAddress2"
            label="Street Address 2"
            readonly={isReadonly}
            value={customerCopy?.streetAddress2}
            onChange={value =>
              setCustomerCopy(prev => ({ ...prev, streetAddress2: value as string }))
            }
          />
          <FormInput
            name="city"
            label="City"
            required
            readonly={isReadonly}
            value={customerCopy?.city}
            onChange={value => setCustomerCopy(prev => ({ ...prev, city: value as string }))}
          />
          <div className={styles.stateZip}>
            <FormInput
              name="state"
              label="State"
              required
              fullWidth
              readonly={isReadonly}
              value={customerCopy?.state?.name}
              onChange={value =>
                setCustomerCopy(prev => ({
                  ...prev,
                  state: { ...prev.state, name: value as string },
                }))
              }
            />
            <FormInput
              name="zip"
              label="Zip Code"
              required
              fullWidth
              readonly={isReadonly}
              value={customerCopy?.zip}
              onChange={value => setCustomerCopy(prev => ({ ...prev, zip: value as string }))}
            />
          </div>
        </section>
      </form>

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

export default CustomerDetail;
