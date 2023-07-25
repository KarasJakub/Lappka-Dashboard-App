import { useLocation } from "react-router-dom"

const TopBar = () => {
  const location = useLocation()
  return <div>TopBar {location.pathname}</div>
}

export default TopBar
