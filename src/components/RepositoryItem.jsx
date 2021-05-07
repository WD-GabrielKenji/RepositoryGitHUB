export function RepositoryItem(props){
    return (
      <li>
        <strong>{props.repository?.name ?? 'Value Default'}</strong>
        <p>{props.repository.description}</p>

        <a href={props.repository.link}>Acessar respositório</a>
      </li>
    );
}