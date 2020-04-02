//Question 6
const count = {
	let counter = 0;
	function add(){
		counter += 1;
	};
	function reset(){
		counter = 0;
	};
	return{
		'add': function(){
			return add();
		},
		'reset': function(){
			return reset();
		},
		'counter': function(){
			return counter;
		}
	}
};

//Question 8
const count = {
	let counter = 0;
	let inc;
	function make_adder(inc){ //make_adder function
		counter += inc;
	};
	function add(){
		counter += 1;
	};
	function reset(){
		counter = 0;
	};
	return{
		'add': function(){
			return add();
		},
		'reset': function(){
			return reset();
		},
		'value': function(){
			return counter;
		},
		'makeAdder': function(inc){ //call to make adder function
			return make_adder(inc);
		}
	}
};

//Question 10
const employee = (function(){
	let name;
	let age;
	let salary;
	let address;
	function setAge(newAge){
		this.age = newAge;
	};
	function setSalary(newSalary){
		this.salary = newSalary;
	};
	function setName(newName){
		this.name = newName;
	};
	function getAge(){
		return age;
	};
	function getSalary(){
		return salary;
	};
	function getName(){
		return name;
	};
	function increaseSalary(percentage){//percentage should be less than or equal to 1
		salary = (1 + percentage)*getSalary();
	};
	function incrementAge(){
		age = (getAge()) + 1;
	};
	return{
		setAge:setAge,
		setName:setName,
		setSalary:setSalary,
		increaseSalary:increaseSalary,
		incrementAge:incrementAge
	};
})();

//Question 11
const address = (function(){
	let address;
	setAddress = function(newAddress){
		this.address = newAddress;
	};
	getAddress = function(){
		return address;
	};
	return{
		setAddress:setAddress,
		getAddress:getAddress
	}
})();

const employee3 = (function(address){
	let name;
	let age;
	let salary;
	function setAge(newAge){
		this.age = newAge;
	};
	function setSalary(newSalary){
		this.salary = newSalary;
	};
	function setName(newName){
		this.name = newName;
	};
	function getAge(){
		return age;
	};
	function getSalary(){
		return salary;
	};
	function getName(){
		return name;
	};
	function increaseSalary(percentage){//percentage should be less than or equal to 1
		salary = (1 + percentage)*getSalary();
	};
	function incrementAge(){
		age = (getAge()) + 1;
	};
	return{
		setAge:setAge,
		setName:setName,
		setSalary:setSalary,
		increaseSalary:increaseSalary,
		incrementAge:incrementAge,
		setAddress:address.setAddress,
		getAddress:address.getAddress
	};
})(address);
