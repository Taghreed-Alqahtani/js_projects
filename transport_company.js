class Vehicle
{
    constructor(vehicleId,name,company)
    {
        this.vehicleId=vehicleId
        this.name=name
        this.company=company
    }
}
class Car extends Vehicle
{
    static cars=[]
    constructor(vehicleId,name,company,carType,color)
    {
        super(vehicleId,name,company)
        this.carType=carType
        this.color=color
        Car.saving(this.vehicleId)
    }
    static saving(vehicleId)
    {
        Car.cars.push(vehicleId)
    }
}
class Plane extends Vehicle
{
    static planes=[]
    constructor(vehicleId,name,company,planeType)
    {
        super(vehicleId,name,company)
        this.planeType=planeType
        Plane.saving(this.vehicleId)
    }
    static saving(vehicleId)
    {
        Plane.planes.push(vehicleId)
    }
}
class Employee
{
    constructor(employeeId,name,dateOfBirth)
    {
        this.employeeId=employeeId
        this.name=name
        this.dateOfBirth=dateOfBirth
    }
}
class Chauffeur extends Employee
{
    static chauffeurs=[]
    constructor(employeeId,name,dateOfBirth,licenseId)
    {
        super(employeeId,name,dateOfBirth)
        this.licenseId=licenseId
        Chauffeur.saving(this.employeeId)
    }
    static saving(employeeId)
    {
        Chauffeur.chauffeurs.push(employeeId)
    }
}
class Pilot extends Employee
{
    static pilots = []
    constructor(employeeId,name,dateOfBirth,licenseId)
    {
        super(employeeId,name,dateOfBirth)
        this.licenseId=licenseId
        Pilot.saving(this.employeeId)
    }
    static saving(employeeId)
    {
        Pilot.pilots.push(employeeId)
    }
}
class Reserved
{
    static reservations=[]
    static #reservationID=1000
    constructor  ( reservationDate, employeeId , vehicleId )
    {
        this.reservationDate=reservationDate
        this.employeeId=employeeId
        this.vehicleId=vehicleId
        Reserved.reserv(Reserved.#reservationID++,this.reservationDate,this.employeeId,this.vehicleId)
    }
    static reserv(reservationID,reservationDate,employeeId,vehicleId)
    {
        let reserved = 'reservation number '+reservationID+' at '+reservationDate+' pilot ID : '+employeeId+' plane ID : '+vehicleId
        Reserved.reservations.push(reserved)
    }
}

const camry = new Car (12,'camry','toyota','gas','white')
const accent = new Car (18,'accent','hyundai','gas','black')
const accord = new Car (20,'accord','honda','gas','blue')
const landPlane = new Plane (1010,'landPlane','Bombardier','fuel')
const flyingBoat = new Plane (1090,'flyingBoat','Bombardier','fuel')
const ahmad = new Chauffeur (200,'ahmad','1999-09-22',117734)
const hassan = new Pilot (220,'hasssn','1998,12-09',118749)

function checkAndReserve(employeeId,vehicleId)
{
      
    if(Plane.planes.includes(vehicleId) && Pilot.pilots.includes(employeeId))
    {
        let date = new Date()
        let newReservation = new Reserved(date,employeeId,vehicleId)
        
    }
    else 
    {
        console.log('Not Match')
    }
}
checkAndReserve(220,1010)
checkAndReserve(hassan.employeeId,flyingBoat.vehicleId)

Reserved.reservations.map( function (reservation) 
{
    console.log(reservation)
})

checkAndReserve(200,1090)