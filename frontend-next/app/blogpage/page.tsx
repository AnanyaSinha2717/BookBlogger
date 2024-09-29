export default function BlogPage() {
  return (
    <main className="blog-page m-10 data-theme='retro'">
      <div className="blog-page-contents">
        {/* title */}
        <a>
          <strong>
            <textarea
              name="titleInput"
              className="font-mono text-4xl py-1"
              placeholder="Title"
            />
          </strong>

          <h2>
            <input 
            name="authorInput"
            className="font-serif text-sm italic"
            placeholder="Author"
            />

            
          </h2>
        

        {/* date */}
        
          <h2 className="blog-date py-1">
            Date: <input type="date"/>
          </h2>
        </a>

        {/* chapter */}
        <a>
          <h2 className="blog-chapter">
            Chapter{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>{" "}
            <input name="chapters" type="number" />
          </h2>
        </a>

        {/* page number */}
        <a>
          <h2 className="blog-page-number py-1">
            Page Numbers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>{" "}
            <input name="startPage" type="number" min={1} />
            <p className="in-between">to</p>
            <input name="endPage" type="number" min={1} />
          </h2>
        </a>

        {/* characters */}
        <a>
          <h2 className="blog-character">Characters: </h2>
        </a>
      </div>
    </main>
  );
}
