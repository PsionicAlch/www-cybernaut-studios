import { EarthMaterial } from "./EarthMaterial";
import { AtmosphereMaterial } from "./AtmosphereMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    earthMaterial: React.PropsWithoutRef<
      JSX.IntrinsicElements["meshStandardMaterial"]
    > &
      Partial<typeof EarthMaterial>;

    atmosphereMaterial: React.PropsWithoutRef<
      JSX.IntrinsicElements["meshStandardMaterial"]
    > &
      Partial<typeof AtmosphereMaterial>;
  }
}
