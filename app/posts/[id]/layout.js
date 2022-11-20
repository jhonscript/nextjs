const fetchSinglePost = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log(`Fetching SINGLE POSTS ${id}`);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function PostsLayout({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>

      {children}
    </article>
  );
}
