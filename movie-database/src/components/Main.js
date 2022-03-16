import Hello from './Hello';

function Main() {
  const persons = [
    {
      name: "Rafif Mulia",
      title: "Backend Developer",
    },
    {
      name: "Alex",
      title: "Frontend Developer",
    },
    {
      name: "Kahf",
      title: "Mobile Developer",
    },
    {
      name: "Tomphson",
      title: "Software Developer",
    },
  ];

  const items = persons.map((person) =>
    <Hello name={person.name} title={person.title} />
  );

  return (
    <main>
      {items}
      {/* <Hello name="Rafif Mulia" title="Backend Developer" />
			<Hello name="Alex" title="Frontend Developer" />
			<Hello name="Kahf" title="Mobile Developer" />
			<Hello name="Tomphson" title="Software Developer" /> */}
    </main>
  )
}

export default Main;