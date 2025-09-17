export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { cookies } from 'next/headers';
import Client from './Client';

export default async function Page() {
  const cookiesList = await cookies();
  console.log('🚀 ~ cookiesList:', cookiesList);
  return <Client />;
}
