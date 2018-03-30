<template>
  <div id="outerDiv">
    <div id="map">
      <open-file-button></open-file-button>
      <svg xmlns="http://www.w3.org/2000/svg"
             viewBox="50 40 1422 1024">
        <g>
          <block-one></block-one>
          <block-two></block-two>
          <block-three></block-three>
          <block-four></block-four>
          <block-five></block-five>
          <block-six></block-six>
          <block-seven></block-seven>
          <block-eight></block-eight>
          <block-nine></block-nine>
          <block-ten></block-ten>
          <block-eleven></block-eleven>
          <block-twelve></block-twelve>
          <block-thirteen></block-thirteen>
          <block-fourteen></block-fourteen>
          <block-fifteen></block-fifteen>
          <block-sixteen></block-sixteen>
          <block-seventeen></block-seventeen>
          <block-eighteen></block-eighteen>
          <block-nineteen></block-nineteen>
          <block-twenty></block-twenty>
          <block-twenty-one></block-twenty-one>
          <block-twenty-two></block-twenty-two>
          <block-twenty-three></block-twenty-three>
          <block-twenty-four></block-twenty-four>
          <block-twenty-five></block-twenty-five>
          <block-twenty-six></block-twenty-six>
          <block-twenty-seven></block-twenty-seven>
          <block-twenty-eight></block-twenty-eight>
          <block-twenty-nine></block-twenty-nine>
          <block-thirty></block-thirty>
          <block-thirty-one></block-thirty-one>
          <block-thirty-two></block-thirty-two>
          <block-thirty-three></block-thirty-three>
          <block-thirty-four></block-thirty-four>
          <block-thirty-five></block-thirty-five>
          <block-thirty-six></block-thirty-six>
          <block-thirty-seven></block-thirty-seven>
          <block-thirty-eight></block-thirty-eight>
          <block-thirty-nine></block-thirty-nine>
          <block-forty></block-forty>
          <block-forty-one></block-forty-one>
          <block-forty-two></block-forty-two>
          <block-forty-three></block-forty-three>
          <block-forty-four></block-forty-four>
          <block-forty-five></block-forty-five>
        </g>
      </svg>
    </div>
    <price-table></price-table>
  </div>
</template>

<script>
import PriceTable from './MapComponents/PriceTable'
import OpenFileButton from './MapComponents/OpenFileButton'
import BlockOne from './region/BlockOne'
import BlockTwo from './region/BlockTwo'
import BlockThree from './region/BlockThree'
import BlockFour from './region/BlockFour'
import BlockFive from './region/BlockFive'
import BlockSix from './region/BlockSix'
import BlockSeven from './region/BlockSeven'
import BlockEight from './region/BlockEight'
import BlockNine from "./region/BlockNine";
import BlockTen from "./region/BlockTen";
import BlockEleven from "./region/BlockEleven";
import BlockTwelve from "./region/BlockTwelve";
import BlockThirteen from "./region/BlockThirteen";
import BlockFourteen from "./region/BlockFourteen";
import BlockFifteen  from "./region/BlockFifteen";
import BlockSixteen from "./region/BlockSixteen";
import BlockSeventeen from './region/BlockSeventeen';
import BlockEighteen from './region/BlockEighteen';
import BlockNineteen from './region/BlockNineteen';
import BlockTwenty from './region/BlockTwenty';
import BlockTwentyOne from './region/BlockTwentyOne';
import BlockTwentyTwo from './region/BlockTwentyTwo';
import BlockTwentyThree from './region/BlockTwentyThree';
import BlockTwentyFour from "./region/BlockTwentyFour";
import BlockTwentyFive from "./region/BlockTwentyFive";
import BlockTwentySix from "./region/BlockTwentySix";
import BlockTwentySeven from "./region/BlockTwentySeven";
import BlockTwentyEight from "./region/BlockTwentyEight";
import BlockTwentyNine from "./region/BlockTwentyNine";
import BlockThirty from "./region/BlockThirty";
import BlockThirtyOne from "./region/BlockThirtyOne";
import BlockThirtyTwo from "./region/BlockThirtyTwo";
import BlockThirtyThree from "./region/BlockThirtyThree";
import BlockThirtyFour from "./region/BlockThirtyFour";
import BlockThirtyFive from "./region/BlockThirtyFive";
import BlockThirtySix from "./region/BlockThirtySix";
import BlockThirtySeven from "./region/BlockThirtySeven";
import BlockThirtyEight from "./region/BlockThirtyEight";
import BlockThirtyNine from "./region/BlockThirtyNine";
import BlockForty from "./region/BlockForty";
import BlockFortyOne from "./region/BlockFortyOne";
import BlockFortyTwo from "./region/BlockFortyTwo";
import BlockFortyThree from "./region/BlockFortyThree";
import BlockFortyFour from "./region/BlockFortyFour";
import BlockFortyFive from "./region/BlockFortyFive";
import '../scripts/colors'

export default {
  components: {
    PriceTable,
    OpenFileButton,
    BlockOne,
    BlockTwo,
    BlockThree,
    BlockFour,
    BlockFive,
    BlockSix,
    BlockSeven,
    BlockEight,
    BlockNine,
    BlockTen,
    BlockEleven,
    BlockTwelve,
    BlockThirteen,
    BlockFourteen,
    BlockFifteen,
    BlockSixteen,
    BlockSeventeen,
    BlockEighteen,
    BlockNineteen,
    BlockTwenty,
    BlockTwentyOne,
    BlockTwentyTwo,
    BlockTwentyThree,
    BlockTwentyFour,
    BlockTwentyFive,
    BlockTwentySix,
    BlockTwentySeven,
    BlockTwentyEight,
    BlockTwentyNine,
    BlockThirty,
    BlockThirtyOne,
    BlockThirtyTwo,
    BlockThirtyThree,
    BlockThirtyFour,
    BlockThirtyFive,
    BlockThirtySix,
    BlockThirtySeven,
    BlockThirtyEight,
    BlockThirtyNine,
    BlockForty,
    BlockFortyOne,
    BlockFortyTwo,
    BlockFortyThree,
    BlockFortyFour,
    BlockFortyFive
  }
}
</script>

<style scooped>
#outerDiv {
  display: flex; 
  flex-direction: row;
  flex-flow: wrap;
}

#map {
  display: flex;
  flex-direction: column;
 /*  height: 691px;  */
  width: 72%;
}

#tableDiv {

}

.block {
    fill: none;
    stroke:#000000;
    stroke-width:5;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-opacity:1;
    fill-opacity: 0.5;
    stroke-miterlimit:4;
    stroke-dasharray:none;
    paint-order:stroke fill markers;
}
</style>
