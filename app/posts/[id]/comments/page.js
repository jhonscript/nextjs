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
    <ul style={{ background: "#888", fontSize: "10px" }}>
      {comments.slice(0, 5).map((comment) => {
        return (
          <li key={comment.id}>
            <h4>{comment.name}</h4>
            <small>{comment.email}</small>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
