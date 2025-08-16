import FormInput from '@/components/form-input/form-input.js';
import ItemDetailTemplate from '@/components/item-detail-template/item-detail-template.js';
import LocationStateSelect from '@/components/location-state-select/location-state-select.js';
import { FormMode, type FormModeType } from '@/core/constants/form-mode.js';
import type { Customer } from '@/types/graphql.js';
import { useState, type HTMLAttributes } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import styles from './customer-detail.module.css';

type CustomerDetailProps = {
  customer: Customer;
  onSave?: (customer: Customer) => void;
} & HTMLAttributes<HTMLElement>;

export default function CustomerDetail({ customer, onSave }: CustomerDetailProps) {
  'use memo';

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [formMode, setFormMode] = useState<FormModeType>(
    (searchParams.get('m') as FormModeType) || 'view'
  );
  const [isReadonly, setIsReadonly] = useState(() => formMode === 'view');
  const [isCreating, setIsCreating] = useState(() => formMode === 'new');
  const [customerCopy, setCustomerCopy] = useState<Customer>(customer);

  const setFormModeFn = (mode: FormModeType) => {
    setFormMode(mode);
    setSearchParams({ m: mode }, { replace: true });
  };

  const handleInputChange = (field: keyof Customer) => (value: unknown) => {
    setCustomerCopy(sate => ({ ...sate, [field]: value }));
  };

  const handleCancel = () => {
    // If we are in 'new' mode, navigate back to the customer list
    // Otherwise, reset the form to the original customer data.
    if (isCreating) {
      navigate('/customers', { viewTransition: true });
      return;
    }

    setCustomerCopy(customer); // Reset to original customer data
    setFormModeFn(FormMode.View);
    setIsReadonly(true);
  };

  const handleEdit = () => {
    setFormModeFn(FormMode.Edit);
    setIsReadonly(false);
  };

  const handleSave = () => {
    onSave?.(customerCopy);
    setFormModeFn(FormMode.View);
    setIsReadonly(true);
  };

  const header = !isCreating && (
    <span>Created: {new Date(customerCopy?.dateCreated as string).toLocaleDateString()}</span>
  );

  return (
    <ItemDetailTemplate
      header={header}
      isReadonly={isReadonly}
      onCancel={handleCancel}
      onEdit={handleEdit}
      onSave={handleSave}>
      <section>
        <FormInput
          label="Name"
          name="name"
          required
          readonly={isReadonly}
          value={customerCopy?.name}
          onChange={handleInputChange('name')}
        />
        <FormInput
          label="Phone"
          name="phone"
          type="tel"
          required
          readonly={isReadonly}
          value={customerCopy?.phone}
          onChange={handleInputChange('phone')}
        />
      </section>
      <section>
        <FormInput
          name="streetAddress"
          label="Street Address"
          required
          readonly={isReadonly}
          value={customerCopy?.streetAddress}
          onChange={handleInputChange('streetAddress')}
        />
        <FormInput
          name="streetAddress2"
          label="Street Address 2"
          readonly={isReadonly}
          value={customerCopy?.streetAddress2}
          onChange={handleInputChange('streetAddress2')}
        />
        <FormInput
          name="city"
          label="City"
          required
          readonly={isReadonly}
          value={customerCopy?.city}
          onChange={handleInputChange('city')}
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
              onChange={handleInputChange('stateId')}
            />
          )}
          <FormInput
            name="zip"
            label="Zip Code"
            required
            fullWidth
            readonly={isReadonly}
            value={customerCopy?.zip}
            onChange={handleInputChange('zip')}
          />
        </div>
      </section>
    </ItemDetailTemplate>
  );
}
