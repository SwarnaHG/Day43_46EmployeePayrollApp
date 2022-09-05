window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = " ";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = " ";
        } catch (invalidName) {
            textError.textContent = invalidName;
        }
    });
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
});

function saveEmployeePayrollForm(){
    let employeePayrollData = new EmployeePayrollData;

    let profile = document.querySelector('input[name="profile"]:checked');
    if(profile != null){
        employeePayrollData.profilePic = profile.value;
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if(gender != null){
        employeePayrollData.gender = gender.value;
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        console.log(e);
        return;
    }
};

    employeePayrollData.salary = document.querySelector('#salary').value;
    employeePayrollData.note = document.querySelector('#notes').value;
function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(
      localStorage.getItem("EmployeePayrollList")
  );
  if (employeePayrollList != undefined) {
      employeePayrollList.push(employeePayrollData);
  } else {
      employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem(
      "EmployeePayrollList",
      JSON.stringify(employeePayrollList)
  );
}

    let day = document.querySelector('select[name=day]').value;
    let month = document.querySelector('select[name=month]').value;
    let year = document.querySelector('select[name=year]').value;
    let errorDate = document.querySelector("#error-date");
    try{
        employeePayrollData.startDate = day + "/" + month + "/" + year;
        errorDate.textContent = " ";
    }
    catch(incorrectDate){
        errorDate.textContent = incorrectDate;
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById("#name");
    } catch (e) {
        setTextValue(".text-error", e);
        throw e;
    }

    let department = new Array;
    document.getElementsByName('department').forEach( (elemnt) => {
        if(elemnt.checked == true){
            department.push(elemnt.value);
        }
    employeePayrollData.id = createId();
    employeePayrollData.profilePic = getSelectedValues("[name=profile]").pop();
    employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
    employeePayrollData.department = getSelectedValues("[name=department]");
    employeePayrollData.salary = getInputValueById("#salary");
    employeePayrollData.note = getInputValueById("#notes");
    let date = getInputValueById("#day") + " " + 
               getInputValueById("#month") + " " + 
               getInputValueById("#year");
    employeePayrollData.startDate = new Date (Date.parse(date));
    alert(new Date (Date.parse(date)));
    alert(employeePayrollData.toString());
    return employeePayrollData;
};

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach((item) => {
        if (item.checked) selItems.push(item.value);
    });
    employeePayrollData.department = department;
    return selItems;
};

    // Setting id .
    var id = localStorage.getItem("currentID");
    if(id == null){
        localStorage.setItem("currentID" , 1);
        console.log("if id :- " + 1);
        return 2;
    }
    else{
        id = parseInt(id) + 1;
        localStorage.setItem("currentID" , id);
        console.log("else id :- " + id);
        return id;
    }
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const resetForm = () => {
  setValue("#name", "");
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  setValue("#salary", "");
  setValue("notes", "");
  setValue("#day", "1");
  setValue("#month", "January");
  setValue("#year", "2020");
};

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelector(id);
  allItems.foEach((item) => {
      item.checked = false;
  });
};

const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
};

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}; 

function submitEmployeeForm(){
    window.location = "home.html";
}
const createId = () => {
    var id = localStorage.getItem("currentId");
    if (id == undefined) {
      localStorage.setItem("currentId", 1);
      return 2;
    } else {
      id = parseInt(id) + 1;
      localStorage.setItem("currentId", id);
      return id;
    }
};
