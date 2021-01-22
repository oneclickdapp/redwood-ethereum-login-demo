// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage
import { useAuth } from '@redwoodjs/auth'

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Private unauthenticated="login">
        <Route path="/users/new" page={NewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
        <Route path="/users" page={UsersPage} name="users" />
      </Private>
      <Route path="/users/{id}" page={UserPage} name="user" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
