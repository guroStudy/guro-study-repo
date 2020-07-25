import React, { useEffect } from 'react';
import './style.scss';
import { MdClose } from 'react-icons/md';

const Modal = ({
  modalInfo: { isOpen, position, cat },
  closeModal,
}: {
  modalInfo: ModalInfoType;
  closeModal: () => void;
}) => {
  useEffect(() => {
    const modal = document.getElementsByClassName('modal')[0] as HTMLDivElement;
    const imgContainer = document.querySelector('.modal .img') as HTMLDivElement;
    const img = document.querySelector('.modal img') as HTMLImageElement;

    // open
    if (isOpen) {
      modal.style.left = position.left + 'px';
      modal.style.top = position.top + 'px';
      modal.style.width = position.width + 'px';
      modal.style.height = position.height + 'px';

      imgContainer.style.width = modal.style.width;
      imgContainer.style.height = modal.style.height;
      img.className = '';
      img.src = cat.url;

      img.onload = function () {
        if (
          (img.naturalWidth / img.naturalHeight / imgContainer.offsetWidth) * imgContainer.offsetHeight >
          1
        ) {
          img.classList.add('horizontal');
        } else {
          img.classList.add('vertical');
        }
      };

      setTimeout(() => {
        imgContainer.style.height = imgContainer.offsetWidth * (img.naturalHeight / img.naturalWidth) + 'px';
        imgContainer.style.transition = 'all 0.3s';
        img.classList.toggle('vertical');
        img.classList.toggle('horizontal');
        modal.style.transition = 'all 0.3s';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
      }, 200);
    }
    // close
    else {
      modal.style.transition = 'all 0s';
      modal.style.width = '0%';
      modal.style.height = '0%';
      imgContainer.style.transition = 'all 0s';
    }
  }, [isOpen, position]);

  const breed = (cat && cat.breeds && cat.breeds[0]) || null;

  return (
    <div className={`modal ${isOpen ? 'open' : 'close'}`}>
      <div className="img">
        <img src="" alt="cat" />
      </div>
      <div className="content">
        {breed !== null && (
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
  );
};

export default React.memo(Modal);
