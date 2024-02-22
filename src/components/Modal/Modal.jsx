import React, { useEffect } from "react";
import { CloseButton, ModalContent, ModalWrapper } from "./Modal.styled";

export const Modal = (children, closeModal, title) => {
  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) closeModal();
  };

  useEffect(() => {
    const handleKeyDowm = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDowm);
    return document.removeEventListener("keydown");
  }, [closeModal]);

  return (
    <ModalWrapper onClick={handleBackdropClick}>
      <ModalContent>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <CloseButton onClick={closeModal}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

// class Modal extends React.Component {
//   componentDidMount() {
//     console.log("open");
//     document.addEventListener("keydown", this.handleKeyDowm);
//   }
//   componentWillUnmount() {
//     console.log("close");
//     document.removeEventListener("keydown", this.handleKeyDowm);
//   }
//   handleBackdropClick = (e) => {
//     if (e.currentTarget === e.target) this.props.closeModal();
//   };
//   handleKeyDowm = (e) => {
//     if (e.key === "Escape") this.props.closeModal();
//   };
//   render() {
//     const { children, closeModal, title } = this.props;
//     return (
//       <ModalWrapper onClick={this.handleBackdropClick}>
//         <ModalContent>
//           <>
//             <h1>{title}</h1>
//             <hr />
//           </>
//           <CloseButton onClick={closeModal}>×</CloseButton>
//           {children}
//         </ModalContent>
//       </ModalWrapper>
//     );
//   }
// }

// const Modal = ({ children }) => {
//   return (
//     <ModalWrapper>
//       <ModalContent>
//         <>
//           <h1>Modal</h1>
//           <hr />
//         </>
//         <CloseButton>×</CloseButton>
//         {children}
//       </ModalContent>
//     </ModalWrapper>
//   );
// };

export default Modal;
