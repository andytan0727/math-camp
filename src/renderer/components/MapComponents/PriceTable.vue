<template>
  <div id="outerPriceTableDiv">
    <div id="priceTableVueDiv">
      <table>
        <tbody>
          <tr v-for="land in lands"
              :key="land.region">
            <td class="tableRegion">
              {{ land.region }}
            </td>
            <td id="tablePrice">
              {{ land.price }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import fs from 'fs'
const { dialog } = require('electron').remote

export default {
  data () {
    return {
      path: '',
      lands: [
        {price: "$0", region: 'land1:'},
        {price: "$0", region: 'land2:'},
        {price: "$0", region: 'land3:'},
        {price: "$0", region: 'land4:'},
        {price: "$0", region: 'land5:'},
        {price: "$0", region: 'land6:'},
        {price: "$0", region: 'land7:'},
        {price: "$0", region: 'land8:'},
        {price: "$0", region: 'land9:'},
        {price: "$0", region: 'land10:'},
        {price: "$0", region: 'land11:'},
        {price: "$0", region: 'land12:'},
        {price: "$0", region: 'land13:'},
        {price: "$0", region: 'land14:'},
        {price: "$0", region: 'land15:'},
        {price: "$0", region: 'land16:'},
        {price: "$0", region: 'land17:'},
        {price: "$0", region: 'land18:'},
        {price: "$0", region: 'land19:'},
        {price: "$0", region: 'land20:'},
        {price: "$0", region: 'land21:'},
        {price: "$0", region: 'land22:'},
        {price: "$0", region: 'land23:'},
        {price: "$0", region: 'land24:'},
        {price: "$0", region: 'land25:'},
        {price: "$0", region: 'land26:'},
        {price: "$0", region: 'land27:'},
        {price: "$0", region: 'land28:'},
        {price: "$0", region: 'land29:'},
        {price: "$0", region: 'land30:'},
        {price: "$0", region: 'land31:'},
        {price: "$0", region: 'land32:'},
        {price: "$0", region: 'land33:'},
        {price: "$0", region: 'land34:'},
        {price: "$0", region: 'land35:'},
        {price: "$0", region: 'land36:'},
        {price: "$0", region: 'land37:'},
        {price: "$0", region: 'land38:'},
        {price: "$0", region: 'land39:'},
        {price: "$0", region: 'land40:'},
        {price: "$0", region: 'land41:'},
        {price: "$0", region: 'land42:'},
        {price: "$0", region: 'land43:'},
        {price: "$0", region: 'land44:'},
        {price: "$0", region: 'land45:'},
      ]
    }
  },
  created () {
    let priceTabObj = this

    // waiting for user opne a file to read
    let intv = setInterval(function() {
      if (!global.path) {
        return;
      } else {
        clearInterval(intv)
        if (!priceTabObj.path) {
          priceTabObj.path = global.path[0];
        }

        fs.watchFile(priceTabObj.path, (curr, prev) => {
          let fileData = fs.readFileSync(priceTabObj.path, "utf8").split("\n");

          // make a 2D array of fileData 
          for (let i = 0; i < fileData.length - 1; i++) {
            fileData[i] = fileData[i].split(",");
            priceTabObj.lands[i].price = '$' + fileData[i][1]
          }
        })
      }
    }, 5000)
  }
}
</script>


<style scooped>
td {
  /* background: rgba(100, 100, 100, 0.5); */
  font-size: 17px;
  /* text-align: center; */
  padding: 2px;
  fill-opacity: 0.4;

}

#outerPriceTableDiv {
  display: flex;
  flex-flow: column;
  width: 300px;
}

#priceTableVueDiv {
  column-count:2;
  -webkit-column-count:2;
  
  width: 240px;
  height: 647px;
  padding-top: 200px;
  margin-left: -40px;

}

.tableRegion {
  text-align: right;
  padding-left: 2px;
  padding-right: 8px;
}

</style>

