let marks = [85,63,93,57,71]

const highestMarksFinder = (marks) => {
	let highestMarks = 0;

	marks.forEach( (studentMark) => {
		studentMark > highestMarks ? highestMarks = studentMark : undefined;
	})

	return highestMarks;
}
const result = highestMarksFinder(marks);
console.log("Highest marks our of 5 students is : " , result);