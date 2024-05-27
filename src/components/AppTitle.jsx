export default function AppTitle(props) {
  const { title = 'Box-Office', subtitle = 'Everything about a Movie' } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
