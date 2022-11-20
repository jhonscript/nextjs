import { Counter } from "../../../components/Counter";
export default function PostsLayout({ children }) {
  return (
    <div>
      <h1>Este es el layout de los post</h1>
      <Counter />
      <small>Home &bull; Post</small>
      {children}
    </div>
  );
}
