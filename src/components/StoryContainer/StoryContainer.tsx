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
    <section className="mx-auto">
      <div className="flex flex-wrap justify-center gap-6 max-w-[1200px]">
        {stories.map((story) => (
          <Story
            key={story.title}
            description={story.description}
            imageUrl={story.imageUrl}
            title={story.title}
          />
        ))}
      </div>
      <div>
        <ThemeButton className="mx-auto mt-14">
          See all users stories
          <ArrowRightIcon className="w-5 h-5" />
        </ThemeButton>
      </div>
    </section>
  );
};

export default StoryContainer;
