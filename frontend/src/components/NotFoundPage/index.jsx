import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="">
      <div>
        <main className="">
          <div className="">
            <p className="text-xl text-center">
              Oops! We can't find that page.
            </p>
          </div>
          <div>
            <Link to="/">
              <button type="button" className="">
                Return Home
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
