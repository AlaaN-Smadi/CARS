
function carType() {
  var car = prompt(' What type of car do you msotly like ? Sport ,Jeep or Classic Cars  ! ');



  while (car !== "Sport" && car !== "Jeep" && car !== "Classic") {

    car = prompt(' Please classify the type of car that you mostly like  ? Sport ,Jeep or Classic Cars  ! ');

  }
  return car;
}

// new function
function carCount() {
  var many_time = prompt("How many cars would you like to see");

  while (many_time < 1) {
    many_time = prompt("How many cars would you like to see. Please enter correct number");
  }
  return many_time;
}

// new function
function imagePrint(many_time) {

  for (var i = 1; i <= many_time; i++) {

    var image;

    if (car == 'Sport') {
      image = '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" width="150px" height="150px" alt="Top_Greatest_CARS">'
    } else if (car == 'Jeep') {
      image = '<img src="https://www.cnet.com/a/img/2O5f0T6kcMdIcaza_YSgYDnkDLA=/2020/08/18/cc361d02-acc1-41b1-8fc7-240eff9492bb/ogi-thar.jpg" width="150px" height="150px" alt="Top_Greatest_CARS">'
    } else {
      image = '<img src="https://thumbor.granitemedia.com/1968-ford-mustang-gt-from-bullitt/8MruAOtGQ8KLxj0L4uAsjCdlsCk=/480x352/filters:format(webp):quality(80)/granite-web-prod/85/52/855255035d5a4cbf9ea921ca327d85c6.jpeg" width="150px" height="150px" alt="Top_Greatest_CARS">'
    }

    document.write(image);

  }
}


var car = carType();
var many_time = carCount();
imagePrint(many_time);


