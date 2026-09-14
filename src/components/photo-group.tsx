"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import Arrow from "./arrow";
import Photo from "./photo";
import { Photo as PhotoType } from "@/types";

type PhotoGroupProps = {
  photos: PhotoType[];
  /** Passed to each thumbnail's next/image. */
  sizes: string;
  /** Layout classes for the wrapper around the thumbnails. */
  className?: string;
  /** Per-thumbnail classes. */
  itemClassName?: string;
  /** Aspect ratio for the thumbnail crop. */
  frameClassName?: string;
  /** Eager-loads the first photo only — for above-the-fold groups. */
  priority?: boolean;
};

/**
 * A set of thumbnails that open into a full-size preview. The preview is a
 * native <dialog>, so Escape, focus trapping and inertness come for free;
 * arrow keys step through the group.
 */
const PhotoGroup = ({
  photos,
  sizes,
  className,
  itemClassName,
  frameClassName,
  priority,
}: PhotoGroupProps) => {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => setIndex(null), []);

  const step = useCallback(
    (delta: number) =>
      setIndex((current) =>
        current === null
          ? current
          : (current + delta + photos.length) % photos.length,
      ),
    [photos.length],
  );

  // showModal() cannot be set declaratively, so the open state is mirrored
  // onto the dialog after each render.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (index === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [index, step]);

  const active = index === null ? null : photos[index];

  return (
    <>
      <div className={className}>
        {photos.map((photo, position) => (
          <Photo
            key={photo.src}
            photo={photo}
            sizes={sizes}
            frameClassName={frameClassName}
            className={itemClassName}
            priority={priority && position === 0}
            onOpen={() => setIndex(position)}
          />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        // Escape closes the dialog natively; this keeps React in step.
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className={clsx(
          "m-auto max-h-none max-w-none bg-transparent p-4 text-ink-fg backdrop:bg-black/85",
          "open:flex open:flex-col open:items-center open:gap-4",
        )}
      >
        {active && index !== null && (
          <>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
              sizes="90vw"
              className="max-h-[78vh] w-auto max-w-[92vw] rounded-lg object-contain"
            />

            <div className="flex items-center gap-4">
              <p className="label text-ink-muted">{active.caption}</p>
              {photos.length > 1 && (
                <p className="font-mono text-[10px] text-ink-faint tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                  <span className="mx-1 text-ink-line">/</span>
                  {String(photos.length).padStart(2, "0")}
                </p>
              )}
            </div>

            <div className="flex items-center gap-6">
              {photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="p-2 text-ink-dim transition-colors duration-300 hover:text-beer"
                  >
                    <Arrow direction="left" className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="p-2 text-ink-dim transition-colors duration-300 hover:text-beer"
                  >
                    <Arrow className="h-4 w-4" />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={close}
                className="font-mono text-[10px] tracking-widest text-ink-dim uppercase transition-colors duration-300 hover:text-ink-fg"
              >
                Close
              </button>
            </div>
          </>
        )}
      </dialog>
    </>
  );
};

export default PhotoGroup;
