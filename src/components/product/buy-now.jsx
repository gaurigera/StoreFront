"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function BuyNow({ productDetails, ...props }) {
  return (
    <Link
      href={`/login`}
      target="_blank"
    >
      <Button variant="outline" {...props}>
        Buy Now
      </Button>
    </Link>
  );
}
