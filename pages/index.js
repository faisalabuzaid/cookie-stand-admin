import Form from "./form";

export default function Home({children}) {
  return(
    <div>
    <Form />
    <div className="text-center text-gray-700">
    <p>Report table coming soon..</p>
    <p>JSON Data</p>
    </div>
    
    <footer className="py-4 px-8 bg-green-500 absolute bottom-0 w-full">
      <p>&copy;2021</p>
    </footer>
    </div>
  )
}

