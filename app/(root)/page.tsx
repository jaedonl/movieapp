import ContentOverview from "@/components/ContentOverview";
import ContentList from "@/components/ContentList";
import { sampleContents } from "@/constants";
import { db } from "@/database/drizzle";
import { users  } from "@/database/schema"

const Home = async () => {
  const result = await db.select().from(users);

  console.log(JSON.stringify(result, null, 2))
  
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