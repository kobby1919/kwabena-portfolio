import { useParams } from "react-router-dom";
import PortfolioCaseStudy from "../case-studies/PortfolioCaseStudy";

const caseStudies = {
  "personal-portfolio": <PortfolioCaseStudy />,
};

export default function CaseStudy() {
  const { slug } = useParams();
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main className="pt-24 container text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-zinc-400">This project doesn't have a case study yet.</p>
      </main>
    );
  }

  return study;
}