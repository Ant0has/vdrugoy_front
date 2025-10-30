'use client';

import { useEffect, useState } from 'react';
import QuestionModal from "@/shared/components/modals/QuestionModal/QuestionModal";
import OrderModal from "@/shared/components/modals/OrderModal/OrderModal";

export default function ClientSideModals() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <QuestionModal />
      <OrderModal />
    </>
  );
}