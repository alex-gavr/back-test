export const dynamic = 'force-dynamic';

import { BackTestPage } from '@/components/BackTestPage';

export default function Page() {
  return (
    <BackTestPage
      useCurrentPath={true}
      showRedirectInfo={true}
    />
  );
}
