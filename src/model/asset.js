class Asset {
    constructor(obj){
        this.updatedDate = obj.updateddate;
        this.employee_id = obj.employee_id;
        this.employee_name = obj.employee_name;
        this.serial_no = obj.serial_no;
        this.manufacturer = obj.manufacturer;
        this.model = obj.model;
        this.brand = obj.brand;
        this.os = obj.os;
        this.disk = obj.disk;
        this.ram = obj.ram;
        this.bitdefender = obj.bitdefender;
    }
}

module.exports = Asset;