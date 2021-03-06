import React, {useState, useContext, useEffect} from 'react'
export const API_ENDPOINT =    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_APIKEY}`

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState({show:false, msg:''});
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('')

    const fetchMovies = (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await resposen.json();
            console.log(data)
        } catch (error) {

        }
    }


    useEffect(() => {
        fetchMovies(`${API_ENDPOINT}`)
    }, [])
    return <AppContext.Provider value = 'hello'>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}