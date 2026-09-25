import type { UserDetails } from "../models/user-detail.interface";

export default function UserCard({user}: {user: UserDetails}) {
  return (
    <div className="user-details-card">
      <div className="user-details-card__image">
        <img src={user.avatar_url} alt={'user avatar' + user.login} />
      </div>
      
      <div className="user-details-card__bio">
        <div className="user-details-card__text">
          {user.name}
        </div>

        <div className="user-details-card__text">
          @{user.login}
        </div>

        <div className="user-details-card__text">
          Followers: {user.followers}
        </div>

        <div className="user-details-card__text">
          Following: {user.following}
        </div>
        
        <div className="user-details-card__text">
          Repositories: {user.public_repos}
        </div>
        
        <div className="user-details-card__text">
          <a href={user.url}>Open GitHub profile</a>
        </div>
      </div>
    </div>
  );
}