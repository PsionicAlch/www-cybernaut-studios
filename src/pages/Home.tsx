import { Suspense, useMemo, type JSX } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";

import { useRouter } from "../router/RouterContext";
import Head from "../components/Head";
import Loader from "../experiences/components/Loader";
import HomeSection0 from "../sections/home/section0";
import HomeSection1 from "../sections/home/section1";
import HomeSection2 from "../sections/home/section2";
import HomeSection3 from "../sections/home/section3";
import HomeSection4 from "../sections/home/section4";
import HomeSection5 from "../sections/home/section5";
import HomeSection6 from "../sections/home/section6";
import HomeSection7 from "../sections/home/section7";
import HomeSection8 from "../sections/home/section8";
import HomeExperienceSection0 from "../experiences/home/section0";
import HomeExperienceSection1 from "../experiences/home/section1";
import HomeExperienceSection2 from "../experiences/home/section2";
import HomeExperienceSection3 from "../experiences/home/section3";
import HomeExperienceSection4 from "../experiences/home/section4";
import HomeExperienceSection5 from "../experiences/home/section5";
import HomeExperienceSection6 from "../experiences/home/section6";
import HomeExperienceSection7 from "../experiences/home/section7";
import HomeExperienceSection8 from "../experiences/home/section8";
import Title from "../components/Title";
import Meta from "../components/Meta";

export default function HomePage() {
  const { hash, setHash } = useRouter();
  const sections = useMemo<Record<string, [JSX.Element, JSX.Element]>>(
    () => ({
      "": [
        <HomeSection0 onNext={() => setHash("section2")} />,
        <HomeExperienceSection0 />,
      ],
      section1: [
        <HomeSection1
          onPrevious={() => setHash("")}
          onNext={() => setHash("section2")}
        />,
        <HomeExperienceSection1 />,
      ],
      section2: [
        <HomeSection2
          onPrevious={() => setHash("section1")}
          onNext={() => setHash("section3")}
        />,
        <HomeExperienceSection2 />,
      ],
      section3: [
        <HomeSection3
          onPrevious={() => setHash("section2")}
          onNext={() => setHash("section4")}
        />,
        <HomeExperienceSection3 />,
      ],
      section4: [
        <HomeSection4
          onPrevious={() => setHash("section3")}
          onNext={() => setHash("section5")}
        />,
        <HomeExperienceSection4 />,
      ],
      section5: [
        <HomeSection5
          onPrevious={() => setHash("section4")}
          onNext={() => setHash("section6")}
        />,
        <HomeExperienceSection5 />,
      ],
      section6: [
        <HomeSection6
          onPrevious={() => setHash("section5")}
          onNext={() => setHash("section7")}
        />,
        <HomeExperienceSection6 />,
      ],
      section7: [
        <HomeSection7
          onPrevious={() => setHash("section6")}
          onNext={() => setHash("section8")}
        />,
        <HomeExperienceSection7 />,
      ],
      contact: [
        <HomeSection8 onPrevious={() => setHash("section7")} />,
        <HomeExperienceSection8 />,
      ],
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
        <Title>Cybernaut Studio | 3D E-commerce & AR Solutions</Title>

        <Meta name="title">
          Cybernaut Studio | 3D E-commerce & AR Solutions
        </Meta>
        <Meta name="description">
          Cybernaut Studio transforms flat e-commerce stores into immersive 3D
          experiences. We specialize in interactive product models and WebAR for
          luxury and indie brands.
        </Meta>

        <Meta property="og:type">website</Meta>
        <Meta property="og:url">https://www.cybernaut.studio/</Meta>
        <Meta property="og:title">
          Cybernaut Studio | 3D E-commerce & AR Solutions
        </Meta>
        <Meta property="og:description">
          Replace flat images with interactive 3D and AR. Increase conversions
          and customer satisfaction with bespoke WebGL solutions.
        </Meta>

        {/* TODO: Replace with actual image */}
        <Meta property="og:image">
          https://www.cybernaut.studio/social-share-image.jpg
        </Meta>

        <Meta property="twitter:card">summary_large_image</Meta>
        <Meta property="twitter:url">https://www.cybernaut.studio/</Meta>
        <Meta property="twitter:title">Cybernaut Studio | 3D E-commerce & AR Solutions</Meta>
        <Meta property="twitter:description">Turn browsers into buyers. We build high-end 3D product configurators and AR experiences for modern brands.</Meta>
        {/* TODO: Replace with actual image */}
        <Meta property="twitter:image">https://www.cybernaut.studio/social-share-image.jpg</Meta>

        <Meta name="keywords">3D e-commerce, WebGL agency, Shopify AR, ThreeJS developer, Jewelry 3D viewer, Interactive Product Visualization</Meta>
      </Head>

      <div className="w-full h-full flex flex-col justify-center">
        {section[0]}
      </div>

      <div className="w-full h-full">
        <Canvas camera={{ fov: 35 }}>
          <Environment preset="studio" />
          <ContactShadows position={[0, -1.3, 0]} />

          <Suspense fallback={<Loader />}>{section[1]}</Suspense>
        </Canvas>
      </div>
    </>
  );
}
