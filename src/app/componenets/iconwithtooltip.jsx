'use client'
import React from 'react';

const IconWithTooltip = ({ icon, text }) => {
  return (
    <div className="relative group inline-block cursor-pointer hover:text-purple-600">
      <span style={{ whiteSpace: 'nowrap' }} className="invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-black text-white text-xs rounded-md py-1 px-2 absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-50">
        {text}
      </span>
      {icon}
    </div>
  );
};

export default IconWithTooltip;
IconWithTooltip.displayName = 'IconWithTooltip';
