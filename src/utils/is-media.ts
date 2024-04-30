import { Media } from "@/payload-types";

export const isMedia = (image: unknown): image is Media => {
  // generate the typeguard for image that is type of Media
  return (
    image !== null &&
    typeof image === "object" &&
    "altText" in image &&
    "url" in image &&
    "width" in image &&
    "height" in image
  );
};
