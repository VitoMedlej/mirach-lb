"use client"

import { useState, useEffect } from 'react';

const useCategories = () => {
  const [categories, setCategories] = useState([
    {
        categoryName:'Shop',
    },
    {
        categoryName:'Collection',
    }
  ]);

  const fetchDataAndSetCategories = async () => {
    try {
      const cachedCategories = localStorage.getItem('categories');
      if (cachedCategories) {
        setCategories(JSON.parse(cachedCategories));
        // return; // Return early if categories are already cached
      }

      const response = await fetch('https://api.jsonbin.io/v3/b/65c0fe93266cfc3fde861dfb',  {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': '$2a$10$FjBR4hwwu8E5waevcvrb0uWtCoiXS0JN0Ut2bxF55izDfGmh0GDUG'
        },
        // cache: 'no-store',
  next: {
    revalidate: 1000
  }
      }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('data: ', data);
      setCategories(data?.record);

      // Cache categories in localStorage
      localStorage.setItem('categories', JSON.stringify(data?.record));
    } catch (e) {
      console.log('Error fetching categories:', e);
    }
  };

  useEffect(() => {
    fetchDataAndSetCategories();
  }, []); // Fetch categories only once when the component mounts

  return categories;
};

export default useCategories;
