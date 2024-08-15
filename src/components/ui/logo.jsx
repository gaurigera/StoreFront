import { StoreIcon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={`/`}>
      <div className="flex gap-2">
        <StoreIcon />
        <h1 className="font-semibold uppercase select-none">Store</h1>
      </div>
    </Link>
  );
}