import { Link } from "react-router-dom";
import { UsersValidationService } from "../../features/users/services/users-validation.service";

function Header() {
  const { getActualUser } = UsersValidationService();
  const { toggleAdminPanel } = UsersValidationService();

  return (
    <header className="py-2 bg-gradient-to-r from-blue-500 to-indigo-900">
      <div className="max-w-6xl mx-auto flex justify-between">
        <Link className="mr-4" to="/">
          <i className="bi bi-house inline-flex items-center gap-1 text-white text-2xl font-mono not-italic">
            Home
          </i>
        </Link>
        <div className="flex gap-5">
          {getActualUser().isAdmin ? (
            <p
              className="text-cyan-300 text-2xl font-mono cursor-pointer"
              onClick={() => toggleAdminPanel()}
            >
              Change Role
            </p>
          ) : null}
          <Link
            to={{
              pathname: "/profile",
            }}
          >
            <i className="bi bi-file-person inline-flex items-center gap-1 text-white text-2xl font-mono not-italic">
              Profile
            </i>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
