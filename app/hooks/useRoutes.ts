import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiChat } from "react-icons/hi";
import { HiMiniChartBar } from "react-icons/hi2";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import { signOut } from "next-auth/react";
import { BiSolidDashboard, BiSolidShoppingBagAlt } from "react-icons/bi";
import { MdAssessment } from "react-icons/md";
import { RiAuctionFill } from "react-icons/ri";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: BiSolidDashboard,
        active: pathname === "/dashboard",
      },
      {
        label: "X PFP Rewards",
        href: "/progress",
        icon: MdAssessment,
        active: pathname === "/users",
      },
      {
        label: "HOLD Bounty",
        onClick: () => signOut(),
        href: "/progress",
        icon: HiMiniChartBar,
      },
      {
        label: "Leaderboards",
        href: "/progress",
        icon: HiUsers,
        active: pathname === "/leaderboards",
      },
      {
        label: "Market Place",
        href: "/progress",
        icon: BiSolidShoppingBagAlt,
        active: pathname === "/marketplace",
      },
      {
        label: "Auction House",
        href: "/progress",
        icon: RiAuctionFill,
        active: pathname === "/auction",
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
