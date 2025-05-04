import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  const skeletonContacts = Array(8).fill(null);

  return (
    <aside
      className="h-full w-20 lg:w-72 border-r border-base-300 
      flex flex-col transition-all duration-300 bg-base-100 shadow-2xl"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5 shadow-md bg-gradient-to-r from-base-100 to-base-200">
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-base-content" />
          <span className="font-semibold hidden lg:block text-base-content">Contacts</span>
        </div>
      </div>

      {/* Skeleton Contact List with 3D effect */}
      <div className="overflow-y-auto w-full py-4 px-3 space-y-5">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 p-3 rounded-2xl 
            bg-gradient-to-br from-base-200 via-base-300 to-base-200 
            shadow-lg hover:shadow-xl transform hover:scale-[1.015] transition-all duration-300 animate-pulse"
          >
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-base-300 shadow-inner" />

            {/* User Info */}
            <div className="hidden lg:flex flex-col gap-2 flex-1">
              <div className="h-4 w-3/4 bg-base-300 rounded-full shadow-inner" />
              <div className="h-3 w-1/2 bg-base-300 rounded-full shadow-inner" />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarSkeleton;
