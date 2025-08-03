import TextField from '@mui/material/TextField';
import { useCallback, type ChangeEvent, type FC, type HTMLAttributes } from 'react';
import styles from './form-input.module.css';

type FormInputProps = {
  label: string;
  name: string;
  type?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | undefined;
  value?: string;
  fullWidth?: boolean;
  readonly?: boolean;
  required?: boolean;
  onChange?: (value: string) => void;
} & HTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({
  label,
  name,
  value = '',
  fullWidth = false,
  readonly,
  required,
  type = 'text',
  onChange,
}) => {
  const handleChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => {
    onChange?.(target.value);
  }, []);

  return (
    <TextField
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
