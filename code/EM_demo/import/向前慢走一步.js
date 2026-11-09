Blockly.Blocks['1746753869003'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753869003",
      "message0": "向前慢走一步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753869003'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 85, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 113, 37, 156, 88, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 93, 54, 123, 111, 120, 165, 110, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 110, 88, 71, 45, 107, 90, 120, 165, 110, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 110, 95, 100, 90, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(7)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n";
  return code;
}

Blockly.Python['1746753869003'] = function(block) {
  let code = "base_action.action('向前慢走一步')\n";
  return code;
}

