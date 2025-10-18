import React, { useEffect, useState } from "react";

export default function Loader() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000); // after 4 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-1 flex flex-col items-center justify-center bg-opacity-70 backdrop-blur-sm z-50">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin"></div>

      {/* Extra message after 4s */}
      {showMessage && (
        <p className="mt-4 text-white text-sm animate-pulse">
          Getting the Page, please wait...
        </p>
      )}
    </div>
  );
}
