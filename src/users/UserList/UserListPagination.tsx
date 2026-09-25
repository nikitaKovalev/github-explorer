interface UserListPaginationProps {
  page: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function UserListPagination({page, onNext, onPrevious}: UserListPaginationProps) {
  return (
    <div className="user-list-pagination">
      <button onClick={onPrevious}>Previous</button>
      {' ' + page + ' '}
      <button onClick={onNext}>Next</button>
    </div>
  );
}