'use client';

import { pushBack } from '@/app/pushBack';
import { useBackButtonHandler } from '@/hooks/useBackButtonHandler';
import { useHistoryManipulation } from '@/hooks/useHistoryManipulation';
import { useUrlRedirect } from '@/hooks/useUrlRedirect';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface BackTestPageProps {
  useCurrentPath?: boolean;
  showRedirectInfo?: boolean;
  redirectSeconds?: number;
  mainButtonText?: string;
  backButtonText?: string;
}

export function BackTestPage({
  useCurrentPath = false,
  showRedirectInfo = false,
  redirectSeconds = 5,
  mainButtonText = 'Main Exit',
  backButtonText = 'window.history.back()',
}: BackTestPageProps) {
  const router = useRouter();
  const pushBackFn = () => pushBack({ useCurrentPath });
  const { handlePushState } = useHistoryManipulation({ pushBackFn });
  const { onClick } = useBackButtonHandler({ pushBackFn });
  const { url, seconds } = useUrlRedirect(redirectSeconds);

  useEffect(() => {
    handlePushState();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <div className='flex gap-4 items-center flex-col-reverse sm:flex-row-reverse'>
        <button
          onClick={() => onClick()}
          className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'
        >
          {mainButtonText}
        </button>
        <button
          onClick={() => router.back()}
          className='px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors'
        >
          {backButtonText}
        </button>
      </div>
      {showRedirectInfo && url && (
        <div className='text-center text-2xl'>
          It will redirect you to {url} in {seconds} seconds.
        </div>
      )}
    </div>
  );
}
