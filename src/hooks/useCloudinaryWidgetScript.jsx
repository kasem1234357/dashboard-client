import { useEffect } from "react";
import { useState } from "react";

function useCloudinaryWidgetScript() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (window.cloudinary) {
      setReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
    script.onload = () => setReady(true);
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return ready;
}
export default useCloudinaryWidgetScript;