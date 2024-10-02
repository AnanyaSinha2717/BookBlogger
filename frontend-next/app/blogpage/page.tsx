"use client";

import { useState } from "react";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"] });

export default function BlogPage() {
  // State to hold the list of items
  const [items, setItems] = useState<string[]>([""]);

  // Function to handle input change
  const handleInputChange = (index: number, value: string) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  // Function to add a new input field
  const addItem = () => {
    setItems([...items, ""]);
  };

  // Function to remove an input field
  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Items:", items);
  //   // Handle form submission (e.g., send data to the server)
  // };

  return (
    <main className="m-10">
      <div className={fredoka.className}>
        {/* title */}
        <div>
          
            <textarea
              name="titleInput"
              className="font-fredoka text-4xl py-1 w-full resize-none overflow-hidden"
              placeholder="Title"
            />
          
        </div>

        <div>
          <h2>
            <input
              name="authorInput"
              className="font-serif text-sm italic"
              placeholder="Author"
            />
          </h2>

          {/* date */}

          <h2 className="blog-date py-1">
            Date: <input type="date" />
          </h2>
        </div>

        {/* chapter */}
        <div>
          <h2 className="blog-chapter">
            Chapter{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>{" "}
            <input name="chapters" type="number" />
          </h2>
        </div>

        {/* page number */}
        <div>
          <h2 className="blog-page-number py-1">
            Page Numbers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>{" "}
            <input name="startPage" type="number" min={1} />
            <p className="in-between">to</p>
            <input name="endPage" type="number" min={1} />
          </h2>
        </div>

        {/* characters */}
        <div>
          <h2 className="py-1">Characters:</h2>
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            {items.map((item, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder={`Character ${index + 1}`}
                  style={{ marginRight: "10px" }}
                />
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  disabled={items.length === 1} // Disable removal if it's the last item
                >
                  x
                </button>
              </div>
            ))}

            <button type="button" onClick={addItem}>
              +
            </button>

            {/* <button
              type="submit"
              style={{ marginTop: "10px", padding: "10px" }}
            >
              Submit
            </button> */}
          </form>
        </div>
      </div>
    </main>
  );
}
