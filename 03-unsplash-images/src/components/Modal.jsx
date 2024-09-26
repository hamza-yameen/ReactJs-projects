import ReactDOM from 'react-dom'
import crossIcon from '../assets/cross-icon.png'

const Backdrop = ({ setIsOpen }) => {
  return (
    <div
      className="fixed left-0 top-0 z-20 size-full bg-bgbackdrop"
      onClick={setIsOpen}
    ></div>
  )
}

const ModalOverlay = ({ children, setIsOpen }) => {
  return (
    <div className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-1 shadow-md">
      <div className="size-full">
        <div>
          <img
            src={crossIcon}
            alt="cross icon"
            className="float-end mb-2 size-6"
            onClick={setIsOpen}
          />
        </div>
        <div className="size-full">{children}</div>
      </div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = ({ setIsOpen, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop setIsOpen={setIsOpen} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay setIsOpen={setIsOpen}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
