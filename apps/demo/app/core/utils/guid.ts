/**
 * Regex pattern to validate GUIDs (Globally Unique Identifiers).
 * A GUID is a 128-bit number used to uniquely identify information in computer systems.
 * The format is typically represented as 8-4-4-4-12 hexadecimal digits
 */
const GUID_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

/**
 * Checks if a given string is a valid GUID.
 *
 * @param {string} value - The string to check.
 * @returns {boolean} - Returns true if the string is a valid GUID, otherwise false.
 */
export const isGuid = (value: string): boolean => {
  return GUID_REGEX.test(value);
};
