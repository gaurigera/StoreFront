"use client"

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SearchInput() {
    return (
      <form className="flex gap-1.5">
        <Input placeholder={"Search Products..."} className="max-w-screen-sm" />
        <Button variant="outline">
          <SearchIcon width={13} />
        </Button>
      </form>
    );
}