import { useState } from "react";

function Comments() {
  const [active, setActive] = useState(false);

  return (
    <section>
      <h1 style={{ fontSize: "150px", margin: 0, color: "#ff8052" }}>404.</h1>

      {!active && (
        <div>
          <h1>
            Nada encontrado. <br /> Queríamos achar o <strong>Moisés</strong>...
          </h1>
          <img
            src="https://avatars.githubusercontent.com/u/69821675?v=4"
            alt="Moisés"
            width="400"
          />
          <button
            className="isaac"
            style={{ display: "block", margin: "20px auto" }}
            onClick={() => setActive(true)}
          >
            E o que Encontramos?
          </button>
        </div>
      )}
      {active && (
        <div>
          <h2>
            ... o tal do <strong>MockZés!</strong>
          </h2>
          <img
            src="https://avatars.githubusercontent.com/u/69821675?v=4"
            alt="MockZés"
            width="600"
          />
        </div>
      )}
    </section>
  );
}
export default Comments;
