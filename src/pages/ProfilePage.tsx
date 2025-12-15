export function ProfilePage() {
  return (
    <section className="bg-white" aria-labelledby="profile-page-heading">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
          Student UMKM story
        </p>
        <h1
          id="profile-page-heading"
          className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
        >
          MANIKA: made by friends, shared with community
        </h1>
        <div className="mt-10 space-y-8 text-base leading-relaxed text-slate-600">
          <p>
            MANIKA berawal sebagai jeda kreatif di sela-sela tugas kuliah. Sekelompok mahasiswa desain dan bisnis ingin mengubah kecintaan mereka terhadap kerajinan tangan menjadi sesuatu yang bermakna. Dengan peralatan sederhana yang dipinjam dan sebuah meja di ruang bersama asrama, kami mulai merangkai gelang manik-manik untuk teman-teman yang menginginkan hadiah yang penuh makna dan personal.
          </p>
          <p>
            Kami berkomitmen untuk menjaga proses produksi yang transparan dan beretika. Setiap manik-manik dipilih secara langsung dari pemasok lokal, dipadukan dalam palet warna khusus, dan dirangkai dalam jumlah terbatas untuk memastikan kualitas. Setiap pesanan turut mendukung studi kami sekaligus memungkinkan kami membimbing mahasiswa yang lebih muda untuk belajar kerajinan ini.
          </p>
          <p>
            Lebih dari sekadar estetika, gelang MANIKA melambangkan momen-momen kebersamaan—ulang tahun, wisuda, awal yang baru. Kami mendokumentasikan kisah di balik setiap koleksi, menambahkan catatan tulisan tangan agar Anda ingat mengapa koleksi ini dibuat.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {["Honest craft", "Warm community", "Mindful growth"].map((value) => (
            <div
              key={value}
              className="rounded-3xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-lg shadow-emerald-100/50"
            >
              <h2 className="text-lg font-semibold text-teal-700">{value}</h2>
              <p className="mt-3 text-sm text-slate-600">
                Kami berfokus pada mendengarkan, berkolaborasi, dan menciptakan gelang yang terasa seperti perayaan sederhana atas momen-momen penting sehari-hari.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 rounded-3xl bg-gradient-to-br from-emerald-100 via-white to-teal-100 p-8 shadow-xl shadow-emerald-100">
          <h2 className="text-2xl font-semibold text-slate-900">Handmade process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Sketch & mood notes",
                description:
                  "Kami mengumpulkan inspirasi dan maksud warna dari brief Anda, lalu membuat sketsa kombinasi warna dengan anotasi.",
              },
              {
                title: "Bead selection",
                description:
                  "Para perajin kami memilih manik-manik berdasarkan tekstur, warna, dan simbolisme menggunakan sumber lokal yang berkelanjutan.",
              },
              {
                title: "Assembly & finishing",
                description:
                  "Setiap gelang dirangkai, diikat, diperiksa, dan dipasangkan dengan kartu cerita sebelum dikemas.",
              },
            ].map((step) => (
              <div key={step.title} className="rounded-2xl bg-white/80 p-6 shadow-lg shadow-emerald-100/50">
                <h3 className="text-lg font-semibold text-teal-700">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
