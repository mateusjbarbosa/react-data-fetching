// import { useEffect, useState } from 'react'

import axios from 'axios'

import { useQuery } from "react-query"
import { Link } from 'react-router-dom'

// import { useFetch } from './hooks/useFetch'

export type Repository = {
  full_name: string
  description: string
}

export function Repositories() {
  // const [repositories, setRepositories] = useState<Repository[]>([])

  // const { data: repositories, isFetching } =
  //   useFetch<Repository[]>('users/mateusjbarbosa/repos')

  // useEffect(() => {
  //   fetch('https://api.github.com/users/mateusjbarbosa/repos')
  //     .then(res => res.json())
  //     .then(data => { setRepositories(data) })

  //   axios
  //     .get('https://api.github.com/users/mateusjbarbosa/repos')
  //     .then(response => { setRepositories(response.data) })
  // }, [])

  const { data: repositories, isFetching } = useQuery<Repository[]>('repos', async () => {
    const res = await axios.get('https://api.github.com/users/mateusjbarbosa/repos')

    return res.data
  }, {
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {repositories?.map(repo => (
        <li key={repo.full_name}>
          <Link to={`/repository/${repo.full_name}`}><strong>{repo.full_name}</strong></Link>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}
