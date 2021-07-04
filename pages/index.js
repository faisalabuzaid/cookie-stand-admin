import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Footer from "../components/Footer";
import data from '../pages/data';


export default function Home({ children }) {
  const [totalPerHour, setTotalPerHour] = useState(0);
  const [cookieStands, setCookieStands] = useState([])
 
  return (
    <div>
      <Form action={[cookieStands, setCookieStands, setTotalPerHour, totalPerHour]} />
      <Table stands={[cookieStands, totalPerHour]}/>
      <Footer action={cookieStands}/>
    </div>
  )
}

