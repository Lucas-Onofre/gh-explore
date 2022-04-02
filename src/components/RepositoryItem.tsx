interface RepositoryItemProps {
  repository: {
    name: string,
    description: string,
    html_url: string
  }
}

export function RepositoryItem({ repository }: RepositoryItemProps){
  return(
    <li>
      <strong>{ repository.name ?? 'Default' }</strong>
      <p>{ repository.description ?? 'sem descrição' }</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  );
}