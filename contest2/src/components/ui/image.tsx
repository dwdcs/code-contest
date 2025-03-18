'use client';

import { useState, useEffect } from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { imageConfig } from '@/lib/config';

type ImageProps = NextImageProps & {
  fallbackSrc?: string;
};

export function Image(props: ImageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial client render, return a div with the same dimensions
  // This prevents layout shift and hydration mismatch
  if (!mounted) {
    const placeholderClasses = `image-placeholder ${props.className || ''}`.trim();

    return (
      <div
        style={{
          height: props.height || (props.fill ? '100%' : 'auto'),
          width: props.width || (props.fill ? '100%' : 'auto'),
          position: props.fill ? 'absolute' : 'relative',
          inset: props.fill ? 0 : undefined,
          display: 'block',
        }}
        aria-hidden="true"
        className={placeholderClasses}
      />
    );
  }

  // Apply consistent image config but allow props to override
  const finalProps = {
    ...imageConfig,
    ...props,
    crossOrigin: undefined, // Explicitly ensure crossOrigin is undefined
    loading: props.priority ? 'eager' : (imageConfig.loading || 'lazy') as 'eager' | 'lazy',
    decoding: 'async' as const, // Explicitly type as const to avoid type errors
  };

  // Only render the actual image component on the client
  return <NextImage {...finalProps} />;
}
