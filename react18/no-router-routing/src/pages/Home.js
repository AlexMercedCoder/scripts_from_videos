export default function Home({ Link }) {
  return (
    <div>
      <h1> Home </h1>
      <Link path="/cheese" props={{}}>
        <button>Cheese</button>
      </Link>
    </div>
  );
}
