import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Story } from "../Story";
import { ThemeButton } from "../ThemeButton";

const stories: Array<{ imageUrl: string; title: string; description: string }> =
  [
    {
      imageUrl: "/images/i1.jpg",
      title: "Digital agencies",
      description:
        "Salt uses Tuttom to build groundbreaking solutions for their client",
    },
    {
      imageUrl: "/images/i2.jpg",
      title: "Freelancers",
      description: "Web designers build bussinesses with Tutoom",
    },
    {
      imageUrl: "/images/i3.jpg",
      title: "Nonprofit",
      description: "Posible makes an impact with the help of Tuttom",
    },
  ];

const StoryContainer = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="grid grid-cols-3 gap-4 max-w-[1200px]">
        {stories.map((story) => (
          <Story
            key={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
            title={story.title}
          />
        ))}
      </section>
      <div className="mt-14">
        <ThemeButton className="flex items-center justify-center gap-2">
          See all users stories
          <ArrowRightIcon className="w-5 h-5" />
        </ThemeButton>
      </div>
    </div>
  );
};

export default StoryContainer;
