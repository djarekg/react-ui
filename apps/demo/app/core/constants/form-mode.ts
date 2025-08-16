export const FormMode = {
  New: 'new',
  Edit: 'edit',
  View: 'view',
} as const;
export type FormModeType = (typeof FormMode)[keyof typeof FormMode];
