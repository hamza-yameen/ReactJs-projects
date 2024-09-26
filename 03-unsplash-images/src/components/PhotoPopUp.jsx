import React from 'react'
import Modal from './Modal'

const PhotoPopUp = ({ img, imgAlt, setIsOpen }) => {
  return (
    <Modal setIsOpen={setIsOpen}>
      <img src={img} alt={imgAlt} className="rounded-lg w-96 h-auto" />
    </Modal>
  )
}

export default PhotoPopUp
