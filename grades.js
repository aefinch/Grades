var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var grades = [];
var numOfGrades=scores.length;
for (var i=0; i<numOfGrades; i++) {
	if (scores[i]>90){
		grades.push("A");
	} 
	else if (scores[i]>80){
		grades.push("B");
	}
	else if (scores[i]>70){
		grades.push("C");
	}
	else if (scores[i]>60){
		grades.push("D");
	}
	else {
		grades.push("F");
	}
}

var a=0;
var b=0;
var c=0;
var d=0;
var f=0;
for (var j=0; j<numOfGrades; j++) {
	if (grades[j]==="A") {
		a++;
	} else if (grades[j]==="B") {
		b++;
	} else if (grades[j]==="C") {
		c++;
	} else if (grades[j]==="D") {
		d++;
	} else {
		f++;
	}
}
console.log("There are", a, "A's");
console.log("There are", b, "B's");
console.log("There are", c, "C's");
console.log("There are", d, "D's");
console.log("There are", f, "F's");

var sort_scores = scores.sort(function(a,b){
	return b - a;
});
var sort_grades = grades.sort();
console.log("The lowest grade is a", sort_scores[numOfGrades-1], sort_grades[numOfGrades-1]);
console.log("The highest grade is a", sort_scores[0], sort_grades[0]);