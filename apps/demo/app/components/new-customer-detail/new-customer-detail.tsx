import FormInput from '@/components/form-input/form-input.js';
import { useState } from 'react';

export default function NewCustomerDetail() {
  'use memo';

  const [name, setName] = useState('');

  return (
    <form>
      <FormInput
        label="Name"
        name="name"
        required
        value={name}
        onChange={name => setName(name)}
        sx={{ width: 300 }}
      />
    </form>
  );
}
