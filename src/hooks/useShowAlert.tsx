import { useRef, useState } from "react";

type Ialert = {
  isVisible: boolean;
  text: string;
};

const alertStyles = {
  container: {
    border: "1px solid red",
    backgroundColor: "tomato",
    padding: "5px 20px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
    color: "white",
  },
  X: {
    cursor: "pointer",
  },
};

export const useShowAlert = (time: number = 5500) => {
  const timeoutRef = useRef<number | undefined>();
  const [modal, setModal] = useState<Ialert>({
    isVisible: false,
    text: "",
  });

  const cleanAlert = () => {
    setModal({ isVisible: false, text: "" });
  };

  const showModal = (value: string): void => {
    timeoutRef.current && clearInterval(timeoutRef.current);
    setModal({ isVisible: true, text: value });
    timeoutRef.current = window.setTimeout(() => {
      cleanAlert();
    }, time);
  };

  const showAlert = () => {
    const alert = (
      <div style={alertStyles.container}>
        <p>{modal.text} </p>
        <span
          style={alertStyles.X}
          onClick={() => {
            timeoutRef.current && clearInterval(timeoutRef.current);
            cleanAlert();
          }}
        >
          X
        </span>
      </div>
    );
    return modal.isVisible && alert;
  };

  return {
    showModal,
    alertText: modal.text,
    isVisible: modal.isVisible,
    showAlert,
  } as const;
};
