import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{ slug: "haps" }];
}

export default async function PlatformDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  redirect("/haps");
}
