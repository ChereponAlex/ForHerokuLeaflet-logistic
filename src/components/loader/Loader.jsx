/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */

import React, { useEffect, useState } from "react"
import './loader.css'

export const PageSpinner = (props) => {
  const [pageLoaded, setPageLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageLoaded(true)
    } , props.countDown)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <React.Fragment>
      {
        pageLoaded && !props.httpRequestsPending ? null
          :

          <div className="wrapper">
            <div className="loader" />
          </div>
      }
    </React.Fragment>
  )}
