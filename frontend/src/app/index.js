import Head from "next/head";
import Image from "next/image";
import { createClient } from "next-sanity";
import PortableText from "react-portable-text";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="home">
        <div className="nav">Hello World</div>
      </div>
    </main>
  );
}

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "tqk923j2",
    dataset: "production",
    useCdn: false,
  });
  const query = `*[_type == 'ecommerce']`;
  const home = await client.fetch(query);
  return {
    props: { home },
  };
}
