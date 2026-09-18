import { useEffect, useState } from "react";

export default function ImagePopup() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="rounded-lg bg-white p-4 shadow-lg animate-fadeIn">
        <img
          src="images/popup.jpeg"
          alt="Popup"
          className="max-w-[300px] h-auto rounded"
        />
      </div>
    </div>
  );
}
