"use client";

import Spinner from "@/components/Spinner/Spinner";
import { CardProduto } from "@/components/pages/Produtos/CardProduto";
import { useRouter, useSearchParams } from "next/navigation";

import useSWR from "swr";

const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  console.log(response);
  return response.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const router = useRouter();

  const encodedSearchQuery = encodeURI(searchQuery || "");
  console.log(encodedSearchQuery);

  const { data, isLoading } = useSWR(
    `/api/produtos/search?q=${encodedSearchQuery}`,
    fetchPosts,
    { revalidateOnFocus: false }
  );
  console.log(encodedSearchQuery);
  console.log(data?.products);
  if (!encodedSearchQuery) {
    router.push("/produtos/search");
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (!data?.products) {
    return null;
  }

  return (
    <>
      <span className="text-xl">
        Showing results for:{" "}
        <span className="font-semibold">{searchQuery}</span>
      </span>
      <CardProduto produtos={data.products} />
    </>
  );
};

export default SearchPage;
