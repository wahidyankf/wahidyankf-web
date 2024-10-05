export function filterItems(
  items: any[],
  searchTerm: string,
  fields: string[] = []
): any[] {
  if (!searchTerm) return items;

  return items.filter((item) =>
    fields.some(
      (field) =>
        item[field] &&
        item[field].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}
