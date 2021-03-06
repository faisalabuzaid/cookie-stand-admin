import LoginForm from "../components/Login-form";
import axios from 'axios'
import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import Footer from "../components/Footer";

export default function Home({ children }) {
  const [totalPerHour, setTotalPerHour] = useState(0);
  const [cookieStands, setCookieStands] = useState([])
  const [tokens, setTokens] = useState()
  const [isLoggedIn, setLoggedIn] = useState(false)

  async function getToken(userData) {
    // this function get tokens from API using the username and password
    try {
      const url = 'http://cookie-stands-api1.herokuapp.com/api/token/'
      const response = await axios.post(url, userData)
      setTokens(response.data)
      setLoggedIn(true)
    } catch (err) {

    }

  }
  return (
    <div>
      {isLoggedIn ?
      <>
      <div>
      <Form action={[cookieStands, setCookieStands, setTotalPerHour, totalPerHour]} />
      <Table stands={[cookieStands, totalPerHour]}/>
      </div>
      </>
        :
        <LoginForm submitLogin={getToken} />      
      }
      <Footer className="absolute bottom-0 w-full px-8 py-4 bg-green-500" action={[cookieStands, isLoggedIn]}/>
    </div>
  )
}

