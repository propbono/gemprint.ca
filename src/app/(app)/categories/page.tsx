import configPromise from "@payload-config";
import Link from "next/link";
import { getPayload } from "payload";

export default async function Categories() {
  const payload = await getPayload({ config: configPromise });
  const data = await payload.find({
    collection: "categories",
  });

  return (
    <div className="mt-40">
      {data.docs.map((category) => {
        return (
          <div key={category.id}>
            <Link href={`/print-products/${category.slug}`}>
              {category.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
