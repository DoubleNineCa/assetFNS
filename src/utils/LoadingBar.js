const process = require("process");
const rdl = require("readline");
const si = require('systeminformation');

class LoadingBar {
    constructor(size) {
        this.size = size;
        this.cursor = 0;
        this.timer = null;
    }

    start(){
        process.stdout.write("\x1B[?251");
        for(let i = 0; i < this.size; i++){
            process.stdout.write("\u2591");
        }
        rdl.cursorTo(process.stdout, this.cursor, 1);
        this.timer = setInterval(() => {
           process.stdout.write("\u2588");
           this.cursor++;
           if(this.cursor >= 10){
               clearTimeout(this.timer);
           }
        //    if(this.cursor >= this.size){
        //        clearTimeout(this.timer);
        //    } 
        }, 100);
    }

    resume(){
        rdl.cursorTo(process.stdout, this.cursor, 1);
        this.timer = setInterval(() => {
            process.stdout.write("\u2588");
            this.cursor++;
            if(this.cursor >= this.size){
               clearTimeout(this.timer);
            } 
        }, 100);
    }
}

const ld = new LoadingBar(50);
// ld.start();
setTimeout(async () => {
    const networks = await si.networkInterfaces();

    const ipAddr = networks.filter(network => {
        if(network.iface.includes("Ethernet") || network.iface.includes("Wi-Fi")){
            if(network.ip4.length > 0 && !network.ifaceName.toLowerCase().includes("virtual")){
                return network;
            } 
        }
    }).map(filtered => filtered.iface + " - " + filtered.ip4);

    // ld.resume();    
}, 2000);
