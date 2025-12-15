import { Link } from "react-router-dom";
import { mockProducts } from "../data/mockProducts";
import { ProductCard } from "./ProductCard";

const previewProducts = mockProducts.slice(0, 3);

export function ProductPreview() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-20"
      aria-labelledby="product-preview-heading"
    >
      <div className="text-center">
        <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
          Small batch creations
        </p>
        <h2
          id="product-preview-heading"
          className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
        >
          Bracelets crafted with care
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Temukan koleksi pakaian sehari-hari yang memadukan warna-warna lembut, simbolisme yang bermakna, dan kenyamanan saat dikenakan. Setiap set dirancang dan diselesaikan oleh kolektif pembuat karya siswa MANIKA.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {previewProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="/contact"
          className="inline-flex rounded-full border border-transparent bg-white px-6 py-3 text-sm font-semibold text-teal-700 shadow-lg shadow-emerald-100/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50"
        >
          Custom order inquiries
        </Link>
      </div>
    </section>
  );
}
