import React from 'react'

const SearchBox = () => {
  return ( <>
    <div className="field has-addons">
  <div className="control">
    <input className="input" type="text" placeholder="Find a repository" />
  </div>
  <div className="control">
    <a href='#' className="button is-info">
      Search
    </a>
  </div>
</div>
  </>  
  )
}

export default SearchBox