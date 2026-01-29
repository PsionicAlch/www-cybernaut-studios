import { Suspense, useMemo, type JSX } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";

import { useRouter } from "../router/RouterContext";
import AboutSection0 from "../sections/about/section0";
import AboutSection1 from "../sections/about/section1";
import AboutSection2 from "../sections/about/section2";
import AboutSection3 from "../sections/about/section3";
import AboutSection4 from "../sections/about/section4";
import AboutSection5 from "../sections/about/section5";
import AboutExperienceSection from "../experiences/about/section";
import Loader from "../experiences/components/Loader";
import Head from "../components/Head";
import Title from "../components/Title";

export default function About() {
  const { hash, setHash } = useRouter();
  const sections = useMemo<Record<string, JSX.Element>>(
    () => ({
      "": <AboutSection0 onNext={() => setHash("philosophy")} />,
      philosophy: (
        <AboutSection1
          onNext={() => setHash("approach")}
          onPrevious={() => setHash("")}
        />
      ),
      approach: (
        <AboutSection2
          onNext={() => setHash("positioning")}
          onPrevious={() => setHash("philosophy")}
        />
      ),
      positioning: (
        <AboutSection3
          onNext={() => setHash("selectiveness")}
          onPrevious={() => setHash("approach")}
        />
      ),
      selectiveness: (
        <AboutSection4
          onNext={() => setHash("contact")}
          onPrevious={() => setHash("positioning")}
        />
      ),
      contact: <AboutSection5 onPrevious={() => setHash("selectiveness")} />,
    }),
    [setHash],
  );
  const section = useMemo(() => {
    if (sections[hash]) {
      return sections[hash];
    } else {
      return sections[""];
    }
  }, [sections, hash]);

  return (
    <>
      <Head>
        <Title>About Us | Cybernaut Studio</Title>
      </Head>
      
      <div className="w-full h-full flex flex-col justify-center">
        {section}
      </div>

      <div className="w-full h-full">
        <Canvas camera={{ fov: 35 }}>
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.3, 0]} />

          <Suspense fallback={<Loader />}>
            <AboutExperienceSection />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
