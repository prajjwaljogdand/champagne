import Banner from "./components/Banner";
import { NFTGrid } from "./components/NFTGrid";

interface IParams {
  conversationId: string;
}

const Dashboard = async ({ params }: { params: IParams }) => {
  return (
    <div className="dark:bg-gray-800 bg-neutral-100  pl-48 pr-4 pt-20 h-full min-h-screen block">
      <Banner />
      <NFTGrid />
    </div>
  );
};

export default Dashboard;
