import { useState, useEffect } from "react"
import FileInput from "components/global/Input/FileInput/FileInput"
import PetsThumbnails from "./PetsThumbnails/PetsThumbnails"
import ImageCropModal from "./ImageCropModal/ImageCropModal"
import { PixelCrop } from "react-image-crop"

const PetImagesUpload = () => {
  const [convertedImages, setConvertedImages] = useState<string[] | undefined>()
  const [fileNames, setFileNames] = useState<string[]>([])
  const [modalIsVisibe, setModalIsVisible] = useState(false)
  const [thumbnail, setThumbnail] = useState<string[]>([])

  const openModalHandler = () => {
    if (convertedImages) {
      setModalIsVisible(true)
    }
  }

  useEffect(() => {
    openModalHandler()
  }, [convertedImages])

  const closeModalHandler = () => {
    setModalIsVisible(false)
  }

  const uploadImageHandler = (uploadedImages: FileList) => {
    convertToBase64(uploadedImages)
    openModalHandler()
  }

  const onCancelCrop = () => {
    setModalIsVisible(false)
    setConvertedImages(undefined)
  }

  const removeThumbnailHandler = (id: number) => {
    const updatedThumbnailsArray = thumbnail.filter(
      (item) => item !== thumbnail[id]
    )

    setThumbnail(updatedThumbnailsArray)
  }

  const convertToBase64 = (uploadedImages: FileList) => {
    const newImagesArray = Array.from(uploadedImages)

    newImagesArray.map((file) => {
      setFileNames((prevState) => [...prevState, file.name])
    })

    const newBase64Array: string[] = []
    newImagesArray.forEach((file: File) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (typeof reader.result === "string") {
          newBase64Array.push(reader.result)
          if (newBase64Array.length === newImagesArray.length) {
            setConvertedImages(newBase64Array)
          }
        }
      }
    })
  }

  const handleImageCrop = (imageIndex: number, completedCrop: PixelCrop) => {
    const image = document.createElement("img")
    image.src = convertedImages![imageIndex] as string

    const canvas = document.createElement("canvas")
    const scaleX = image.naturalWidth / image.width!
    const scaleY = image.naturalHeight / image.height!
    canvas.width = completedCrop!.width!
    canvas.height = completedCrop!.height!

    const ctx = canvas.getContext("2d")!
    ctx.drawImage(
      image,
      completedCrop!.x * scaleX,
      completedCrop!.y * scaleY,
      completedCrop!.width! * scaleX,
      completedCrop!.height! * scaleY,
      0,
      0,
      completedCrop!.width!,
      completedCrop!.height!
    )

    canvas.toBlob(
      () => {
        const base64String = canvas.toDataURL()
        const byteString = atob(base64String.split(",")[1])
        const arrayBuffer = new ArrayBuffer(byteString.length)
        const uintArray = new Uint8Array(arrayBuffer)
        for (let i = 0; i < byteString.length; i++) {
          uintArray[i] = byteString.charCodeAt(i)
        }
        const newFile = new File([arrayBuffer], fileNames[imageIndex], {
          type: "image/jpeg",
        })
        const reader = new FileReader()
        reader.readAsDataURL(newFile)

        reader.onload = () => {
          setThumbnail([...thumbnail, reader.result as string])
        }
      },
      "image/jpeg",
      1
    )
  }

  return (
    <>
      <FileInput
        name="images"
        placeholder="Upload"
        uploadImage={uploadImageHandler}
        margin="Medium"
        variant="XLarge"
      />
      {thumbnail.length ? (
        <PetsThumbnails
          removeThumbnailHandler={removeThumbnailHandler}
          images={[...thumbnail]}
        />
      ) : null}
      {modalIsVisibe && (
        <ImageCropModal
          onCloseModal={closeModalHandler}
          images={convertedImages!}
          onImageCrop={handleImageCrop}
          onCancelCrop={onCancelCrop}
        />
      )}
    </>
  )
}

export default PetImagesUpload
