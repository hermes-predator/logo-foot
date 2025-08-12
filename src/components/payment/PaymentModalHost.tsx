import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PaymentModal from "./PaymentModal";

const PaymentModalHost: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Ouvre via événement global
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-payment-modal", handler as EventListener);
    return () => window.removeEventListener("open-payment-modal", handler as EventListener);
  }, []);

  // Ouvre/ferme via query param ?pay=1 sur n'importe quelle page
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const shouldOpen = params.get("pay") === "1";
    setOpen(shouldOpen);
  }, [location.search]);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    const url = new URL(window.location.href);
    if (next) {
      url.searchParams.set("pay", "1");
    } else {
      url.searchParams.delete("pay");
    }
    window.history.replaceState({}, "", url.toString());
  };

  return <PaymentModal open={open} onOpenChange={handleOpenChange} />;
};

export default PaymentModalHost;
