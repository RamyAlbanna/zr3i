import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Subject } from "rxjs";

export const ERROR_MESSAGE$ = new Subject<string>();

export default function Toaster() {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let errorSubscription = ERROR_MESSAGE$.subscribe((value) => {
      setErrorMessage(value);
    });
    return () => {
      errorSubscription.unsubscribe();
    };
  }, [errorMessage]);

  return (
    <ToastContainer position="top-end" style={{ padding: 30 }}>
      <Toast
        bg="danger"
        onClose={() => setErrorMessage("")}
        color="primary"
        show={errorMessage !== ""}
        className="text-white"
        autohide
      >
        <Toast.Body>{errorMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
