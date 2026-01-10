import YTShorts from "@/components/ytshorts";
import YTVideo from "@/components/ytvideo";
import YTThumbnail from "@/components/ytthumbnail";
import Ads from "@/components/ads";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-[1920px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-2 lg:h-[calc(100vh-8rem)] lg:sticky lg:top-8">
            <YTShorts />
          </aside>

          <section className="lg:col-span-7 space-y-8">
            <YTVideo />
            <YTThumbnail />
          </section>

          <aside className="lg:col-span-3">
            <Ads />
          </aside>
        </div>
      </div>
    </main>
  );
}