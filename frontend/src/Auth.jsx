import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse" />
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        {/* User Profile */}
        <div className="flex items-center gap-2">
          <img 
            src={user?.picture} 
            alt={user?.name}
            className="h-8 w-8 rounded-full border-2 border-[#17153B]"
          />
          <span className="hidden md:block text-sm font-medium text-[#17153B]">
            {user?.name}
          </span>
        </div>
        
        {/* Logout Button */}
        <button
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className="px-4 py-2 rounded-full text-sm font-medium bg-slate-200 hover:bg-slate-300 text-[#17153B] transition-colors"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={() => loginWithRedirect()} 
      className="px-4 py-2 rounded-full text-sm font-medium bg-[#17153B] hover:bg-[#26235A] text-white transition-colors"
    >
      Log In
    </button>
  );
};

export default AuthButton;