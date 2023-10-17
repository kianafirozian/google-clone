import Link from "next/link";

// we change the function to ASYNC so that we can fetch our data with await so it becomes server side rendering
export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!response.ok) {
    throw new Error("Something went Wrong");
  }

  const data = await response.json();
  const results = data.items;

  // console.log(data);

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try search Something else or go back to homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.id}>{result.title}</h1>)}
    </>
  );
}
