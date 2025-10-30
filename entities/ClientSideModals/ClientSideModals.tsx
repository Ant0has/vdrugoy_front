'use client';

import { useEffect, useState } from 'react';
import QuestionModal from '../modals/QuestionModal/QuestionModal';
import OrderModal from '../modals/OrderModal/OrderModal';

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