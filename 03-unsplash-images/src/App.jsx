import { useState, useEffect } from 'react'
import Form from './components/Form'
import Photo from './components/Photo'
import Loader from './components/Loader'

const clientID = `?client_id=${process.env.REACT_APP_UNSPLASH_API_CLIENT_ID}`
const mainUrl = process.env.REACT_APP_MAIN_URL
const searchUrl = process.env.REACT_APP_SEARCH_URL

function App() {
  const [searchQuery, setSearchQuery] = useState()
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [unsplashImages, setUnsplashImages] = useState([])
  const [newImages, setNewImages] = useState(false)

  const fetchImages = async (newPage = null) => {
    setLoading(true)

    let url
    const urlPage = `&page=${newPage ? newPage : page}`
    const urlQuery = `&query=${searchQuery}`

    if (searchQuery) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
    } else {
      url = `${mainUrl}${clientID}${urlPage}`
    }

    try {
      const response = await fetch(url)
      const responseData = await response.json()

      setUnsplashImages((oldImages) => {
        if (searchQuery && page === 1) {
          return responseData.results
        } else if (searchQuery) {
          return [...oldImages, ...responseData.results]
        } else {
          return [...oldImages, ...responseData]
        }
      })
      setLoading(false)
      setNewImages(false)
    } catch (error) {
      setLoading(false)
      setNewImages(false)
    }
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault()
    if (searchQuery) {
      fetchImages(1)
      setPage(1)
    }
  }

  const onScrollEventHandler = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollEventHandler)
    return () => window.removeEventListener('scroll', onScrollEventHandler)
  }, [])

  useEffect(() => {
    if (loading && !newImages) return
    setPage((prePage) => prePage + 1)
  }, [newImages])

  useEffect(() => {
    fetchImages()
  }, [page])

  return (
    <div className="bg-home-custom-gradient min-h-screen w-screen">
      <Form
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onFormSubmitHandler={onFormSubmitHandler}
      />
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-center pb-5">
          {unsplashImages.length > 0 &&
            unsplashImages.map((image, index) => (
              <Photo key={index} {...image} />
            ))}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  )
}

export default App
