import { useEffect, useState } from "react";
import type { TimezoneInfo } from "./assets/types";


const App = () => {

  const [timer, setTimer] = useState<number>(0);
  const [title, setTitle] = useState<string>(localStorage.getItem("title") ?? "Hello World")
  const [timeZoneInfo, setTimeZoneInfo] = useState<TimezoneInfo>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const handle = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      // Handle is id of setInterval function
      clearInterval(handle)
    }
  }, [])

  useEffect(() => {
    document.title = title;
    localStorage.setItem("title", title)
  }, [title]) // Dependency array, states what changes trigger the useEffect

  useEffect(() => {
    const fetchApi = async() => {
      setError("");
      setLoading(true)
      try {
        let response = await fetch("https://worldtimeapi.org/api/timezone/Europe/Brussels")
        if(response.ok) {
          let json: TimezoneInfo = await response.json();
          setTimeZoneInfo(json);
        } else {
          setError("Error fetching timezone info")
        }
      } catch (e: any) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchApi();
  }, [])


  return(
    <>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
    <div>{timer}</div>
     
    {loading && (
      <p>loading...</p>
    )}

    {timeZoneInfo && (
      <div> 
        {timeZoneInfo.timezone} 
        {timeZoneInfo.client_ip}
      </div>
    )}

    <div>{error}</div>
    </>
  )
}

export default App;