import { useState } from "react";
import Form from "./form";

export default function Home({ children }) {
  const [data, setData] = useState({});
  const result = JSON.stringify(data)

 
  return (
    <div>
      <Form action={setData} />
      <div className="text-center text-gray-700">
        <p>Report table coming soon..</p>
        <p>{Object.keys(data).length !== 0 && result}</p>
      </div>

      <footer className="absolute bottom-0 w-full px-8 py-4 bg-green-500">
        <p>&copy;2021</p>
      </footer>
    </div>
  )
}

