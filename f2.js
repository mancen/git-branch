function BMI(hight,weight){
  var h = parseInt(hight)/100;
  var w = parseInt(weight);

  var bmi = (w/(h*h)).toFixed(2);

  console.log(bmi);
}
