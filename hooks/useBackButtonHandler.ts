'use client';
import { useEffect } from 'react';

interface BackButtonHandlerOptions {
  pushBackFn: () => void;
  redirectUrl?: string;
}

export function useBackButtonHandler({
  pushBackFn,
  redirectUrl = 'https://www.github.com',
}: BackButtonHandlerOptions) {
  const handleBackButton = () => {
    pushBackFn();
    window.location.href = redirectUrl;
  };

  const onClick = (url: string = 'https://www.yahoo.com') => {
    pushBackFn();
    window.location.href = url;
  };

  useEffect(() => {
    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return { onClick };
}
