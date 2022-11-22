import Image from "next/image";

const fetchComments = async (id) => {
  const randomValue = Math.round(Math.random());

  if (!randomValue) throw new Error("The value of randomValue is equal to 0");

  await new Promise((resolve) => setTimeout(resolve, 3000));

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
            <Image
              width="50"
              height="50"
              alt={comment.name}
              src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
            />
            <h4>{comment.name}</h4>
            <small>{comment.email}</small>
            <p>{comment.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
