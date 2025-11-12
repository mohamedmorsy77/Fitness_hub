import { Search } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";

function SearchMuscles({ filterMuscles }) {
  const [query, setQuery] = useState("");
  const handleMusclesSearch = (e) => {
    const { value } = e.target;
    setQuery(value);
    filterMuscles(value);
  };

  return (
    <div className="rounded-full border-2 border-purple-300 py-2 px-4 shadow-purple-900 flex items-center gap-2">
      <Search className="text-purple-200" />
      <Input
        value={query}
        name="muscle"
        onChange={handleMusclesSearch}
        placeholder="Enter muscle name"
        className="border-none text-purple-100 placeholder:text-lg focus-visible:ring-0 placeholder:text-purple-200 outline-0 shadow-none"
      />
    </div>
  );
}

export default SearchMuscles;
