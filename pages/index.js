import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Home({ children }) {

  const [oneStand, setOneStand] = useState([]);
  console.log(oneStand)
 
  return (
    <div>
      <Form action={[oneStand, setOneStand]} />
      <Table action={oneStand}/>
      <Footer action={oneStand}/>
    </div>
  )
}

