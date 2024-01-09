"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { LuSearch } from "react-icons/lu";

export const InputSearch = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery as string);
    console.log(encodedSearchQuery);
    router.push(`/produtos/search?q=${encodedSearchQuery}`);
  };

  return (
    <form className="relative md:w-1/2   text-gray-600" onSubmit={handleSearch}>
      <Input
        type="search"
        className="w-full pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline text-gray-600 "
        placeholder="Pesquisar..."
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <div className="absolute top-0 right-0 inline-flex items-center p-2">
        <LuSearch size={22} />
      </div>
    </form>
  );
};
