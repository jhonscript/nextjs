import { LikeButton } from "../../components/LikeButton";
import Link from "next/link";

const fetchPost = () => {
  console.log("Fetching POSTS");
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPost();

  return (
    <section>
      {posts.slice(0, 5).map((post) => {
        return (
          <article key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
              <h2 style={{ color: "#09f" }}>{post.title}</h2>
              <p>{post.body}</p>
              <LikeButton id={post.id} />
            </Link>
          </article>
        );
      })}
    </section>
  );
}
