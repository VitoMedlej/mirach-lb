import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useCategories = (initialData : any) => {
  const { data, error } = useSWR('/api/get-categories', fetcher, {
    fallbackData: initialData,
    refreshInterval: 600000, // 10 minutes in milliseconds
  });

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCategories;
