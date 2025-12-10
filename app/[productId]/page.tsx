import { notFound } from "next/navigation";
import { getProduct, getProducts } from "@/lib/sample-data";
import { Reviews } from "@/components/reviews";
 
export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
 
  let product;
  try {
    product = await getProduct(productId);
  } catch (error) {
    notFound();
  }
 
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Product Header */}
        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground mt-2">
            {product.description}
          </p>
        </div>
 
        {/* Reviews */}
        <Reviews product={product} />
      </div>
    </main>
  );
}