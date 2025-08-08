import FormInput from '@/components/form-input/form-input.js';
import type { CustomerContact } from '@/types/graphql.js';
import Button from '@mui/material/Button';
import { useRef, useState, type HTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './customer-contact-detail.module.css';

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
        <Button onClick={onCancel}>CANCEL</Button>
        <Button
          variant="outlined"
          disabled={pending}
          onClick={onSave}>
          SAVE
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

type CustomerContactDetailProps = {
  customerContact: CustomerContact | null;
  onSave?: (customer: CustomerContact) => void;
} & HTMLAttributes<HTMLElement>;

export default function CustomerContactDetail({
  customerContact,
  onSave,
}: CustomerContactDetailProps) {
  'use memo';

  const [isReadonly, setIsReadonly] = useState(true);
  const [customerContactCopy, setCustomerContactCopy] = useState<CustomerContact>(customerContact!);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCancel = () => {
    setIsReadonly(true);
    setCustomerContactCopy(customerContact!); // Reset to original customer data
  };

  const handleEdit = () => {
    setIsReadonly(false);
  };

  const handleSave = () => {
    setIsReadonly(true);
    onSave?.(customerContactCopy);
  };

  return (
    <>
      <header className={styles.header}>
        <span>
          Created: {new Date(customerContactCopy?.dateCreated as string).toLocaleDateString()}
        </span>
      </header>

      <form
        className={styles.form}
        ref={formRef}>
        <section>
          <FormInput
            label="First name"
            name="firstName"
            required
            readonly={isReadonly}
            value={customerContactCopy?.firstName}
            onChange={firstName => setCustomerContactCopy(prev => ({ ...prev, firstName }))}
          />
          <FormInput
            label="Last name"
            name="lastName"
            required
            readonly={isReadonly}
            value={customerContactCopy?.lastName}
            onChange={lastName => setCustomerContactCopy(prev => ({ ...prev, lastName }))}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            required
            readonly={isReadonly}
            value={customerContactCopy?.email}
            onChange={email => setCustomerContactCopy(prev => ({ ...prev, email }))}
          />
          <FormInput
            label="Phone"
            name="phone"
            type="tel"
            required
            readonly={isReadonly}
            value={customerContactCopy?.phone}
            onChange={phone => setCustomerContactCopy(prev => ({ ...prev, phone }))}
          />
        </section>
        <section>
          <FormInput
            name="streetAddress"
            label="Street Address"
            required
            readonly={isReadonly}
            value={customerContactCopy?.streetAddress}
            onChange={streetAddress => setCustomerContactCopy(prev => ({ ...prev, streetAddress }))}
          />
          <FormInput
            name="streetAddress2"
            label="Street Address 2"
            readonly={isReadonly}
            value={customerContactCopy?.streetAddress2}
            onChange={streetAddress2 =>
              setCustomerContactCopy(prev => ({ ...prev, streetAddress2 }))
            }
          />
          <FormInput
            name="city"
            label="City"
            required
            readonly={isReadonly}
            value={customerContactCopy?.city}
            onChange={city => setCustomerContactCopy(prev => ({ ...prev, city }))}
          />
          <div className={styles.stateZip}>
            <FormInput
              name="state"
              label="State"
              required
              fullWidth
              readonly={isReadonly}
              value={customerContactCopy?.state?.name}
              onChange={name =>
                setCustomerContactCopy(prev => ({
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
              value={customerContactCopy?.zip}
              onChange={zip => setCustomerContactCopy(prev => ({ ...prev, zip }))}
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
