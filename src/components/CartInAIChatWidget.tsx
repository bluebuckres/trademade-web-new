'use client';

import { useEffect, useRef } from 'react';

const WIDGET_SRC = 'https://app.cartinai.shop/api/widget/sellops.js';

/**
 * Lazy-load CartIn widget after the user interacts, to avoid loading it
 * unnecessarily on every page load.
 */
export function CartInAIChatWidget() {
  const loadOnceRef = useRef(false);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_CARTIN_WIDGET_TOKEN;
    if (!token) return;
    if (loadOnceRef.current) return;

    const scriptAlreadyAdded = document.querySelector(
      'script[data-cartin-ai-widget="true"]',
    );
    if (scriptAlreadyAdded) {
      loadOnceRef.current = true;
      return;
    }

    const loadWidget = () => {
      if (loadOnceRef.current) return;
      loadOnceRef.current = true;

      const script = document.createElement('script');
      script.src = WIDGET_SRC;
      script.async = true;
      script.defer = true;
      script.dataset.cartinAiWidget = 'true';
      script.setAttribute('data-widget-token', token);
      document.head.appendChild(script);
    };

    const onFirstInteract = () => {
      loadWidget();
      window.removeEventListener('pointerdown', onFirstInteract);
      window.removeEventListener('scroll', onFirstInteract);
      window.removeEventListener('keydown', onFirstInteract);
    };

    window.addEventListener('pointerdown', onFirstInteract, { passive: true });
    window.addEventListener('scroll', onFirstInteract, { passive: true });
    window.addEventListener('keydown', onFirstInteract);

    const t = window.setTimeout(loadWidget, 15000);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener('pointerdown', onFirstInteract);
      window.removeEventListener('scroll', onFirstInteract);
      window.removeEventListener('keydown', onFirstInteract);
    };
  }, []);

  return null;
}
