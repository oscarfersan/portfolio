import React from 'react'
import '../CSS/ErrorPage.css'
import useTitle from '../hooks/useSeo'
function ErrorPage() {
    useTitle({description:'Error 404 page',title:'Error 404'})
    return (
        <div className="errorPage">
          <span className="text-3d">Error 404</span>  
        </div>
    )
}

export default ErrorPage
