import React from "react";

// ** Styles **
import "./Modal.scss";

// ** Images **
import Close from "/icons/close.svg";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  children: any;
  height?: string;
  width?: string;
}

const Modal = ({ isOpen, setIsOpen, children, height, width }: Props) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content xf-p-2"
            style={{ height, width }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="xf-flex xf-mb-2">
              <img
                className="xf-cursor-pointer xf-hover xf-ml-auto"
                src={Close}
                alt=""
                height={24}
                width={24}
                onClick={() => setIsOpen(false)}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
