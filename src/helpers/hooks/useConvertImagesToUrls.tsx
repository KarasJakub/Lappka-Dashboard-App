import { useEffect, useState } from "react"
import { useGetImagesId, useGetImagesUrl } from "api/pets/petsHooks"

type useConvertImagesToUrlsProps = {
  newImageUrls: string[]
  getImageUrl: (croppedImages: File[]) => void
  imagesIds: any
}

export const useConvertImagesToUrls = (): useConvertImagesToUrlsProps => {
  const [newImageUrls, setNewImageUrls] = useState<string[]>([])

  const {
    mutate: mutateImagesIds,
    data: imagesIds,
    isSuccess: isImagesIdsIsSuccess,
  } = useGetImagesId()

  const {
    mutate: fetchImageUrls,
    data: imageUrls,
    isSuccess: isGetUrlsSuccess,
  } = useGetImagesUrl()

  const getImageUrl = async (croppedImages: File[]) => {
    const formData = new FormData()
    croppedImages.forEach((image) => formData.append("files", image))
    mutateImagesIds(formData)
  }

  useEffect(() => {
    if (isGetUrlsSuccess) {
      setNewImageUrls(imageUrls)
    }
    if (!isGetUrlsSuccess && isImagesIdsIsSuccess) {
      fetchImageUrls(imagesIds!.data)
    }
  }, [
    fetchImageUrls,
    isGetUrlsSuccess,
    isImagesIdsIsSuccess,
    imageUrls,
    imagesIds,
  ])

  return { newImageUrls, getImageUrl, imagesIds }
}
