module.exports = function emailTemplateFunc(request) {
  return `<h1>NBCUniversal TVP Request Confirmation</h1>
    <h2>${request._id}</h2>
    <a href="http://localhost:3000/request/${request._id}" >Click here to view request</a>
    <h3>Name - ${request.nameContact}</h3>
    <h3>${request.emailContact}</h3>
    <h3>${request.phoneContact}</h3>
    <h3>${request.production}</h3>
    <h3>${request.productionEmail}</h3>
    <h3>${request.productionPhone}</h3>
    <h3>${request.equipment}</h3>    
    <h3>${request.detail}</h3>
    <h3>${request.emailContact}</h3>
    <h3>${request.department}</h3>
    <h3>${request.location}</h3>
    <h3>${request.lat}</h3>
    <h3>${request.lng}</h3>    
    <h3>${request.detail}</h3>
    <h3>${request.timeZone}</h3>
    <h3>${request.businessDivision}</h3>
    <h3>${request.dateBy}</h3>
    <h3>${request.note}</h3>
    <h3>${request.dateCreated}</h3>
    <h3>${request.status}</h3>
    <h3>${request.activeSwitch}</h3>`;
};
