import { GetLocationStates } from '@/types/graphql.js';
import { useQuery } from '@apollo/client';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { lazy } from 'react';

const ErrorMessage = lazy(() => import('@/components/error/error-message.js'));

type LocationStateSelectProps = {
  readonly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

export default function LocationStateSelect({
  readonly,
  value,
  onChange,
}: LocationStateSelectProps) {
  'use memo';

  const { data: { states = [] } = {}, loading, error } = useQuery(GetLocationStates);

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <FormControl fullWidth>
      <InputLabel id="state-select-label">State</InputLabel>
      <Select
        labelId="state-select-label"
        disabled={readonly}
        size="small"
        value={value}
        onChange={event => onChange?.(event.target.value)}>
        {states.map(state => (
          <MenuItem
            key={state.id}
            value={state.id}>
            {state.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
