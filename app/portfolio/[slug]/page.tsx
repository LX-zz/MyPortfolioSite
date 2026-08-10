import { notFound } from "next/navigation";

import { ExampleLanding } from "@/components/examples/ExampleLanding";
import { getSiteExample, siteExamples } from "@/config/examples";

type PortfolioPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteExamples.map((example) => ({
    slug: example.slug,
  }));
}

export default async function PortfolioProjectPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const example = getSiteExample(slug);

  if (!example) {
    notFound();
  }

  return <ExampleLanding example={example} />;
}
