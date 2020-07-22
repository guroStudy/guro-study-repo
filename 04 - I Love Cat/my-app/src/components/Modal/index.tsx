import React, { useEffect } from 'react'
import './style.scss'
import { MdClose } from 'react-icons/md'

const Modal = ({ modalInfo: { isOpen, position, cat }, closeModal }: any) => {
  useEffect(() => {
    const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement

    // open
    if (isOpen) {
      modal.style.left = position.left + 'px'
      modal.style.top = position.top + 'px'
      modal.style.width = position.width + 'px'
      modal.style.height = position.height + 'px'

      const imgContainer = document.querySelector('.modal .img') as HTMLDivElement
      const img = document.querySelector('.modal img') as HTMLImageElement
      img.src = cat.url
      img.className = ''
      if ((img.naturalWidth / img.naturalHeight / imgContainer.offsetWidth) * imgContainer.offsetHeight > 1) {
        img.classList.add('horizontal')
      } else {
        img.classList.add('vertical')
      }

      setTimeout(() => {
        img.classList.toggle('horizontal')
        img.classList.toggle('vertical')
        modal.style.transition = 'all 0.4s'
        modal.style.left = '0'
        modal.style.top = '0'
        modal.style.width = '100%'
        modal.style.height = '100%'
      }, 200)
    }
    // close
    else {
      modal.style.transition = 'all 0s'
      modal.style.width = '0%'
      modal.style.height = '0%'
    }
  }, [isOpen, position])

  const breed = cat.breeds ? cat.breeds[0] : null

  return (
    <div className={`modal ${isOpen ? 'open' : 'close'}`}>
      <div className="img">
        <img src="" alt="cat" />
      </div>
      <div className="content">
        {breed && (
          <>
            <h2>
              {breed.name} / {breed.origin}
            </h2>
            <p>{breed.description}</p>
            <button className="close-btn" onClick={closeModal}>
              <MdClose />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default React.memo(Modal)
