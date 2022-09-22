var employee = {
    salary: 20000,
    getSalary: function () {
        console.log(this.salary);
    },
    wish1: function (wish) {
        console.log(wish, this.name)
    }

}
var employee1 = {
    salary: 30000,
    name: "siva"
}

var employee2 = {
    salary: 40000
}

employee.getSalary.call(employee1);
var f = employee.wish1.bind(employee1);
f("goodmorning")