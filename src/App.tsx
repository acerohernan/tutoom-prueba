import { StoryContainer } from "./components/StoryContainer";
import { Heading } from "./components/Heading";
import { Description } from "./components/Description";

function App() {
  return (
    <div>
      <div className="bg-gray-100 py-20">
        <div className="px-20 mx-auto justify-between text-center max-w-screen-xl xl:flex xl:text-start">
          <div>
            <Heading className="mt-4">What's Tutoom?</Heading>
            <Description className="mt-4">
              It's a videoconferencing tool, CMS, and
            </Description>
            <Description>hosting platform in one. Check</Description>
            <Description>it out.</Description>
          </div>
          <img
            src="/images/i0.jpg"
            alt="man sitting in his desktop"
            className="object-contain w-full max-w-[600px] mt-10 mx-auto xl:mt-0 xl:w-[540px] xl:m-0"
          />
        </div>
      </div>
      <div className="px-16 py-12 text-center max-w-screen-xl mx-auto">
        <Heading>Tuttom fits your worflow</Heading>
        <Description className="max-w-[800px] mx-auto mt-4 mb-16">
          See how enterprises, agencies, startups, and freelancers power their
          design processes with Tutoom.
        </Description>
        <StoryContainer />
      </div>
    </div>
  );
}

export default App;
