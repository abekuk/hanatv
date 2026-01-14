import { notFound } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const supabase = supabaseServer();

  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .limit(1)
    .single();

  if (error || !data) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 text-white">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <div className="text-sm text-gray-400 mb-6">
        Published {new Date(data.published_at).toLocaleDateString()}
      </div>

      <div className="prose prose-invert">
        {data.content}
      </div>
    </article>
  );
}
