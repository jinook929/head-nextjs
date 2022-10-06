import Image from "next/image";

const AcfImageBlock = ({ src, alt, width, height, layout }) => {
  return (
    <Image src={src} alt={alt} width={width} height={height} layout={layout} />
  );
};

export default AcfImageBlock;
