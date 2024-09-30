type Searchable = {
  [key: string]: string | string[] | Record<string, string>;
};

export const filterItems = <T extends Searchable>(
  items: T[],
  searchTerm: string,
  fields: (keyof T)[]
): T[] => {
  const lowercasedSearchTerm = searchTerm.toLowerCase();

  return items.filter((item) =>
    fields.some((field) => {
      const value = item[field];
      if (typeof value === "string") {
        return value.toLowerCase().includes(lowercasedSearchTerm);
      }
      if (Array.isArray(value)) {
        return value.some((v) =>
          v.toLowerCase().includes(lowercasedSearchTerm)
        );
      }
      if (typeof value === "object" && value !== null) {
        return Object.entries(value).some(
          ([key, val]) =>
            key.toLowerCase().includes(lowercasedSearchTerm) ||
            val.toLowerCase().includes(lowercasedSearchTerm)
        );
      }
      return false;
    })
  );
};
