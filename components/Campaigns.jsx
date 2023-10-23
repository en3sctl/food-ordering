import Image from "next/image";
import Title from "./ui/Title";
import { FaShoppingCart } from "react-icons/fa";

const CampaignItem = ({ imageSrc, title, discount, discountLabel }) => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div
        className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px] 
      border-primary rounded-full overflow-hidden"
      >
        <Image
          src={imageSrc}
          alt=""
          layout="fill"
          className="hover:scale-105 transition-all"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">{title}</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">{discount}</span>
          <span className="text-sm inline-block ml-[5px]">{discountLabel}</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <FaShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-6 flex-wrap">
      <CampaignItem
        imageSrc="/images/o1.jpg"
        title="Tasty Thursday"
        discount="20%"
        discountLabel="Off"
      />
      <CampaignItem
        imageSrc="/images/o2.jpg"
        title="Pizza Days"
        discount="15%"
        discountLabel="Off"
      />
    </div>
  );
};

export default Campaigns;
