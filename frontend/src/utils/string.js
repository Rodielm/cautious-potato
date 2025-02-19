export const formatCamelCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before uppercase letters
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
