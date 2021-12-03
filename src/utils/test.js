
const os = require('os');
const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
const util = require('util');

const WINDIR = process.env.WINDIR || 'C:\\Windows';
let wmicPath = '';

const execOptsWin = {
    windowsHide: true,
    maxBuffer: 1024 * 20000,
    encoding: 'UTF-8',
    env: util._extend({}, process.env, { LANG: 'en_US.UTF-8' })
  };

function getWmic() {
    if (os.type() === 'Windows_NT' && !wmicPath) {
      wmicPath = WINDIR + '\\system32\\wbem\\wmic.exe';
      if (!fs.existsSync(wmicPath)) {
        try {
          const wmicPathArray = execSync('WHERE WMIC', execOptsWin).toString().split('\r\n');
          if (wmicPathArray && wmicPathArray.length) {
            wmicPath = wmicPathArray[0];
          } else {
            wmicPath = 'wmic';
          }
        } catch (e) {
          wmicPath = 'wmic';
        }
      }
    }
    return wmicPath;
  }
  
function wmic(command, options) {
    options = options || execOptsWin;
    return new Promise((resolve) => {
        process.nextTick(() => {
        try {
            console.log(WINDIR, getWmic());
            exec(WINDIR + '\\system32\\chcp.com 65001 | ' + getWmic() + ' ' + command, options, function (error, stdout) {
            resolve(stdout, error);
            }).stdin.end();
        } catch (e) {
            console.log(e.message);
            resolve('', e);
        }
        });
    });
}

function getValue(lines, property, separator, trimmed, lineMatch) {
    separator = separator || ':';
    property = property.toLowerCase();
    trimmed = trimmed || false;
    lineMatch = lineMatch || false;
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].toLowerCase().replace(/\t/g, '');
        if (trimmed) {
        line = line.trim();
        }
        if (line.startsWith(property) && (lineMatch ? (line.match(property + separator)) : true)) {
        const parts = trimmed ? lines[i].trim().split(separator) : lines[i].split(separator);
        if (parts.length >= 2) {
            parts.shift();
            return parts.join(separator).trim();
        } else {
            return '';
        }
        }
    }
    return '';
}

  const imp = async () => {
    try {
        wmic('csproduct get /value').then((stdout, error) => {
            if(!error){
              let lines = stdout.split("\r\n");
              console.log(stdout);
              const manufacturer = getValue(lines, 'vender', '=');
              console.log(manufacturer);
            }else{
                console.log(error);
            }
        })
    }catch(e){
        console.log(e.message);
    }
  }

  imp();