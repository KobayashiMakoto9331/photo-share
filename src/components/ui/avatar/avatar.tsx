import Image, { ImageProps } from "next/image";
import noImage from "@/assets/images/no-image-avatar.svg";
import { twMerge } from "tailwind-merge";

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: "small" | "medium" | "large";
} & Omit<ImageProps, "src" | "alt">;

export const Avatar = ({
  src: defaultSrc,
  size = "medium",
  alt = "Avatar",
  className,
  ...props
}: AvatarProps) => {
  const src = defaultSrc || noImage;

  return (
    <Image
      {...{ alt, src }}
      {...getSize(size)}
      className={twMerge("rounded-full", className)}
      onError={(e) => console.log(e)}
      priority
      {...props}
    />
  );
};

function getSize(size: AvatarProps["size"] = "medium") {
  const sizes = {
    large: { width: 64, height: 64 },
    medium: { width: 48, height: 48 },
    small: { width: 24, height: 24 },
  };

  return sizes[size];
}
