'use client';

import { ReactNode, useState, useEffect } from 'react';

interface ClientBodyProps {
  children: ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
  const [mounted, setMounted] = useState(false);

  // Only handle mounting, no theme support
  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.remove('loading');
  }, []);

  return (
    <>
      {mounted ? children : (
        <div aria-hidden="true" suppressHydrationWarning style={{ visibility: 'hidden' }}>
          {children}
        </div>
      )}
    </>
  );
}
