import type { IImageProps } from "@/shared/components/Image"
import type { imageSizes } from "./ImageMDB.sizes"

export type ImageType = keyof typeof imageSizes
export type ImageTypeSize<K extends ImageType> = keyof (typeof imageSizes)[K]["sizes"]

export interface IImageMDBProps<K extends ImageType>
  extends Omit<IImageProps, "src" | "width" | "height"> {
  imagetype: K
  width: ImageTypeSize<K>
  path: string
}
