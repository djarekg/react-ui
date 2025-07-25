import type { User } from '@/types/graphql.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import type { FC } from 'react';
import { useFormStatus } from 'react-dom';
import styles from './user-detail.module.css';

type UserDetailProps = {
  user: User;
};

const UserDetail: FC<UserDetailProps> = ({ user }) => {
  const { pending } = useFormStatus();
  const {
    dateCreated,
    firstName,
    lastName,
    email,
    phone,
    streetAddress,
    streetAddress2,
    city,
    state,
    zip,
  } = user || {};

  return (
    <>
      <header className={styles.header}>
        <span>Created: {new Date(dateCreated as string).toLocaleDateString()}</span>
      </header>
      <form
        autoComplete="off"
        className={styles.form}>
        <section>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            size="small"
            required
            value={firstName || ''}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            size="small"
            required
            value={lastName || ''}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            size="small"
            required
            value={email || ''}
          />
          <TextField
            name="phone"
            label="Phone"
            variant="outlined"
            size="small"
            required
            value={phone || ''}
          />
        </section>
        <section>
          <TextField
            name="streetAddress"
            label="Street Address"
            variant="outlined"
            size="small"
            required
            value={streetAddress || ''}
          />
          <TextField
            name="streetAddress2"
            label="Street Address 2"
            variant="outlined"
            size="small"
            value={streetAddress2 || ''}
          />
          <TextField
            name="city"
            label="City"
            variant="outlined"
            size="small"
            required
            value={city || ''}
          />
          <div className={styles.stateZip}>
            <TextField
              name="state"
              label="State"
              variant="outlined"
              size="small"
              required
              value={state || ''}
              sx={{ width: '100%' }}
            />
            <TextField
              name="zip"
              label="Zip Code"
              variant="outlined"
              size="small"
              required
              value={zip || ''}
              sx={{ width: '100%' }}
            />
          </div>
        </section>
      </form>
      <footer className={styles.footer}>
        <Button variant="outlined">Cancel</Button>
        <Button
          variant="outlined"
          disabled={pending}>
          Save
        </Button>
      </footer>
    </>
  );
};

export default UserDetail;
