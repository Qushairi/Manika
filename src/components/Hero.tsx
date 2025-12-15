export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-emerald-50"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div className="md:w-1/2">
          <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
            Handmade by Manika
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            From beads to meaning
          </h1>
          <p className="mt-4 text-pretty text-base text-slate-600 sm:text-lg">
            MANIKA adalah UMKM yang dikelola oleh mahasiswa dan memproduksi gelang manik-manik yang dirancang untuk membawa cerita, kenangan, serta ketenangan dalam keseharian. Setiap produk dibuat dalam jumlah terbatas dengan penuh perhatian, ketelitian, dan semangat kolaborasi yang hangat.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="/products"
              className="inline-flex rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-xl"
            >
              View Products
            </a>
            <a
              href="/profile"
              className="inline-flex items-center text-sm font-semibold text-teal-700 transition-colors duration-200 hover:text-teal-600"
            >
              Meet the makers →
            </a>
          </div>
        </div>
        <div className="relative mx-auto mt-10 w-full max-w-sm rounded-3xl bg-white p-6 shadow-xl shadow-emerald-100 ring-1 ring-emerald-100 md:mt-0 md:w-2/5">
          <div className="absolute -left-6 top-8 h-20 w-20 rounded-full bg-emerald-100/60 blur-2xl" aria-hidden />
          <div className="absolute -right-8 bottom-12 h-24 w-24 rounded-full bg-teal-200/50 blur-3xl" aria-hidden />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                Featured bracelet
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-teal-700">
                Handmade
              </span>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="./public/images/4.jpg"
                alt="Close-up of bead bracelets arranged in soft teal tones"
                className="h-60 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">Italian Bracelet</h2>
              <p className="text-sm text-slate-600">
                Gelang berbahan logam berwarna hitam keperakan dengan desain minimalis dan permukaan mengkilap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
