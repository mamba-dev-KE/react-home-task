export const fetchItems = async <T,>(url: string): Promise<T | undefined> => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return data as Promise<T>;
  } catch (error) {
    throw error;
  }
};
