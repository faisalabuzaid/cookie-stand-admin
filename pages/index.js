import { useState } from "react";
import Form from "../components/Form"
import LoginForm from "../components/Login-form";
import axios from 'axios'
import Table from "../components/Table";

export default function Home({ children }) {
  const [data, setData] = useState({});
  const result = JSON.stringify(data)
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
      {isLoggedIn ? <><Form action={[data, setData]} />
        <div className="text-center text-gray-700">
          <Table stands={[data]}/>
        </div>
      </>
        :
        <LoginForm submitLogin={getToken} />
      }
      <footer className="absolute bottom-0 w-full px-8 py-4 bg-green-500">
        <p>&copy;2021</p>
      </footer>
    </div>
  )
}

