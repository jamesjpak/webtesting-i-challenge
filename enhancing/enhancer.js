module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {

  // if enhancement value is > 20, no increment
  // if enhancement value is < 20, increment by 1

    if (item.enhancement < 20) {
      item.enhancement++
    } 
      
  return { ...item }
}

function fail(item) {
  // when enhancement less than 15 decreases durability by 5
  // when enhancement is 15 or more durability decrease by 10
  // when enhancement is greater than 16, enhancement decrements by one

  if (item.enhancement < 15) {
    item.durability = item.durability - 5;
  } else if (item.enhancement > 15) {
    item.durability = item.durability - 10
  } else if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1
  }

  return { ...item };
}

function repair(item) {
  
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
