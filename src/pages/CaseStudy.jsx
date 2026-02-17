import { useParams } from "react-router-dom";

export default function CaseStudy() {
  const { slug } = useParams();

  return (
    <main className="pt-24 container">
      <h1 className="text-3xl font-bold mb-6">
        Case Study: {slug}
      </h1>

      <p className="text-zinc-400">
        Detailed case study coming soon.
      </p>
    </main>
  );
}