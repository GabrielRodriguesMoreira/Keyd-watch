'use client'
import React, { createContext, useContext, useState } from 'react';

const SideModalContext = createContext();

export function ContextProvider({ children }) {
  const [liveId, setLiveId] = useState(null);

  return (
    <SideModalContext.Provider value={{ liveId, setLiveId }}>
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
