import * as S from "./ImageCropModal.styled"
import React, { useState, useRef } from "react"
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop"

import "react-image-crop/dist/ReactCrop.css"
import CardHeading from "components/global/CardHeading/CardHeading"
import CardFooter from "components/global/CardFooter/CardFooter"
import { ReactComponent as CloseButtonIcon } from "assets/icons/CloseButtonIcon.svg"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  )
}

type ImageCropModalTypes = {
  images: string[]
  onCloseModal: () => void
  onImageCrop: (imageIndex: number, completedCrop: PixelCrop) => void
  onCancelCrop: () => void
}

const ImageCropModal = ({
  images,
  onCloseModal,
  onImageCrop,
  onCancelCrop,
}: ImageCropModalTypes) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [imageIndex, setImageIndex] = useState(0)
  const isLastImage = images.length === imageIndex + 1
  const aspect = 2 / 3

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  const nextImageHandler = () => {
    increaseImageIndex()
    onImageCrop(imageIndex, completedCrop!)

    if (isLastImage) {
      handleCompleteCrop()
    }
  }

  const increaseImageIndex = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1)
    }
  }

  const handleCompleteCrop = () => {
    onCloseModal()
  }

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <CardHeading title="Edytuj zdjęcie">
          <ButtonComponent
            type="button"
            onClick={onCancelCrop}
            className="secondary"
            maxWidth="3.2rem"
          >
            <CloseButtonIcon />
          </ButtonComponent>
        </CardHeading>
        {
          <ReactCrop
            crop={crop}
            ruleOfThirds
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={images[imageIndex]}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        }
        <CardFooter>
          <ButtonComponent
            className="secondary"
            onClick={onCancelCrop}
            maxWidth="8rem"
            size="Large"
          >
            Anuluj
          </ButtonComponent>
          <ButtonComponent
            className="primary"
            size="Large"
            onClick={nextImageHandler}
            maxWidth="16rem"
          >
            Dodaj zdjęcie
          </ButtonComponent>
        </CardFooter>
      </S.ImageContainer>
    </S.Wrapper>
  )
}

export default ImageCropModal
