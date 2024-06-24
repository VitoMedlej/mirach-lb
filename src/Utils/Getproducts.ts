import { cache } from 'react';

export const Getproducts = cache(async () => {
  try {

  
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-data?tkn=${process.env.token}`,{next:{revalidate:60}});
  const data = await res.json();
  return data;
}
catch(err) {
  console.log('err: ', err);

}
});