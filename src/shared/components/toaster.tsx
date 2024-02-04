import { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { Subject } from "rxjs";

export const TOASTER$ = new Subject<{
  type: "success" | "error" | undefined;
  message: string;
}>();

export default function Toaster() {
  const [toasterMessage, setToasterMessage] = useState("");
  const [toasterType, setToasterType] = useState<
    "success" | "error" | undefined
  >(undefined);

  useEffect(() => {
    let toasterSubscription = TOASTER$.subscribe((toaster) => {
      setToasterMessage(toaster.message);
      setToasterType(toaster.type);
    });
    return () => {
      toasterSubscription.unsubscribe();
    };
  }, [toasterMessage]);

  return (
    <ToastContainer position="top-end" style={{ padding: 30 }}>
      <Toast
        bg={toasterType === "error" ? "danger" : "success"}
        onClose={() => {
          setToasterMessage("");
          setToasterType(undefined);
        }}
        color="primary"
        show={toasterMessage !== ""}
        className="text-white"
        autohide
      >
        <Toast.Body>{toasterMessage}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
