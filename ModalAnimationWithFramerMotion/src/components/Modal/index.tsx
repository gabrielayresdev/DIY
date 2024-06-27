import React from "react";
import { AnimatePresence } from "framer-motion";
import { Container, Content } from "./styles";

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
} & React.PropsWithChildren;

export const Modal = ({ children, visible, setVisible }: Props) => {
  const modal = {
    hidden: { opacity: 0, translateY: 100 },
    visible: { opacity: 1, translateY: 0 },
  };

  const background = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function closeModal(event: MouseEvent) {
      const { target } = event;
      if (
        !(
          modalRef.current?.contains(target as Node) ||
          modalRef.current === target
        )
      ) {
        setVisible(false);
      }
    }

    // setTimeout prevents the modal to close at the first click
    if (visible) setTimeout(() => window.addEventListener("click", closeModal));
    else window.removeEventListener("click", closeModal);

    return () => {
      window.removeEventListener("click", closeModal);
    };
  }, [visible, setVisible]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setVisible(false)}>
      {visible ? (
        <Container
          variants={background}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Content
            variants={modal}
            initial="hidden"
            animate="visible"
            ref={modalRef}
            exit="hidden"
          >
            {children}
          </Content>
        </Container>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
