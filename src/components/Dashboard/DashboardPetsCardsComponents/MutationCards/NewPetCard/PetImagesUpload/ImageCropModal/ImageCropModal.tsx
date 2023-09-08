import * as S from "./ImageCropModal.styled"
import React, { useState, useRef, useEffect } from "react"
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
import { ReactComponent as PetsApproveIcon } from "assets/icons/PetsApproveIcon.svg"
import theme from "layout/theme"

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
  onImageCrop: (
    imageIndex: number,
    completedCrop: PixelCrop,
    width: number,
    height: number
  ) => void
  onCancelCrop: () => void
}

const ImageCropModal = ({
  images,
  onCloseModal,
  onImageCrop,
  onCancelCrop,
}: ImageCropModalTypes) => {
  const imgRef = useRef<HTMLImageElement>(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
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
    onImageCrop(imageIndex, completedCrop!, width, height)

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

  useEffect(() => {
    if (imgRef.current) {
      const computedStyle = window.getComputedStyle(imgRef.current)
      const width = computedStyle.getPropertyValue("width")
      const height = computedStyle.getPropertyValue("height")
      const numericValueWidth = parseFloat(width)
      const numericValueHeight = parseFloat(height)

      setWidth(numericValueWidth)
      setHeight(numericValueHeight)
    }
  }, [imgRef])

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
            maxHeight={1280}
            maxWidth={720}
          >
            <img
              ref={imgRef}
              alt="Zdjęcie zwierzaka"
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
            <PetsApproveIcon
              fill={theme.colors.white}
              style={{ marginRight: "0.4rem" }}
            />
            Dodaj zdjęcie
          </ButtonComponent>
        </CardFooter>
      </S.ImageContainer>
    </S.Wrapper>
  )
}

export default ImageCropModal
