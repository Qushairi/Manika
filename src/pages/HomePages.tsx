import { Hero } from "../components/Hero";
import { ProfilePreview } from "../components/ProfilePreview";
import { ProductPreview } from "../components/ProductPreview";
import { ContactPreview } from "../components/ContactPreview";

export function HomePage() {
  return (
    <>
      <Hero />
      <ProfilePreview />
      <ProductPreview />
      <ContactPreview />
    </>
  );
}