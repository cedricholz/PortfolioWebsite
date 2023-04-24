import {withRouter} from "react-router"
import {useEffect} from "react"

const ScrollToTop = (
    {
        location,
        children
    }
) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return children

}

export default withRouter(ScrollToTop)