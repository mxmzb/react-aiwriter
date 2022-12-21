import AIWriter from "react-aiwriter";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 600,
        lineHeight: "1.4rem",
      }}
    >
      <AIWriter>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <ul>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium
          </li>
          <li>
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo
          </li>
          <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        <ol>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium
          </li>
          <li>
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo
          </li>
          <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
        </ol>

        {/* https://stackoverflow.com/questions/248011/how-do-i-wrap-text-in-a-pre-tag */}
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
          quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
          non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </pre>
      </AIWriter>
    </div>
  );
}
