function pushStateToHistory(url: string, times: number = 3) {
  try {
    for (let i = 0; i < times; i += 1) {
      window.history.pushState(null, 'Please wait...', url);
    }
  } catch (error) {
    console.error('Failed to push state, error:', error);
  }
}

export function pushBack(
  options: {
    exitUrl?: string;
    basePath?: string;
    useCurrentPath?: boolean;
  } = {},
) {
  const {
    exitUrl = 'https://www.google.com',
    basePath = '/back',
    useCurrentPath = false,
  } = options;

  const encodedUrl = encodeURIComponent(exitUrl);
  const pathname = useCurrentPath ? window.location.pathname : basePath;

  const backUrl = `${pathname}?url=${encodedUrl}`;
  console.log('[pushBack] computed backUrl:', backUrl);
  pushStateToHistory(backUrl);
}
