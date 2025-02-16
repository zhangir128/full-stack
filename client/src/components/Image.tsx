import { IKImage } from "imagekitio-react";

interface ImageProps {
  src: string; // The image source path
  className?: string; // Optional CSS class
  w?: string; // Optional width
  h?: string; // Optional height
  alt: string; // Alt text for the image
}

const Image: React.FC<ImageProps> = ({ src, className, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
    />
  );
};

export default Image;
