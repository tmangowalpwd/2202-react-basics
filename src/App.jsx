import Profile from "./components/Profile/"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import TextPage from "./pages/Text"
import List from "./pages/List"
import Filter from "./pages/Filter"
import { Text, UnorderedList, ListItem, Box } from "@chakra-ui/react"
import Register from "./pages/Register"
import ReduxCounter from "./pages/ReduxCounter"
import { useSelector } from "react-redux"
import Student from "./pages/Student"
import UserList from "./pages/UserList"
import ProductList from "./pages/ProductList"
import ProductEdit from "./pages/ProductEdit"

const data = [
  {
    fullName: "Naruto",
    position: "Hokage",
    age: 17,
  },
  {
    fullName: "Doraemon",
    position: "Kucing",
    age: 100,
  },
  {
    fullName: "Bill",
    position: "CEO",
    age: 40,
  },
]

function App() {
  const renderProfiles = () => {
    let result = data.map((val) => {
      return (
        <Profile
          fullName={val.fullName}
          position={val.position}
          age={val.age}
        />
      )
    })

    return result
  }

  const counterSelector = useSelector((state) => state.counter)
  const studentSelector = useSelector((state) => state.student)

  return (
    <Box>
      <Box minHeight="56px" backgroundColor="teal" padding="4">
        <Text fontSize="5xl" fontWeight="bold" color="white">
          Total Students: {studentSelector.data.length}
        </Text>
      </Box>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/list" element={<List />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/register" element={<Register />} />
        <Route path="/redux/counter" element={<ReduxCounter />} />
        <Route path="/redux/student" element={<Student />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<ProductList />} />

        {/* Route params */}
        <Route path="/products/:id" element={<ProductEdit />} />
      </Routes>
    </Box>
  )
}

export default App

