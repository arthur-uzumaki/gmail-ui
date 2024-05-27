import { Image, ImageProps } from "react-native"
import clsx from 'clsx'


type AvatarProps = ImageProps & {
  size?: "small" | "medium"
}
export function Avatar({ size = 'medium', ...rest }: AvatarProps) {
  return (
    <Image
      {...rest} className={clsx(" rounded-full", {
        "h-8 w-8": size === "small",
        "w-10 h-10": size === "medium"

      })}
    />
  )
}