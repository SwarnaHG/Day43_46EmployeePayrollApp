class EmployeePayrollData {
    //getter and setter method
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = /^[A-Z][A-Z a-z]{3,}$/;
        if (nameRegex.test(name)){
            this._name = name;
        }
        else{ 
            throw "Name is incorrect!";
        }
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    

    get startDate() {
        return this.startDateValue;
        return this._startDate;
    }

    set startDate(startDate) {
        let date = startDate.split("/");
        let todayDate = new Date();
        let employeeDate = new Date(date[2], date[1]-1 , date[0]);

        var diff = (todayDate.getTime() - employeeDate.getTime() );
        if(employeeDate > todayDate){
            throw "start date cannot be future date."
        }
        if( diff < (30 * 24 * 60 * 60 * 1000) && diff > 0 ) {
            this.startDateValue = startDate;
        }
        else {
            throw "Start date cannot be less than 30 days.";
        }
        let now = new Date();
        if (startDate > now) throw "Start Date is a Future Date!";
        var diff = Math.abs(now.getTime() - startDate.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30) throw "Start date is beyond 30 days";
        this._startDate = startDate;
    }

    //method
    toString() {
        const option = { day: "numeric", month: "short", year: "numeric" };
        const empDate = !this.startDate ?
            "undefined" :
            this.startDate.toLocaleDateString("en-GB", option);
        return (
            "id=" + this.id +
            ",name= '" + this.name +
            ",gender= '" + this.gender +
            ",profilePic= '" + this.profilePic +
            ",department=" + this.department +
            ",salary=" + this.salary +
            ",startDate=" + empDate +
            ",note=" + this.note
        );
    }
}