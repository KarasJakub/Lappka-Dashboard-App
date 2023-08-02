import { useLocation, Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"

const BreadCrumbs = () => {
  const location = useLocation()
  const [crumbs, setCrumbs] = useState<JSX.Element[]>([])

  const pathMapping: { [key: string]: string } = useMemo(
    () => ({
      messages: "Wiadomości",
      pets: "Karty zwierząt",
      voluntary: "Wolontariat",
      workers: "Pracownicy",
    }),
    []
  )

  useEffect(() => {
    let currentLink = ""
    const breadcrumbElements = location.pathname
      .split("/")
      .filter((crumb) => crumb !== "")
      .map((crumb, index) => {
        currentLink += `/${crumb}`

        let label = crumb === "" ? "Dashboard" : pathMapping[crumb] || crumb

        // Replacing "-" into empty space
        label = label.replace(/-/g, " ")

        // Changing first letter to upper case
        label = label.replace(/(?<=\s|^)(\w)/g, (match) => match.toUpperCase())

        return (
          <Link to={currentLink} style={{ textDecoration: "none" }} key={crumb}>
            {label + " "}
          </Link>
        )
      })
    setCrumbs(breadcrumbElements)
  }, [location.pathname, pathMapping])

  return <div>{crumbs}</div>
}

export default BreadCrumbs
