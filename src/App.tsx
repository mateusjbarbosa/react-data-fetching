// import { useEffect, useState } from 'react'

import axios from 'axios'

import { useQuery } from "react-query"

// import { useFetch } from './hooks/useFetch'

type Repository = {
  full_name: string
  description: string
}

function App() {
  // const [repositories, setRepositories] = useState<Repository[]>([])

  // const { data: repositories, isFetching } =
  //   useFetch<Repository[]>('users/mateusjbarbosa/repos')

  const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async () => {
    const res = await axios.get('https://api.github.com/users/mateusjbarbosa/repos')

    return res.data
  })

  // useEffect(() => {
  //   fetch('https://api.github.com/users/mateusjbarbosa/repos')
  //     .then(res => res.json())
  //     .then(data => { setRepositories(data) })

  //   axios
  //     .get('https://api.github.com/users/mateusjbarbosa/repos')
  //     .then(response => { setRepositories(response.data) })
  // }, [])

  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {repositories?.map(repo => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
