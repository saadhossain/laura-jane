import { useEffect } from "react"

const useTitle = (title) =>{
    useEffect(()=> {
        document.title = `${title} - Laura Jane`
    }, [title])
}
export default useTitle;