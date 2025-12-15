import type { Product } from "../data/mockProducts";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-emerald-100/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 py-6">
        <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
        <p className="text-sm text-slate-600">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-base font-semibold text-teal-700">{product.price}</span>
        </div>
      </div>
    </article>
  );
}
