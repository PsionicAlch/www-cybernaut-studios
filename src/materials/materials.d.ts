import { BlackHoleDiscMaterial } from "./BlackHoleDiscMaterial";
import { BlackHoleParticlesMaterial } from "./BlackHoleParticlesMaterial";
import type { EarthMaterial } from "./EarthMaterial";
import { StarsMaterial } from "./StarsMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    earthMaterial: React.PropsWithoutRef<
      JSX.IntrinsicElements["meshStandardMaterial"]
    > &
      Partial<typeof EarthMaterial>;
  }
}
