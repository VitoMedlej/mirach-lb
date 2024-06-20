import { cache } from 'react';

export const Getcategories = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-categories`,{next:{revalidate:5}});
  const data = await res.json();
  return data;
});