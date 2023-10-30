import DesktopSidebar from "./component/DesktopNavbar";
import Navbar from "./component/Navbar";
async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark:bg-gray-800 bg-neutral-100">
      <DesktopSidebar currentUser={null} />
      <Navbar />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
