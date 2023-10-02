// we change the function to ASYNC so that we can fetch our data with await so it becomes server side rendering
export default async function WebSearchPage({ searchParams }) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const results = data.items;

  return (
    <>
      {results &&
        results.map((result) => <h1 key={result.id}>{result.title}</h1>)}
      ;
    </>
  );
}
