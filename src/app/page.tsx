import AIgeneration from "@/components/shared/AIgeneration";

const Homepage = () => {
  return (
    <div>

      <div className="mb-6">
        <h1 className="font-bold text-3xl leading-10 text-[#181C1B] mb-2">
          Welcome back, Creator
        </h1>

        <p className="text-lg leading-6 text-[#3E4946]">
          Let's generate some engaging content today.
        </p>
      </div>

      <div className="grid grid-cols-6">

        <div className="col-span-4">
          <AIgeneration />
        </div>

      </div>

    </div>
  );
};

export default Homepage;