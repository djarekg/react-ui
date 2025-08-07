import FormInput from '@/components/form-input/form-input.js';
import type { Customer } from '@/types/graphql.js';
import Button from '@mui/material/Button';
import { useRef, useState, type HTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './customer-detail.module.css';

type ActionsProps = {
  isEditing: boolean;
  onCancel?: () => void;
  onEdit?: () => void;
  onSave?: () => void;
};

function Actions({ isEditing, onCancel, onEdit, onSave }: ActionsProps) {
  'use memo';

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
}

type CustomerDetailProps = {
  customer: Customer;
  onSave?: (customer: Customer) => void;
} & HTMLAttributes<HTMLElement>;

export default function CustomerDetail({ customer, onSave }: CustomerDetailProps) {
  'use memo';

  const [isReadonly, setIsReadonly] = useState(true);
  const [customerCopy, setCustomerCopy] = useState<Customer>(customer);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCancel = () => {
    setIsReadonly(true);
    setCustomerCopy(customer); // Reset to original customer data
  };

  const handleEdit = () => {
    setIsReadonly(false);
  };

  const handleSave = () => {
    setIsReadonly(true);
    onSave?.(customerCopy);
  };

  return (
    <>
      <header className={styles.header}>
        <span>Created: {new Date(customerCopy?.dateCreated as string).toLocaleDateString()}</span>
      </header>

      <form
        className={styles.form}
        ref={formRef}>
        <section>
          <FormInput
            label="Name"
            name="name"
            required
            readonly={isReadonly}
            value={customerCopy?.name}
            onChange={name => setCustomerCopy(prev => ({ ...prev, name }))}
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            required
            readonly={isReadonly}
            value={customerCopy?.phone}
            onChange={phone => setCustomerCopy(prev => ({ ...prev, phone }))}
          />
        </section>
        <section>
          <FormInput
            name="streetAddress"
            label="Street Address"
            required
            readonly={isReadonly}
            value={customerCopy?.streetAddress}
            onChange={streetAddress => setCustomerCopy(prev => ({ ...prev, streetAddress }))}
          />
          <FormInput
            name="streetAddress2"
            label="Street Address 2"
            readonly={isReadonly}
            value={customerCopy?.streetAddress2}
            onChange={streetAddress2 => setCustomerCopy(prev => ({ ...prev, streetAddress2 }))}
          />
          <FormInput
            name="city"
            label="City"
            required
            readonly={isReadonly}
            value={customerCopy?.city}
            onChange={city => setCustomerCopy(prev => ({ ...prev, city }))}
          />
          <div className={styles.stateZip}>
            <FormInput
              name="state"
              label="State"
              required
              fullWidth
              readonly={isReadonly}
              value={customerCopy?.state?.name}
              onChange={name =>
                setCustomerCopy(prev => ({
                  ...prev,
                  state: { ...prev.state, name },
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
              onChange={zip => setCustomerCopy(prev => ({ ...prev, zip }))}
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
}
