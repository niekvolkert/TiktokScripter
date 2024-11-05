import { CreateProductDialog } from "@/components/dashboard/create-product-dialog";

export default function ProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <CreateProductDialog />
      </div>
      <div className="grid gap-4">
        {/* Product list will go here */}
        <p>No products found. Create your first product to get started.</p>
      </div>
    </div>
  )
} 