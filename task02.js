/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
	{
		name: "Rafif Mulia",
		age: 20,
		major: "Backend Developer",
	},
	{
		name: "Person 02",
		age: 22,
		major: "Academic Lecturer",
	},
	{
		name: "Person 03",
		age: 30,
		major: "Software Engineer",
	},
	{
		name: "Person 04",
		age: 19,
		major: "Frontend Developer",
	},
	{
		name: "Person 05",
		age: 23,
		major: "Devops",
	},
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
	for (const key in users) {
		console.log(`${key}: ${users[key].name} | ${users[key].age} | ${users[key].major}`);
	}
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
	users.push(user);
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
	users[index] = user;
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
	// If you do want an empty slot:
	// users[index] = undefined;

	// If you don't want an empty slot:
	users.splice(index, 1);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
	/**
	 * Test function index
	 */
	console.log("# Get All Users");
	all();

	/**
	 * Test function store
	 */
	console.log("# Add New User: Sabiq");
	const newUser = {
		name: "Sabiq",
		age: 20,
		major: "Informatics",
	};
	store(newUser);
	all();

	/**
	 * Test function update
	 */
	console.log("# Edit User Index 1: Isfa");
	const editedIndex = 1;
	const editedUser = {
		name: "Isfhani Ghiyath",
		age: 23,
		major: "English",
	};
	update(editedIndex, editedUser);
	all();

	/**
	 * Test function destroy
	 */
	console.log("# Delete User Index 2: Nurul");
	const deletedIndex = 2;
	destroy(deletedIndex);
	all();
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };