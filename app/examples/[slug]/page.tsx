import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ExampleLanding } from "@/components/examples/ExampleLanding";
import { getSiteExample, siteExamples } from "@/config/examples";
import { siteConfig } from "@/config/site";

type ExamplePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return siteExamples.map((example) => ({
    slug: example.slug,
  }));
}

export async function generateMetadata({ params }: ExamplePageProps): Promise<Metadata> {
  const { slug } = await params;
  const example = getSiteExample(slug);

  if (!example) {
    return {
      title: "Пример сайта не найден",
    };
  }

  return {
    title: `${example.title} — пример 2К Digital`,
    description: example.description,
    openGraph: {
      title: `${example.title} — пример 2К Digital`,
      description: example.description,
      url: `${siteConfig.url}/examples/${example.slug}`,
    },
  };
}

export default async function ExamplePage({ params }: ExamplePageProps) {
  const { slug } = await params;
  const example = getSiteExample(slug);

  if (!example) {
    notFound();
  }

  return <ExampleLanding example={example} />;
}
