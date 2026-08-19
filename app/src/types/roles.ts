// declaring the different roles that the users can have.
export const roles = [
  "anon", // anonymous
  "student",
  "teacher",
  "volunteer",
  "event_organiser",
] as const;

// Converts the array of role into a type witch the array follows
export type Role = (typeof roles)[number];

// checks if a string is a role returns boolean but also tells the lexer if the passed in value is a Role
export function isRole(value: string): value is Role {
  return roles.includes(value as Role);
}
