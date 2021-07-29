async function main() {
	const res = await fetch(`./people.json`);
	const people = await res.json();
	const mainDiv = document.getElementById(`mainDiv`);

	people.forEach((person) => {
		const pTag = document.createElement(`p`);
		pTag.innerText = `${person.lname}, ${person.fname}`;
		mainDiv.appendChild(pTag);
	});
}

main();

