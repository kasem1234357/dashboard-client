import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// type KeyEventData = {
//   keyCode: string;
//   shiftKey: boolean;
//   ctrlKey: boolean;
//   callback: () => void;
//   redirect?: string;
// };

const useKeyPress = () => {
  const navigate = useNavigate();
  const [keyCodes, setKeyCodes] = useState<KeyEventData[]>([
    {
      keyCode:'KeyG',
      shiftKey: false,
      ctrlKey: true,
      callback: () => console.log("hi from useState"),
      redirect: "/",
    },
  ]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      keyCodes.forEach((keyData) => {
        if (
          event.ctrlKey === keyData.ctrlKey &&
          event.shiftKey === keyData.shiftKey &&
          event.code === keyData.keyCode
        ) {
          keyData.callback();
          keyData.redirect &&navigate(keyData.redirect);
          
        }
      });
    },
    [keyCodes, navigate]
  );

  const addKeyPressEvent = useCallback(
    (data: KeyEventData) => {

      setKeyCodes((prev) => [...prev,{...data,keyCode:`Key${data.keyCode.toUpperCase()}`} ]);
    },
    []
  );

  useEffect(() => {
    const pressEvent = (e: KeyboardEvent) => {
      handleKeyPress(e);
    };

    // attach the event listener
    document.addEventListener("keydown", pressEvent);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", pressEvent);
    };
  }, [handleKeyPress]);

  return {
    addKeyPressEvent,
    events: keyCodes,
  };
};

export default useKeyPress;