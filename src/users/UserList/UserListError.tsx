export default function UserListError({isError, onRefetch}: {onRefetch: () => void}) {
  return (
    <>
      <div className="user-list-error">
        Something went wrong.

        <button onClick={onRefetch}>Try again</button>
      </div>
    </>
  );
}