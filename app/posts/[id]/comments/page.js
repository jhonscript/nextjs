const fetchComments = (id) => {
  console.log(`Fetching COMMENTS SINGLE POSTS ${id}`);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function Comment({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);
  return (
    <ul>
      {comments.slice(0, 5).map((comment) => {
        return (
          <li key={comment.id}>
            <h1>{comment.name}</h1>
            <small>{comment.email}</small>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
