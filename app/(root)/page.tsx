import ContentOverview from "@/components/ContentOverview";
import ContentList from "@/components/ContentList";
import { sampleContents } from "@/constants";

const Home = () => {
  return (
    <>
      <ContentOverview {...sampleContents[0]} />
      <ContentList 
        title="Latest Contents"
        contents={sampleContents}
        containerClassName="mt-28"
      />
    </>
  );
}

export default Home;