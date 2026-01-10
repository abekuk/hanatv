export default function YTShorts() {
  const shorts = [
    {
      id: 1,
      thumbnail: "https://placehold.co/300x533/1a1a1a/ffffff?text=Short+1",
      title: "Breaking: Major Policy Announcement",
      views: "2.3M",
    },
    {
      id: 2,
      thumbnail: "https://placehold.co/300x533/1a1a1a/ffffff?text=Short+2",
      title: "60 Second Explainer: Economic Update",
      views: "1.8M",
    },
    {
      id: 3,
      thumbnail: "https://placehold.co/300x533/1a1a1a/ffffff?text=Short+3",
      title: "On The Ground: Field Report",
      views: "950K",
    },
    {
      id: 4,
      thumbnail: "https://placehold.co/300x533/1a1a1a/ffffff?text=Short+4",
      title: "Quick Take: Today's Headlines",
      views: "1.2M",
    },
  ];

  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white mb-4 px-2">Quick Updates</h2>
        {shorts.map((short) => (
          <article
            key={short.id}
            className="group cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-[9/16] bg-black/40 border border-white/10 rounded-lg overflow-hidden">
              <img
                src={short.thumbnail}
                alt={short.title}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1">
                  {short.title}
                </h3>
                <p className="text-white/60 text-xs">{short.views} views</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group-hover:bg-white/30 group-hover:scale-110">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}