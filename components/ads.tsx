export default function Ads() {
  const sponsoredContent = [
    {
      id: 1,
      image: "https://placehold.co/400x300/2d2d2d/ffffff?text=Sponsor+1",
      title: "Premium News Subscription",
      description: "Ad-free experience with exclusive content",
      sponsor: "HanaTV Premium",
    },
    {
      id: 2,
      image: "https://placehold.co/400x300/2d2d2d/ffffff?text=Sponsor+2",
      title: "International Affairs Podcast",
      description: "Weekly insights from global experts",
      sponsor: "Global Voices",
    },
    {
      id: 3,
      image: "https://placehold.co/400x300/2d2d2d/ffffff?text=Sponsor+3",
      title: "Financial News Alert Service",
      description: "Real-time market updates delivered",
      sponsor: "Market Watch Pro",
    },
  ];

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider">
          Sponsored
        </h2>
      </div>
      <div className="space-y-4">
        {sponsoredContent.map((ad) => (
          <article
            key={ad.id}
            className="group cursor-pointer border border-white/10 rounded-lg overflow-hidden bg-black/20 hover:bg-black/30 transition-colors"
          >
            <div className="relative aspect-[4/3] bg-black/40 overflow-hidden">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
              />
              <div className="absolute top-2 right-2 bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-white/60 text-xs font-medium">
                Ad
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-white font-semibold text-sm group-hover:text-red-500 transition-colors">
                {ad.title}
              </h3>
              <p className="text-white/60 text-xs leading-relaxed">
                {ad.description}
              </p>
              <p className="text-white/40 text-xs">{ad.sponsor}</p>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}