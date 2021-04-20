import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

const ErrorPage: React.FC = () => {
  useEffect(() => {
    navigate('/') // redirecting to home page
  }, [])

  return (
    <div>
      <h1>(404) NotFound Page</h1>
    </div>
  )
}

export default ErrorPage
