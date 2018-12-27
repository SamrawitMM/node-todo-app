var schema = require('./Schema');
var mongoose = require("mongoose");
var path  = require('path');


let dataManager = { }
dataManager._PORT = 3000;
dataManager._DB = `mongodb://locahost:${dataManager._PORT}/LIMS`;
const member = mongoose.model('Member', schema.MemberSchema);
console.log('working')
var db = null;
const CONNECTED = 1

dataManager.open = function(){
    return new Promise((resolve, reject) =>  {
        db = mongoose.connection;
        db.on('error', (err) => {
            console.log("unable to connect")
            reject(err)
        })
        db.once("open", function(){
            console.log("connected")
            resolve(db)
        });
        mongoose.connect(dataManager._DB, {useMongoClient:true});

    })
}

let dbOpen = () => {
    return db && db.readyState == CONNECTED;
}

dataManager.addMember = function(member){
    let promise = new Promise(function(resolve, reject){
        let memberAdd = new Member({
            firstName :member.firstName,
            lastName : member.lastName,
            memberid : member.memberid,
            password : member.password,
            department : [],
            address : member.address,
            typeOfUser : [],
            phoneNumber : member.phoneNumber,
            sex : member.sex,
            email : member.email,
            dateOfBirth : member.dateOfBirth
                
        });
        if(!dbOpen()){
            reject(new Error('db not open'));
        }
        memberAdd.save(function(err, mbr){
            if(err !== null) reject(err);
            else{
                resolve(mbr.id)
            }
        })
    })
    return promise;
}