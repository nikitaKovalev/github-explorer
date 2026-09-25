interface UserListSearchProps {
  searchText: string;
  readonly onTextChange: (text: string) => void;
}

export default function UserListSearch({searchText, onTextChange}: UserListSearchProps) {
  return (
    <input 
      className="user-search-input"
      placeholder="Search GitHub users..." 
      type="text" 
      value={searchText} 
      onChange={(event) => onTextChange(event.target.value)}
    />
  );
}