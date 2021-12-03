const fis = require('fetch-installed-software');
const si = require('systeminformation');
const nodemailer = require("nodemailer");
const { systemInfoTemplate } = require('./email/SystemInfoTemplate');
const { getSystem } = require('./utils/systemInfo');
const prompt = require("prompt-sync")();
const client = require('./utils/database');

let P = ["\\", "|", "/", "-"];
let x = 0;

let twirlTimer = setInterval(() => {
        process.stdout.write("\rprocessing..." + P[x++]);
        x &= 3;
    }, 250);
const employeeId = prompt('Input your employee ID >');
const name = prompt('Input your name >').toUpperCase();

// Case 1. Find user by Employee ID with S/N (have an access to FNS database)
//      - If Employee ID exist, get Employee information (Registered asset information, Branch, Dept, etc)
//      - Compare S/N -> Yes -> Compare rest of hardware information if it has different data(Ex. Device upgrade) update information (test DB => FNS DB)
//                    -> No  -> Send email to (Manager of registered asset information, Manager of current Employee ID, ACCT) with asset ownership update request

// Error logs will be stored in other database

// Case 2. Get basic information from users (typo errors could be occured)
//      - Employee ID
//      - Branch information
//      - Name
//      - 
const sii = getSystem(employeeId, name, twirlTimer);

