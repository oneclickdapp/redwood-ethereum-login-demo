import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const users = () => {
  // @dev Server-side restriction from accessing data without being logged in
  requireAuth()
  return db.user.findMany()
}

export const user = ({ id }) => {
  requireAuth()
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  // @dev Users are created during login `src/services/ethereumAuth`
  // You may remove this method here
  return null
}

export const updateUser = ({ id, input }) => {
  // @dev Add role/ownership restrictions here
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  // @dev Add role/ownership restrictions here
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  authDetail: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).authDetail(),
}
