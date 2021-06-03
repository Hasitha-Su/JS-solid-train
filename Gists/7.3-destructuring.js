// destructing with functions

const virtual_machine = {
  cpu: "Premium Intel",
  memory: "16GB",
  disk_type: "SSD",
  storage: "50GB",
  currency: "USD",
  monthly_cost: 12,
  required_months: 0,
};

// you can extract only properties you need

//this function has no default values
// so if required_months:0, it will out put 0 USD
/*
const calc_annual_fee1 = ( {monthly_cost, required_months,}) => {
  let total_fee =  (monthly_cost * required_months)
  return total_fee 
}
*/

//this function has default values for reqired months
// if the reqired months:0, it will by default calculate the fee for 12 months
const calc_annual_fee2 = ({ monthly_cost }, { required_months = 12 } = {}) => {
  let total_fee = monthly_cost * required_months;
  return total_fee;
};

//pass virtual machine object

//without default value
console.log("Annual fee is:", calc_annual_fee2(virtual_machine, {required_months: 10}),"USD")

//with default value
console.log("Annual fee is:", calc_annual_fee2(virtual_machine), "USD");