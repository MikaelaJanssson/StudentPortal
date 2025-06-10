import { news } from "../data/news";
import { Container } from "react-bootstrap";

function News() {
  return (
    <Container className="mt-4">
      <h2>Nyheter</h2>
      {news.map((post) => (
        <div key={post.id} className="mb-4">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </Container>
  );
}

export default News;
