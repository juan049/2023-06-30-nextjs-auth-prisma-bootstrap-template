import { env } from "process";

export default async function HomePage() {
  return (
    <>
      <main className="container">
        <h3 className="text-center mb-3">Bienvenido a {env.APP_NAME}</h3>
        <h4 className="text-center">Automatiza tu cumplimiento ambiental</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cum
          obcaecati natus perspiciatis temporibus et, ut, praesentium dolorum,
          voluptas ex quo aperiam est earum facilis iure id. Obcaecati, sequi?
          Odit.
        </p>
      </main>
    </>
  );
}
