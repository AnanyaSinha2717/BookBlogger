
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <a>
          <label>
            <h1 className="text-5xl text-center">Title :</h1>
          </label>

          <strong>
            <input
              name="titleInput"
              placeholder="this should be bold and big"
            />
          </strong>
        </a>

        <h1 className="text-5xl text-center">Title :</h1>
        

      </div>
    </main>
  );
}
