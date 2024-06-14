"use client";

import { useEffect, useState } from "react";
import SendUserPM from "../modals/sendPM";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SendUserPM />
    </>
  );
};
