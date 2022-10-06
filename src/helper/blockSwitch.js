import AcfImageBlock from "../../components/blocks/AcfImageBlock";
import CoreImageBlock from "../../components/blocks/CoreImageBlock";

export default function BlockSwitch(block, i) {
  switch (block.name) {
    case "acf/image-block":
      const acfImageData = JSON.parse(block.dynamicContent).acf_image;
      const url = acfImageData.url;
      const alt = acfImageData.alt;
      const width = acfImageData.width;
      const height = acfImageData.height;
      return (
        <section key={`${i}_${block.name}`} style={{ width: "500px" }}>
          <h2>{block.name}</h2>
          <AcfImageBlock
            src={url}
            alt={alt}
            width={width}
            height={height}
            layout="responsive"
          />
        </section>
      );
    case "core/image":
      const coreImageData = JSON.parse(block.attributesJSON);
      return (
        <section key={`${i}_${block.name}`}>
          <h2>{block.name}</h2>
          <CoreImageBlock
            src={coreImageData.url}
            alt={coreImageData.alt}
            height="100"
          />
        </section>
      );
    default:
      return (
        <h2 key={`${i}_${block.name}`}>
          {block.name} is under construction...
        </h2>
      );
  }
}
