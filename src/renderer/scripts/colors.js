'use strict'

const fs = require("fs");
const { dialog } = require('electron').remote

/// const dataPath = process.cwd() + "/StoreLand.dat";
var regions;
const colors = [
  '',
  '#c93756',  // group one's color
  '#f97d1b',     // group two's color
  '#fff143',   // group three's color
  '#00e079',    // group four's color
  '#7df3ff',     // group five's color
  '#8d4bbb',   // group six's color
  '#ff0097',   // group seven's color
  '#984400',     // group eight's color
  '#eacd76',  // group nine's color
  '#758a99'   // group ten's color
]

function setRegions() {

  let fileData = fs.readFileSync(global.path[0], "utf8").split("\n");

  // make a 2D array of fileData 
  for (let i = 0; i < fileData.length; i++) {
    fileData[i] = fileData[i].split(",");
  }

  regions = fileData;
}

function setRegionColors(id) {
  let blockId = "block" + id;
  let block = document.getElementById(blockId);
  block.style.fill = colors[regions[id - 1][2]]
}

export function watchFileChanges() {
  fs.watchFile(global.path[0], (curr, prev) => {
    try {
      setRegions();
    } catch (err) {
      console.log(err)
      return;
    }

    for (let i = 1; i <= 45; i++) {
      setRegionColors(i);
    }  
  })
}