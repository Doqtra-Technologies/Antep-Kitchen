export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/bannervedio-poster.jpg"
        preload="metadata"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bannervedio.mp4" type="video/mp4" />
        <source src="/bannervedio.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-tight">
            Where Turkish tradition meets modern dining.
          </h1>
          <p className="text-muted max-w-xl mx-auto text-sm sm:text-base">
            Authentic flavours, handcrafted dishes and an atmosphere
            designed to bring people together.
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
