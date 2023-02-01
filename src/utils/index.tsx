export const fetchItems = async <T,>(url: string): Promise<T | undefined> => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
