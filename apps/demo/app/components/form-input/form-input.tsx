import TextField from '@mui/material/TextField';
import { useCallback, type ChangeEvent, type FC } from 'react';
import styles from './form-input.module.css';

type FormInputProps = {
  autoComplete?: 'off' | 'on';
  label: string;
  name: string;
  type?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  value?: string;
  fullWidth?: boolean;
  readonly?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
};

const FormInput: FC<FormInputProps> = ({
  autoComplete = 'off',
  label,
  name,
  value = '',
  fullWidth = false,
  readonly,
  required,
  type = 'text',
  onChange,
}) => {
  const handleChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    onChange?.(value);
  }, []);

  return (
    <TextField
      autoComplete={autoComplete}
      className={styles.textField}
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

export default FormInput;
