'use client';

import { useUrlRedirect } from '@/hooks/useUrlRedirect';

export default function Client() {
  const { url, seconds } = useUrlRedirect(5);
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start'>
        <p className='text-center text-4xl font-bold'>This is a back page.</p>
        <p className='text-center text-2xl'>
          It will redirect you to {url} in {seconds} seconds.
        </p>
      </main>
    </div>
  );
}
