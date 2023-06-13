import { ThemeButton } from "../ThemeButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface StoryProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Story: React.FC<StoryProps> = ({ description, imageUrl, title }) => {
  return (
    <div className="bg-blue-100 text-white w-[330px] h-[330px] px-6 py-9 flex flex-col justify-between relative">
      <img
        src={imageUrl}
        alt={title}
        className="absolute w-full h-full object-cover top-0 right-0 z-0"
      />
      <div className="z-10">
        <span className="font-[200] text-xs">{title.toUpperCase()}</span>
        <p className="text-md mt-2 max-w-[180px] text-lg font-[300]">
          {description}
        </p>
      </div>
      <div className="z-10">
        <ThemeButton
          variant="outline"
          className="flex items-center justify-center gap-2"
        >
          Read the story
          <ArrowRightIcon className="w-5 h-5" />
        </ThemeButton>
      </div>
    </div>
  );
};

export default Story;
