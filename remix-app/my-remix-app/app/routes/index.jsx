import { useLoaderData, Link, Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import GiftConnection from "~/models/gifts";

export async function loader() {
  const Gift = GiftConnection()

  return await Gift.find({})
}

export async function action({request}){
  const formData = await request.formData()

  const Gift = GiftConnection()

  Gift.create({
    title: formData.get("title"),
    value: formData.get("value")
  })

  return redirect("/")
}

export default function Index() {
  const gifts = useLoaderData();
  console.log(gifts)

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>My Gift List</h1>
      <Link to="/gifts/1">Test Link</Link>
      <ul>
        {gifts.map((gift, index) => (
          <Link key={gift._id} to={`/gifts/${gift._id}`}>
            <li>{gift.title}</li>
          </Link>
        ))}
      </ul>
      <h2>Make New Gift</h2>
      <Form method="post">
          <input type="text" name="title"/>
          <input type="number" name="value"/>
          <button>Create Gift</button>
      </Form>
    </div>
  );
}
