// Fade.js

import React, { useEffect, useState } from "react";

export default function Fade({ show, children }) {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        className={show ? "fadeIn": "fadeOut"}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};