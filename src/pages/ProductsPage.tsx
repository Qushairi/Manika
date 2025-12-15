import { mockProducts } from "../data/mockProducts";
import { ProductCard } from "../components/ProductCard";

export function ProductsPage() {
  return (
    <section className="bg-white" aria-labelledby="products-page-heading">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
            Catalog
          </p>
          <h1
            id="products-page-heading"
            className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
          >
            Explore our bracelet lineup
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            Discover handcrafted pieces designed for gifting, celebrating, or anchoring meaningful routines. Each bracelet comes with care tips and intention stories.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
