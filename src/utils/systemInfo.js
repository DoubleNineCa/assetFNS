const fis = require('fetch-installed-software');
const si = require('systeminformation');
const prompt = require("prompt-sync")();
const client = require('./database');
const Asset = require('../model/asset');

const getSystem = async (employeeId, employee_name, twirlTimer) => {
    try{
        const system = await si.system();
        const today = new Date();

        client.connect();

        const qry = `SELECT * FROM assets where serial_no='${system.serial}' or employee_id='${employeeId}'`;

        client.query(qry, 
           async (err, res) => {
                if(!err){
                    if(res.rows.length > 0){
                        res.rows.map(obj => {
                            const cur_asset = new Asset(obj);
                            const latestUpdate = new Date(cur_asset.updatedDate);
                            if(system.serial !== cur_asset.serial_no || employeeId !== cur_asset.employee_id){
                                console.log('자산 불일치');
                            }else if(today.getFullYear() > latestUpdate.getFullYear()){
                                console.log("자산 업데이트");
                            }else {
                                console.log("You've already done before.");
                            }
                        })
                    } else {
                        await insertAssetInfo(employeeId, employee_name, client, system);
                    }
                    
                    clearInterval(twirlTimer);
                    console.log("Done!");
                    client.end();
                }
            }  
        );
    }catch(e){
        console.log(e.message);
    }
}

const insertAssetInfo = async (employeeId, employee_name, client, cur_asset) => {
    const mem = await si.mem();
    const cpu = await si.cpu();
    const osInfo = await si.osInfo();
    const diskLayout = await si.diskLayout();
        const filtered = diskLayout.map(data => data.type + " / " + (data.size/(1000*1000*1000)).toFixed(2) + "GB");
        const softwareList = await fis.getAllInstalledSoftware();
        const verifyBitdefender = softwareList.filter(program => program.DisplayName && program.DisplayName.toLowerCase().includes("bitdefender") > 0);
        const networks = await si.networkInterfaces();
        const ipAddr = networks.filter(network => {
            if(network.iface.includes("Ethernet") || network.iface.includes("Wi-Fi")){
                if(network.ip4.length > 0 && !network.ifaceName.toLowerCase().includes("virtual")) return network;
            }
        }).map(filtered => filtered.iface + " - " + filtered.ip4);


    const qry = `INSERT INTO ASSETS VALUES (now(), '${employeeId}', '${employee_name}', '${cur_asset.serial}', '${cur_asset.manufacturer}', '${cur_asset.model}', '${cpu.brand}', '${osInfo.distro}', '${filtered.toString()}', '${Math.floor(mem.total / (1000*1000*1000))} GB', '${verifyBitdefender.length > 0 ? "Y" : "N"}', '${ipAddr.toString()}');`

    // insert data
    client.query(qry, (err) => {
        if(!err){
            client.end();
        }
    })
}

module.exports = { getSystem }