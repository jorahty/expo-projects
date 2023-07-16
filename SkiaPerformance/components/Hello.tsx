import { Canvas, Group, Image, useImage } from '@shopify/react-native-skia';

const ImageDemo = () => {
  const image = useImage(require('../assets/lady.png'));
  return (
    <Canvas style={{ flex: 1 }}>
      {image && (
        <Group>
          <Image
            image={image}
            fit="contain"
            x={0}
            y={0 + 100}
            width={256}
            height={256}
          />
          <Image
            image={image}
            fit="contain"
            x={10}
            y={10 + 100}
            width={256}
            height={256}
          />
          <Image
            image={image}
            fit="contain"
            x={20}
            y={20 + 100}
            width={256}
            height={256}
          />
        </Group>
      )}
    </Canvas>
  );
};

export default ImageDemo;
