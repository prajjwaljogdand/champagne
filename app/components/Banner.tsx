const Banner = () => {
  return (
    <div
      className="
          flex 
          justify-center 
          items-center 
          h-screen 
          px-4 
          py-10 
          sm:px-6 
          lg:px-8 
          lg:py-6 
          dark:text-white
        "
    >
      <div className="text-center items-center flex flex-col">
        <h3 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
          Work in Progress, stay tuned 😊
        </h3>
      </div>
    </div>
  );
};

export default Banner;
