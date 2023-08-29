import Image from "next/image";

export interface Product {
  id?: string;
  product: string;
  price: string;
}

export default async function Home() {
  const res = await fetch(
    "https://64ee17df1f87218271424cfe.mockapi.io/products",
    {
      cache: "no-cache",
    }
  );

  const products: Product[] = await res.json();

  return (
    <main>
      <h1 className="text-3xl font-bold text-center">Product Warehouse</h1>
      <form action="" className="flex flex-col gap-5 max-w-xl mx-auto p-5">
        <input
          placeholder="Enter product name..."
          type="text"
          className="border border-gray-300  p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="Enter Price.."
          className="border border-gray-300  p-2 rounded-md"
        />
        <button className="border bg-blue-500 rounded-md p-2 text-white">
          Add Product
        </button>
      </form>
      <h2 className="font-bold p-5">List of Products</h2>
      <ul className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </ul>
    </main>
  );
}
