import FormInput from '@/components/form-input/form-input.js';
import LocationStateSelect from '@/components/location-state-select/location-state-select.js';
import { FormMode, type FormModeType } from '@/core/constants/form-mode.js';
import type { Customer } from '@/types/graphql.js';
import Button from '@mui/material/Button';
import { useState, type HTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import { useSearchParams } from 'react-router';
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
}

type CustomerDetailProps = {
  customer: Customer;
  onSave?: (customer: Customer) => void;
} & HTMLAttributes<HTMLElement>;

export default function CustomerDetail({ customer, onSave }: CustomerDetailProps) {
  'use memo';

  const [searchParams, setSearchParams] = useSearchParams();
  const [formMode, setFormMode] = useState<FormModeType>(
    (searchParams.get('m') as FormModeType) || 'view'
  );
  const [isReadonly, setIsReadonly] = useState(() => formMode === 'view');
  const [customerCopy, setCustomerCopy] = useState<Customer>(customer);

  const setFormModeFn = (mode: FormModeType) => {
    setFormMode(mode);
    setSearchParams({ m: mode }, { replace: true });
  };

  const handleCancel = () => {
    setIsReadonly(true);
    setCustomerCopy(customer); // Reset to original customer data
    setFormModeFn(FormMode.VIEW);
  };

  const handleEdit = () => {
    setIsReadonly(false);
    setFormModeFn(FormMode.EDIT);
  };

  const handleSave = () => {
    setIsReadonly(true);
    onSave?.(customerCopy);
    setFormModeFn(FormMode.VIEW);
  };

  return (
    <>
      <header className={styles.header}>
        <span>Created: {new Date(customerCopy?.dateCreated as string).toLocaleDateString()}</span>
      </header>

      <form className={styles.form}>
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
            {formMode === 'view' ? (
              <FormInput
                name="state"
                label="State"
                required
                fullWidth
                readonly
                value={customerCopy?.state?.name}
              />
            ) : (
              <LocationStateSelect
                readonly={isReadonly}
                value={customerCopy?.state?.id}
                onChange={stateId => setCustomerCopy(prev => ({ ...prev, stateId }))}
              />
            )}
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
