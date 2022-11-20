import Link from "next/link";

export default async function Post({ params }) {
  const { id } = params;
  return (
    <Link href="/posts/[id]/comments" as={`/posts/${id}/comments`}>
      Ver comentarios
    </Link>
  );
}
