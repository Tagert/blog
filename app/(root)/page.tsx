import { SearchForm } from "@/components/SearchForm";
import { StartupCard } from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query ?? "";

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 55,
      author: { _id: 1, name: "Andrew" },
      _id: 1,
      description: "this is a description",
      image:
        "https://www.gannett-cdn.com/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?crop=1999,1125,x0,y78&width=960",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading text-3xl !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
