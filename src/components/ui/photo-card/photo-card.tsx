import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const photoVariants = cva("", {
  variants: {
    ratio: {
      wide: "aspect-w-16 aspect-h-9",
      square: "aspect-w-1 aspect-h-1",
      portrait: "aspect-w-3 aspect-h-4",
    },
    fit: {
      cover: "object-cover",
      contain: "object-contain",
    },
    rounded: { true: "rounded-lg" },
  },
});

type Props = {
  imageUrl: string;
  title?: string;
  description?: string;
  size?: "small" | "medium" | "large";
  showMeta?: boolean;
  animate?: boolean;
  lineClamp?: 1 | 2 | 3 | 4;
  priority?: boolean;
} & VariantProps<typeof photoVariants>;

const sizes = {
  large: { width: 960, height: 640 },
  medium: { width: 420, height: 280 },
  small: { width: 180, height: 120 },
};

export function PhotoCard({
  ratio = "wide",
  fit = "cover",
  size = "medium",
  rounded = true,
  showMeta = true,
  animate = true,
  lineClamp = 1,
  priority,
  ...photo
}: Props) {
  return (
    <div
      className={cn(
        "group overflow-hidden relative shadow-lg bg-center bg-no-repeat bg-cover",
        photoVariants({ ratio, fit, rounded }),
      )}
    >
      <Image
        src={photo.imageUrl}
        alt={photo.title || ""}
        {...sizes[size]}
        priority={priority}
      />
      {showMeta && (
        <div
          className={clsx(
            "w-full p-4 absolute left-0 bottom-0 bg-white/85",
            animate &&
              "translate-y-full transition-transform duration-200 group-hover:translate-y-0",
          )}
        >
          <p className="text-base font-bold text-center overflow-hidden  line-clamp-1">
            {photo.title}
          </p>
          <p
            className={clsx(
              "text-xs text-center overflow-hidden",
              getLineClamp(lineClamp),
            )}
          >
            {photo.description}
          </p>
        </div>
      )}
    </div>
  );
}

function getLineClamp(lineClamp: number) {
  switch (lineClamp) {
    case 1:
      return "line-clamp-1";
    case 2:
      return "line-clamp-2";
    case 3:
      return "line-clamp-3";
    case 4:
      return "line-clamp-4";
    default:
      return "line-clamp-1";
  }
}
