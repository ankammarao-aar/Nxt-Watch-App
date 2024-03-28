import React from 'react'

const SavedContext = React.createContext({
  savedList: [],
  addSavedItem: () => {},
  deleteSavedItem: () => {},
  darkTheme: false,
  toggleDarkTheme: () => {},
  activeTab: '',
  changeActiveTab: () => {},
})

export default SavedContext
