"use client";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "../ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";

export const InputSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative md:w-1/3 sm:w-1/4 lg:w-100 text-gray-600 flex">
      <Input
        type="search"
        className="w-full pl-10 pr-4 py-2 focus:outline-none focus:shadow-outline text-gray-600"
        placeholder="Pesquisar..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <div className="absolute top-0 right-0 inline-flex items-center p-2">
        <LuSearch size={22} />
      </div>
    </div>
  );
};
