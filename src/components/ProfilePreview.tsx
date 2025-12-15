export function ProfilePreview() {
  return (
    <section
      className="bg-white"
      aria-labelledby="profile-preview-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="space-y-6">
          <h2
            id="profile-preview-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
          >
            From our campus studio to your wrist
          </h2>
          <p className="text-pretty text-base text-slate-600">
            MANIKA lahir di sebuah kamar asrama mahasiswa kecil tempat teman-teman berkumpul di antara jam kuliah untuk merajut gelang dan berbagi cerita. Kami percaya setiap manik dapat menyimpan sebuah perasaan—kenyamanan, kepercayaan diri, rasa syukur—dan kami menanamkan sentimen tersebut ke dalam setiap karya kami.
          </p>
          <p className="text-pretty text-base text-slate-600">
            Kami bermitra dengan pemasok manik-manik lokal, menjaga produksi yang adil, dan menjaga proses kami tetap transparan sehingga Anda dapat merasa nyaman mengenakan sesuatu yang dibuat dengan sepenuh hati.
          </p>
          <a
            href="#contact"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-teal-700 shadow-md shadow-emerald-100 transition-colors duration-200 hover:bg-emerald-50"
          >
            Collaborate with MANIKA
          </a>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-teal-100 p-10 shadow-xl shadow-emerald-100">
          <div className="relative space-y-6 text-slate-700">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Our process
            </h3>
            <ol className="space-y-4 text-sm">
              <li className="rounded-2xl bg-white/70 p-4 shadow-sm shadow-emerald-100">
                <span className="font-semibold text-teal-700">1. Moodboard & selection</span>
                <p className="mt-1 text-slate-600">
                  Kami mendesain berdasarkan suasana hati yang disampaikan oleh klien dan menggunakan manik-manik berkelanjutan dengan pilihan warna lembut.
                </p>
              </li>
              <li className="rounded-2xl bg-white/70 p-4 shadow-sm shadow-emerald-100">
                <span className="font-semibold text-teal-700">2. Hand assembly</span>
                <p className="mt-1 text-slate-600">
                  Para perajin kami merangkai, mengikat, dan memoles setiap bagian menggunakan gerakan dan musik yang penuh kesadaran.
                </p>
              </li>
              <li className="rounded-2xl bg-white/70 p-4 shadow-sm shadow-emerald-100">
                <span className="font-semibold text-teal-700">3. Story packaging</span>
                <p className="mt-1 text-slate-600">
                  Setiap gelang yang keluar dari studio kami disertai catatan tulisan tangan tentang tujuan pembuatannya dan tips perawatannya.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
