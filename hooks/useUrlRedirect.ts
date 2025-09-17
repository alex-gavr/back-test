'use client';
import { useEffect, useState } from 'react';

export function useUrlRedirect(countdownSeconds: number = 5) {
  const [url, setUrl] = useState('');
  const [seconds, setSeconds] = useState(countdownSeconds);

  useEffect(() => {
    // if url has url param, redirect to it
    const urlParams = new URLSearchParams(window.location.search);
    const urlParam = urlParams.get('url');
    if (urlParam) {
      setUrl(urlParam);
    }
  }, []);

  useEffect(() => {
    if (!url) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [url]);

  useEffect(() => {
    if (seconds === 0 && url) {
      window.location.href = url;
    }
  }, [seconds, url]);

  return { url, seconds };
}
