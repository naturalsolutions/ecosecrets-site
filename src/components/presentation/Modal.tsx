import { PropsWithChildren } from "react";

const Modal = ({
  title,
  children,
}: PropsWithChildren<{ title?: string; children?: string }>) => (
  <div className="modal" tabIndex={-1}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <p>{children}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
