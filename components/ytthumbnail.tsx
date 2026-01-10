export default function YTThumbnail() {
  const videos = [
    {
      id: 1,
      thumbnail: "https://placehold.co/480x270/1a1a1a/ffffff?text=Video+1",
      title: "Political Roundtable: Week in Review",
      duration: "12:34",
      views: "1.2M",
      publishedAt: "4 hours ago",
    },
    {
      id: 2,
      thumbnail: "https://placehold.co/480x270/1a1a1a/ffffff?text=Video+2",
      title: "International Summit: Key Takeaways",
      duration: "8:45",
      views: "890K",
      publishedAt: "6 hours ago",
    },
    {
      id: 3,
      thumbnail: "https://placehold.co/480x270/1a1a1a/ffffff?text=Video+3",
      title: "Economic Forecast: Expert Analysis",
      duration: "15:20",
      views: "2.1M",
      publishedAt: "8 hours ago",
    },
    {
      id: 4,
      thumbnail: "https://placehold.co/480x270/1a1a1a/ffffff?text=Video+4",
      title: "Climate Report: Latest Findings",
      duration: "10:15",
      views: "1.5M",
      publishedAt: "10 hours ago",
    },
    {
      id: 5,
      thumbnail: "https://placehold.co/480x270/1a1a1a/ffffff?text=Video+5",
      title: "Tech Innovation: Industry Impact",
      duration: "11:28",
      views: "760K",
      publishedAt: "12 hours ago",
    },
    {
      id: 6,
      thumbnail: "https://placehold.co/480x270/1a1a1a/ffffff?text=Video+6",
      title: "Health Update: Medical Breakthrough",
      duration: "9:52",
      views: "1.8M",
      publishedAt: "14 hours ago",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white border-b border-white/10 pb-3">
        Latest Coverage
      </h2>
      <div className="grid gap-4">
        {videos.map((video) => (
          <article
            key={video.id}
            className="group cursor-pointer flex gap-3 md:gap-4"
          >
            <div className="relative w-40 md:w-48 flex-shrink-0 aspect-video bg-black/40 border border-white/10 rounded overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-1.5 right-1.5 bg-black/80 backdrop-blur-sm px-1.5 py-0.5 rounded text-white text-xs font-semibold">
                {video.duration}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 transition-all group-hover:opacity-100 group-hover:bg-white/30">
                <div className="w-0 h-0 border-l-[10px] border-l-white border-y-[6px] border-y-transparent ml-0.5" />
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2 mb-1 group-hover:text-red-500 transition-colors">
                {video.title}
              </h3>
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <span>{video.views} views</span>
                <span>•</span>
                <span>{video.publishedAt}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}