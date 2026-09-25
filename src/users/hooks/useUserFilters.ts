import { useSearchParams } from 'react-router';

export function useUsersFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q') || '';
  const page = Number(searchParams.get('page')) || 1;
  const per_page = Number(searchParams.get('per_page')) || 20;

  const setSearch = (text: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (text) {
      newParams.set('q', text);
    } else {
      newParams.delete('q');
    }

    newParams.set('page', '1');
    
    setSearchParams(newParams);
  };

  const setPage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams);

    if (newPage) {
      newParams.set('page', String(newPage));
    } else {
      newParams.delete('page');
    }

    setSearchParams(newParams);
  };

  const setPerPage = (newPerPage: number) => {
    const newParams = new URLSearchParams(searchParams);

    if (newPerPage) {
      newParams.set('per_page', String(newPerPage));
    } else {
      newParams.delete('per_page');
    }

    setSearchParams(newParams);
  };

  return {
    filters: {page, search: q, perPage: per_page},
    setSearch,
    setPage,
    setPerPage,
  };
}
