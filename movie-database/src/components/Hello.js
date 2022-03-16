/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
 function Hello(props) {
  // Melakukan destructing props (object)
  const { name, title } = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - {title}</p>
    </div>
  );
}

export default Hello;