import { StoryContainer } from "./components/StoryContainer";

function App() {
  return (
    <div>
      <div className=" bg-gray-100 py-20">
        <div className="flex mx-auto max-w-[950px]">
          <div>
            <h2 className="text-4xl font-medium mb-5 mt-4">What's Tutoom?</h2>
            <p className="text-2xl text-slate-500 max-w-[720px] mb-16">
              It's a videoconferencing tool, CMS, and hosting platform in one.
              Check it out.
            </p>
          </div>
          <img
            src="/images/i0.jpg"
            alt="man sitting in his desktop"
            width={450}
            className="object-contain"
          />
        </div>
      </div>
      <div className="py-20">
        <h2 className="text-4xl font-medium mb-5 text-center">
          Tuttom fits your worflow
        </h2>
        <p className="text-2xl text-slate-500 max-w-[720px] mx-auto mb-16 text-center">
          See how enterprises, agencies, startups, and freelancers power their
          design processes with Tutoom
        </p>
        <StoryContainer />
      </div>
    </div>
  );
}

export default App;
