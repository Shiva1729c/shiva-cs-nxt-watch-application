import React from 'react'

const ThemeAndSaveContext = React.createContext({
  savedList: [],
  addVideoItem: () => {},
})

export default ThemeAndSaveContext
