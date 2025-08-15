import FormInput from '@/components/form-input/form-input.js';
import { useState } from 'react';

const FORM_INPUT_SX = { width: 300 };
export default function NewCustomerDetail() {
  'use memo';

  const [name, setName] = useState('');

  const handleChange = (name: string): void => setName(name);
  return (
    <form>
      <FormInput
        label="Name"
        name="name"
        required
        value={name}
        onChange={handleChange}
        sx={FORM_INPUT_SX}
      />
    </form>
  );
}
