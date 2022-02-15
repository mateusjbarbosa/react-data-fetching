import { useQueryClient } from "react-query"

import { useParams } from "react-router-dom"

import { Repository as RepositoryEntity } from "./Repositories"

export function Repository() {
  const params = useParams()
  const currentRepository = params['*'] as string

  const queryClient = useQueryClient()

  async function handleChangeRepositoryDescription() {
    // call api to change description in backend

    const previousRepositories = queryClient.getQueryData<RepositoryEntity[]>('repos')

    if (previousRepositories) {
      const newRepositoryList = previousRepositories.map(repo => {
        if (repo.full_name === currentRepository) {
          return { ...repo, description: 'Testando' }
        } else {
          return repo
        }
      })

      queryClient.setQueryData('repos', newRepositoryList)
    }
  }

  return (
    <div>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar descrição</button>
    </div>
  )
}