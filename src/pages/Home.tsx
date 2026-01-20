import { Suspense, useMemo, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";

import Loader from "../experiences/components/Loader";
import HomeSection0 from "../sections/home/section0";
import HomeSection1 from "../sections/home/section1";
import HomeSection2 from "../sections/home/section2";
import HomeSection3 from "../sections/home/section3";
import HomeSection4 from "../sections/home/section4";
import HomeSection5 from "../sections/home/section5";
import HomeSection6 from "../sections/home/section6";
import HomeSection7 from "../sections/home/section7";
import HomeExperienceSection0 from "../experiences/home/section0";
import HomeExperienceSection1 from "../experiences/home/section1";
import HomeExperienceSection2 from "../experiences/home/section2";
import HomeExperienceSection3 from "../experiences/home/section3";
import HomeExperienceSection4 from "../experiences/home/section4";
import HomeExperienceSection5 from "../experiences/home/section5";
import HomeExperienceSection6 from "../experiences/home/section6";
import HomeExperienceSection7 from "../experiences/home/section7";
import HomeExperienceSection8 from "../experiences/home/section8";
import HomeSection8 from "../sections/home/section8";

export default function HomePage() {
  const [section, setSection] = useState(0);
  const sections = useMemo(
    () => [
      [
        <HomeSection0 onNext={() => setSection(1)} />,
        <HomeExperienceSection0 />,
      ],
      [
        <HomeSection1
          onPrevious={() => setSection(0)}
          onNext={() => setSection(2)}
        />,
        <HomeExperienceSection1 />,
      ],
      [
        <HomeSection2
          onPrevious={() => setSection(1)}
          onNext={() => setSection(3)}
        />,
        <HomeExperienceSection2 />,
      ],
      [
        <HomeSection3
          onPrevious={() => setSection(2)}
          onNext={() => setSection(4)}
        />,
        <HomeExperienceSection3 />,
      ],
      [
        <HomeSection4
          onPrevious={() => setSection(3)}
          onNext={() => setSection(5)}
        />,
        <HomeExperienceSection4 />,
      ],
      [
        <HomeSection5
          onPrevious={() => setSection(4)}
          onNext={() => setSection(6)}
        />,
        <HomeExperienceSection5 />,
      ],
      [
        <HomeSection6
          onPrevious={() => setSection(5)}
          onNext={() => setSection(7)}
        />,
        <HomeExperienceSection6 />,
      ],
      [
        <HomeSection7
          onPrevious={() => setSection(6)}
          onNext={() => setSection(8)}
        />,
        <HomeExperienceSection7 />,
      ],
      [
        <HomeSection8 onPrevious={() => setSection(7)} />,
        <HomeExperienceSection8 />,
      ],
    ],
    []
  );

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center">
        {sections[section][0]}
      </div>

      <div className="w-full h-full">
        <Canvas camera={{ fov: 35 }}>
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.3, 0]} />

          <Suspense fallback={<Loader />}>{sections[section][1]}</Suspense>
        </Canvas>
      </div>
    </>
  );
}
