export const FormMode = {
  NEW: 'new',
  VIEW: 'view',
  EDIT: 'edit',
} as const;
export type FormModeType = (typeof FormMode)[keyof typeof FormMode];
