export default function YTVideo() {
  const featuredVideo = {
    id: "featured-1",
    thumbnail: "https://placehold.co/1280x720/1a1a1a/ffffff?text=Featured+Story",
    title: "Breaking Investigation: Inside the National Crisis",
    description:
      "Our investigative team spent six months uncovering the truth behind one of the most significant stories of the year. This exclusive report reveals new details and expert analysis.",
    duration: "18:42",
    publishedAt: "2 hours ago",
    views: "4.2M",
  };

  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video bg-black/40 border border-white/10 rounded-lg overflow-hidden mb-4">
        <img
          src={featuredVideo.thumbnail}
          alt={featuredVideo.title}
          className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
          {featuredVideo.duration}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-600/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all group-hover:bg-red-600 group-hover:scale-110 shadow-2xl">
          <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[14px] border-y-transparent ml-1" />
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-red-500 transition-colors">
          {featuredVideo.title}
        </h1>
        <p className="text-white/70 text-sm md:text-base leading-relaxed">
          {featuredVideo.description}
        </p>
        <div className="flex items-center gap-3 text-white/50 text-sm">
          <span>{featuredVideo.views} views</span>
          <span>•</span>
          <span>{featuredVideo.publishedAt}</span>
        </div>
      </div>
    </article>
  );
}