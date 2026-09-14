import Image from "next/image";
import clsx from "clsx";

import { Photo as PhotoType } from "@/types";

type PhotoProps = {
  photo: PhotoType;
  /** Passed straight to next/image; the layout decides the real widths. */
  sizes: string;
  priority?: boolean;
  className?: string;
  /** Where the aspect ratio goes — the source files are a mix of shapes. */
  frameClassName?: string;
  /** When set, the frame becomes a button that opens the full-size preview. */
  onOpen?: () => void;
};

/**
 * A framed photograph with a mono caption, cropped to whatever ratio the
 * surrounding layout asks for.
 */
const Photo = ({
  photo,
  sizes,
  priority,
  className,
  frameClassName,
  onOpen,
}: PhotoProps) => {
  const frame = (
    <div
      className={clsx(
        "overflow-hidden rounded-lg border border-ink-line bg-ink-raised",
        frameClassName,
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        priority={priority}
        className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
      />
    </div>
  );

  return (
    <figure className={clsx("group flex flex-col gap-2", className)}>
      {onOpen ? (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`View ${photo.caption} full size`}
          className="block w-full cursor-zoom-in focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-beer"
        >
          {frame}
        </button>
      ) : (
        frame
      )}
      <figcaption className="label text-ink-faint">{photo.caption}</figcaption>
    </figure>
  );
};

export default Photo;
