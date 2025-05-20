import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{searchParams: Promise< {query?: string}>}) {

  const query = (await searchParams).query;

  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {_id: 1, name: 'Andy'},
    _id: 1,
    description: 'This is a description',
    image:'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: "Robots",
    title: 'We Robots'
  },
{
    _createdAt: new Date(),
    views: 5,
    author: {_id: 2, name: 'Adian'},
    _id: 2,
    description: 'This is a description',
    image:'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: "Robots",
    title: 'We Robots'
  }]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your StartUp, <br /> Connect with Entrepreneurs.
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>      

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ): (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
