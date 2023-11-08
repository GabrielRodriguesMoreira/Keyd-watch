'use client'
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(Cookies.get('cookieConsent'));

  useEffect(() => {
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 });
    setShowBanner(false);
    setCookieConsent('accepted');
  };

  const handleDeclineCookies = () => {
    Cookies.set('cookieConsent', 'declined', { expires: 365 });
    setShowBanner(false);
    setCookieConsent('declined');
  };

  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 right-0 bg-purple-700 text-white p-4">
        <p className='text-lg mb-2'>
          This website uses cookies to ensure you get the best experience. By
          using our website, you consent to our use of cookies.
        </p>
        <button
          className="ml-4 bg-zinc-950 text-white px-4 py-2 rounded hover:bg-opacity-75"
          onClick={handleAcceptCookies}
        >
          Accept
        </button>
        <button
          className="ml-2 bg-zinc-950 text-white px-4 py-2 rounded hover:bg-opacity-75"
          onClick={handleDeclineCookies}
        >
          Decline
        </button>
      </div>
    )
  );
};

export default CookieConsent;
