import LandingInteractions from "@/components/LandingInteractions";
import { landingBody } from "@/generated/landing-body";

export default function Home() {
  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: landingBody }} />
      <LandingInteractions />
    </>
  );
}
