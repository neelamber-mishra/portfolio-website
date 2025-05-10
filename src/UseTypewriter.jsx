import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function UseTypewriter(
  words,
  typingSpeed = 150,
  pauseTime = 1500
) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pauseTime);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((v) => !v);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
}
