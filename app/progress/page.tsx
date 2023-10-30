import Banner from "@/app/components/Banner";

interface IParams {
  conversationId: string;
}

const Dashboard = async ({ params }: { params: IParams }) => {
  if (true) {
    return (
      <div className="lg:pl-44 h-full">
        <div className="h-full flex flex-col">
          <div>dashboard</div>
          <Banner />
        </div>
      </div>
    );
  }

  return <div className="bg-black"></div>;
};

export default Dashboard;
