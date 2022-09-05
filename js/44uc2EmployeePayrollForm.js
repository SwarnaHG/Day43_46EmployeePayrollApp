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
        } catch (e) {
            textError.textContent = e;
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

});
function saveEmployeePayrollForm(){
    let employeePayrollData = new EmployeePayrollData;

    try{
        employeePayrollData.name = document.querySelector('#name').value;
    }
    catch(e){
        console.log(e);
    }

    let profile = document.querySelector('input[name="profile"]:checked');
    if(profile != null){
        employeePayrollData.profilePic = profile.value;
    }

    let gender = document.querySelector('input[name="gender"]:checked');
    if(gender != null){
        employeePayrollData.gender = gender.value;
    }

    employeePayrollData.salary = document.querySelector('#salary').value;
    employeePayrollData.note = document.querySelector('#notes').value;

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
    }

    let department = new Array;
    document.getElementsByName('department').forEach( (elemnt) => {
        if(elemnt.checked == true){
            department.push(elemnt.value);
        }
    });
    employeePayrollData.department = department;
};

function submitEmployeeForm(){
    window.location = "home.html";
}
