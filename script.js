async function main() {
	const res = await fetch(`./people.json`);
	const people = await res.json();
	const listContainer = document.getElementById(`listContainer`);

	people.forEach((person) => {
		const li = document.createElement(`li`);
		li.innerText = `${person.lname}, ${person.fname}`;
		listContainer.appendChild(li);
	});
}

main();

