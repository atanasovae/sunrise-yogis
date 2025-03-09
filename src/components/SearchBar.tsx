"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

const SearchBar = () => {
  const router = useRouter();
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
  }

  return (
    <form className='flex ic justify-between gap-4 bg-cream p-2 rounded-md flex-1' onSubmit={handleSearch}>
      <input 
        type="text" 
        name="name" 
        placeholder='Търси продукти' 
        className='flex-1 bg-transparent text-black focus:outline-none' 
      />
      <button className='cursor-pointer'>
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;


