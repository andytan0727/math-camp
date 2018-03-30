<template>
  <button type="button" @click="openFile">
    <svg height="30px" style="enable-background:new 0 0 512 512;" viewBox="0 -49 512 512">
      <path d="M96,370.9c0,15.5,12.7,29.1,28.2,29.1h266.3c15.5,0,25.5-13.6,25.5-29.1V208H96V370.9z"/>
      <path d="M416,168.8c0-15.5-10-24.8-25.5-24.8c0,0-154.7,0-167,0c-4.7,0-10.7-9.9-18.5-19c-7.1-8.3-14.7-13-20.5-13   c-7.5,0-60.3,0-60.3,0c-15.5,0-28.2,8.9-28.2,24.3V192h320V168.8z"/>
    </svg>
  </button>
</template>

<script>
import { watchFileChanges } from '../../scripts/colors'
const { dialog } = require('electron').remote

global.path;   // global variable path for dat file

export default {
  methods: {
    openFile: function() {
      if (!window.path) {
        global.path = dialog.showOpenDialog()
      }
      watchFileChanges()
    }
  },
}
</script>


<style scooped>
button {
  width: 60px;
  height: auto;
  background: rgba(255, 255, 255, 0.3);
  -webkit-app-region: no-drag;
}

svg path {
  fill: yellow;
} </style>
