import Constants from 'expo-constants';
import { Text, View, StyleSheet } from 'react-native';

import { WithSkiaWeb } from '@shopify/react-native-skia/lib/module/web';

export default function App() {
  return (
    <View style={styles.container}>
      <WithSkiaWeb
        getComponent={() => import('./Breath')}
        fallback={<Text style={{ textAlign: 'center' }}>Loading Skia...</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});

// import { Canvas, Circle, Group } from '@shopify/react-native-skia';

// export default function App() {
//   const size = 256;
//   const r = size * 0.33;
//   return (
//     <Canvas style={{ flex: 1 }}>
//       <Group blendMode="multiply">
//         <Circle cx={r} cy={r} r={r} color="cyan" />
//         <Circle cx={size - r} cy={r} r={r} color="magenta" />
//         <Circle cx={size / 2} cy={size - r} r={r} color="yellow" />
//       </Group>
//     </Canvas>
//   );
// }
