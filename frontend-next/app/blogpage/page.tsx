export default function BlogPage() {
  return (
    <main className="blog-page">
      <div className="blog-page-contents">


        // title
        <a>
          <label>
            <h1 className="blog-title">Title :</h1>
          </label>

          <strong>
            <input
              name="titleInput"
              placeholder="this should be bold and big"
            />
          </strong>
        </a>


        // date
        <a>
          <h2 className="blog-date">
            Date: <input type="date" />
          </h2>
        </a>


        // chapter
        <a>
          <h2 className="blog-chapter">
            Chapter{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>{" "}
            <input name="chapters" type="number" />
          </h2>
        </a>


        // page number
        <a>
          <h2 className="blog-page-number">
            Page Numbers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>{" "}
            <input name="startPage" type="number" min={1} />
            <p className="in-between">to</p>
            <input name="endPage" type="number" min={1} />
          </h2>
        </a>

        
        // characters
        <a>
          <h2 className="blog-character">Characters: </h2>
        </a>
      </div>
    </main>
  );
}
