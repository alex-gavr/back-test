'use client';

import { useRef } from 'react';

interface HistoryManipulationOptions {
  pushBackFn: () => void;
}

export function useHistoryManipulation({ pushBackFn }: HistoryManipulationOptions) {
  const isHistoryPushedRef = useRef(false);

  const handlePushState = () => {
    if (isHistoryPushedRef.current) return;

    const { pathname } = window.location;
    const searchParams = window.location.search;
    const pathnameWithSearchParams = `${pathname}${searchParams}`;

    try {
      window.history.pushState(null, '', `${pathnameWithSearchParams}`);
      pushBackFn();
      window.history.pushState(null, '', `${pathnameWithSearchParams}`);
      isHistoryPushedRef.current = true;
    } catch (error) {
      console.error('Reverse pushStateToHistory error:', error);
    }
  };

  return { handlePushState };
}
