import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Subject } from "rxjs";

export const IS_LOADING$ = new Subject<boolean>();

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let loadingSubscription = IS_LOADING$.subscribe((value) => {
      setIsLoading(value);
    });
    return () => {
      loadingSubscription.unsubscribe();
    };
  }, [isLoading]);

  return (
    <>
      <div className={isLoading ? "overlay" : ""}></div>
      <Spinner
        className="spinner"
        animation="border"
        hidden={!isLoading}
        variant="primary"
      />
    </>
  );
}
