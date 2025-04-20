enum DayOfWeek {
  Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday,
   Sun, Mon, Tue, Wed, Thu, Fri, Sat
}

let dayOfWeek1 = DayOfWeek.Sunday;
let dayOfWeek2 = DayOfWeek.Sun;
if (dayOfWeek1 === dayOfWeek2){
  console.log("The same day of the week");
}
