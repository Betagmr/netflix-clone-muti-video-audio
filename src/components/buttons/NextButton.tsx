import React from 'react';

export function NextButton() {
  return (
    <button className="next">
      <svg viewBox="0 0 24 24">
        <polygon points="5 4 15 12 5 20 5 4"></polygon>
        <line x1="19" y1="5" x2="19" y2="19"></line>
      </svg>
    </button>
  );
}
