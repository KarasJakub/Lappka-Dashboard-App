import { useLocation, Link } from "react-router-dom"

const BreadCrumbs = () => {
  const location = useLocation()
  console.log(location)

  const pathMapping: { [key: string]: string } = {
    messages: "Wiadomości",
    pets: "Karty zwierząt",
    voluntary: "Wolontariat",
    workers: "Pracownicy",
  }

  let currentLink = ""

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`

      const label =
        index === 0 && crumb === "" ? "Dashboard" : pathMapping[crumb] || crumb

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink} style={{ textDecoration: "none" }}>
            {label}
          </Link>
        </div>
      )
    })

  return <div>{crumbs}</div>
}

export default BreadCrumbs
