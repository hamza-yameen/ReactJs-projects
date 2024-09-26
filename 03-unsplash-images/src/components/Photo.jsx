import React, { useState } from 'react'
import PhotoPopUp from './PhotoPopUp'

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    profile_image: { medium },
  },
}) => {
  const [showPhotoPopUp, setShowPhotoPopUp] = useState(false)

  return (
    <>
      {showPhotoPopUp && (
        <PhotoPopUp
          img={regular}
          imgAlt={alt_description}
          setIsOpen={() => setShowPhotoPopUp(false)}
        />
      )}
      <article className="relative mb-5 h-64 w-1/3 overflow-hidden">
        <img
          className="size-full object-cover"
          src={regular}
          alt={alt_description}
          onClick={() => setShowPhotoPopUp(true)}
        />
        <div className="absolute inset-x-0 bottom-0 w-full bg-bghover px-3 pb-1 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="mb-1 font-bold text-white">{name}</h4>
              <p className="text-gray-300">{likes} likes</p>
            </div>
            <img className="size-8 rounded-full" src={medium} alt="" />
          </div>
        </div>
      </article>
    </>
  )
}

export default Photo
