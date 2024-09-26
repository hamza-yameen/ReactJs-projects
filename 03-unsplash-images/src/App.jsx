import { useState, useEffect } from 'react'
import Form from './components/Form'
import Photo from './components/Photo'

const clientID = `?client_id=${process.env.REACT_APP_UNSPLASH_API_CLIENT_ID}`
const mainUrl = process.env.REACT_APP_MAIN_URL
const searchUrl = process.env.REACT_APP_SEARCH_URL

function App() {
  const [searchQuery, setSearchQuery] = useState('random')
  const [page, setPage] = useState(3)
  const [loading, setLoading] = useState(false)
  const [unsplashImages, setUnsplashImages] = useState([])

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
        if (searchQuery && newPage) {
          return responseData.results
        } else {
          return [...oldImages, ...responseData.results]
        }
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const onFormSubmitHandler = (e) => {
    e.preventDefault()
    if (searchQuery) {
      fetchImages(1)
      setPage(1)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

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
    </div>
  )
}

export default App
