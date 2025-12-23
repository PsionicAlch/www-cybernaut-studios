import { BlackHoleDiscMaterial } from "./BlackHoleDiscMaterial";
import { BlackHoleParticlesMaterial } from "./BlackHoleParticlesMaterial";
import { StarsMaterial } from "./StarsMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    blackHoleDiscMaterial: React.PropsWithoutRef<
      JSX.IntrinsicElements["meshStandardMaterial"]
    > &
      Partial<typeof BlackHoleDiscMaterial>;

    blackHoleParticlesMaterial: React.PropsWithoutRef<
      JSX.IntrinsicElements["meshStandardMaterial"]
    > &
      Partial<typeof BlackHoleParticlesMaterial>;

    starsMaterial: React.PropsWithoutRef<
      JSX.IntrinsicElements["meshStandardMaterial"]
    > &
      Partial<typeof StarsMaterial>;
  }
}
