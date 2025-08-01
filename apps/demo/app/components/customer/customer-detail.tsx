import type { Customer } from '@/types/graphql.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, type ChangeEvent, type FC, type HTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './customer-detail.module.css';

type FormInputProps = {
  label: string;
  name: string;
  type?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  initialValue?: string;
  fullWidth?: boolean;
  readonly?: boolean;
  required?: boolean;
} & HTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  initialValue = '',
  fullWidth = false,
  readonly,
  required,
  type = 'text',
}) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
  };

  console.log('FormInput', { label, name, value, type, fullWidth, required });

  return (
    <TextField
      variant="outlined"
      size="small"
      name={name}
      label={label}
      inputMode={type}
      fullWidth={fullWidth}
      required={required}
      value={value}
      onChange={handleChange}
      slotProps={{
        input: {
          readOnly: Boolean(readonly),
        },
      }}
    />
  );
};

type CustomerDetailProps = {
  customer: Customer;
  onSave?: (customer: Customer) => void;
  onCancel?: () => void;
} & HTMLAttributes<HTMLElement>;

const CustomerDetail: FC<CustomerDetailProps> = ({ customer }) => {
  console.log('CustomerDetail', { customer });
  const { pending } = useFormStatus();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <header className={styles.header}>
        <span>Created: {new Date(customer?.dateCreated as string).toLocaleDateString()}</span>
      </header>
      <form
        autoComplete="off"
        className={styles.form}
        onSubmit={handleSubmit}>
        <section>
          <FormInput
            label="Name"
            name="name"
            initialValue={customer?.name}
            required
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            initialValue={customer?.phone}
            required
          />
        </section>
        <section>
          <FormInput
            name="streetAddress"
            label="Street Address"
            required
            initialValue={customer?.streetAddress}
          />
          <FormInput
            name="streetAddress2"
            label="Street Address 2"
            initialValue={customer?.streetAddress2}
          />
          <FormInput
            name="city"
            label="City"
            required
            initialValue={customer?.city}
          />
          <div className={styles.stateZip}>
            <FormInput
              name="state"
              label="State"
              required
              initialValue={customer?.state?.name}
              fullWidth
            />
            <FormInput
              name="zip"
              label="Zip Code"
              required
              initialValue={customer?.zip}
              fullWidth
            />
          </div>
        </section>
      </form>
      <footer className={styles.footer}>
        <Button variant="outlined">Cancel</Button>
        <Button
          type="submit"
          variant="outlined"
          disabled={pending}>
          Save
        </Button>
      </footer>
    </>
  );
};

export default CustomerDetail;
