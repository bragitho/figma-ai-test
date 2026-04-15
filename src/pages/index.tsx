import Head from "next/head";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Local Sandbox</title>
        <meta
          name="description"
          content="Local-only Next.js sandbox using the Pages Router, TypeScript, Biome, and SCSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home page for test app</h1>
        <div>Test conent goes in here</div>
        <Button label="Button desktop" />
      </main>
    </>
  );
}
