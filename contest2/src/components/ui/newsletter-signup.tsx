'use client';

import React, { useState } from 'react';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-muted/30 p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-foreground mb-2">Subscribe to our Newsletter</h3>

      {isSubmitted ? (
        <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-3 rounded-md mb-4">
          <p className="text-sm">Thank you for subscribing! We'll keep you updated with the latest hosting tips.</p>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground mb-4">
          Get the latest hosting tips, technical guides, and exclusive offers delivered to your inbox.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting || isSubmitted}
        />
        <button
          type="submit"
          className={`bg-atheneum-red hover:bg-atheneum-red/90 text-white rounded-md px-4 py-2 text-sm font-medium ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting || isSubmitted}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      <p className="text-xs text-muted-foreground mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}
