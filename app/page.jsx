import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover & Share <br className="max-md:hidden"></br><span className="orange_gradient">AI-Powered Prompts</span></h1>
      <p className="desc text-center">World of Prompts is an open source tool for the modern world to explore, create, and share creative prompts</p>
      <Feed />
    </section>
  )
};

export default Home;
