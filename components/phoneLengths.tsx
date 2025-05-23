// phoneLengths.ts (or inside the component file)
export const phoneLengths: Record<
  string,
  { minLength: number; maxLength: number; blocked?: boolean }
> = {
  "1": { minLength: 10, maxLength: 10 }, // USA
  "234": { minLength: 10, maxLength: 11 }, // Nigeria
  "44": { minLength: 10, maxLength: 10 }, // UK
  "971": { minLength: 9, maxLength: 9 }, // UAE
  "233": { minLength: 9, maxLength: 9 }, // GHA

  // Add all your countries here...
  "999": { minLength: 6, maxLength: 10, blocked: true }, // Example blocked country
};
