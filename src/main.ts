enum DayOfWeek {
  Sunday, Monday, Tuesday="Tue", Wednesday=0, Thursday, Friday, Saturday,
   Sun = 0, Mon, Tue, Wed, Thu, Fri, Sat
}

let dayOfWeek1 = DayOfWeek.Sunday;
let dayOfWeek2 = DayOfWeek.Sun;
if (dayOfWeek1 === dayOfWeek2){
  console.log("The same day of the week");
}
