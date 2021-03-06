function Calculator() {

    let operators = {           // მეთოდი შევქმენი operator-ების ამოსაცნობად, რომელსაც გამოვიყენებ if statement-ში
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {      //მეთოდი - calculate რომელიც ყოფს მოცემულ სტრინგს ნაწილებად რათა დაადგინოს რიცხვებისა და ნიშნების მნიშვნელობები.
        let split = str.split(' '),         // .split() გამოიყენება სტრინგის გარკვეული მაჩვენებლის მიხედვით დასაყოფად ამ შემთხვევაში ' '-space-თ
            a = +split[0],                  // დანაყოფები ინომრებიან 0-დან და ენიჭებათ შესაბამისი მნიშვნელობები.
            operator = split[1],
            b = +split[2]

        return operators[operator](a,b);    // აბრუნებს მოქმედების ნიშნის (+ , -) შესაბამის მოქმედებას, გაწერილს operators მეთოდში
    }

    this.addMethod = function (name, func) {    // Calculator-ს ასწავლის ახალ მოქმედებას
        operators[name] = func;                 //  გადასცემს ახალი მოქმედების სახელს და ამატებს operators მეთოდში და ანიჭებს შესაბამისი მოქმედების ფუნქციას.
    };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7"));

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result);

// let result = powerCalc.calculate("2 / 2");
// alert(result);

// let result = powerCalc.calculate("2 * 5");
// alert(result);