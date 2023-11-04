'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const SideModalContext = createContext();

export function ContextProvider({ children }) {
  const [liveId, setLiveId] = useState(null);
  const [acompanhamento, setAcompanhamento] = useState('twitchChat');

  useEffect(() => {

    //pegar cookie de video
    const videoIdCookie = Cookies.get('videoIdCookie');
        if (videoIdCookie) {
            setLiveId(videoIdCookie);
        }

//pegar cookie do acompanhamento
    const acompanhamentoCookie = Cookies.get('acompanhamentoCookie');
        if (acompanhamentoCookie) {
          setAcompanhamento(acompanhamentoCookie);
        }

  }, [])
  
  return (
    <SideModalContext.Provider value={{ liveId, setLiveId, acompanhamento, setAcompanhamento }}>
      {children}
    </SideModalContext.Provider>
  );
}

export function useSideModal() {
  const context = useContext(SideModalContext);
  if (!context) {
    throw new Error('useSideModal must be used within a ContextProvider');
  }
  return context;
}
