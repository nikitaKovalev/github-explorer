import axios from "axios";
import { useNavigate, useRouteError } from "react-router";
import { BACK } from "../../core/constants/navigation";

export default function UserError() {
  const error = useRouteError();
  const navigate = useNavigate()

  let errorMessage = 'An error occurred while searching for user';

  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      errorMessage = 'GitHub user not found 🤷‍♂️';
    } else {
      errorMessage = `Server error: ${error.message}`;
    }
  }

  return (
    <div style={{ padding: '20px', color: 'red', border: '1px solid red' }}>
      <h2>Oops! something went wrong</h2>
      <p>{errorMessage}</p>
      
      <button onClick={() => navigate(BACK)}>Назад</button>
      <button onClick={() => navigate('.', { replace: true })} style={{ marginLeft: '10px' }}>
        Попробовать снова
      </button>
    </div>
  );
}