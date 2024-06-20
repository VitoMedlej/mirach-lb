import { cache } from 'react';

export const Getproducts = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data?tkn=${process.env.token}`,{next:{revalidate:5}});
  const data = await res.json();
  return data;
});