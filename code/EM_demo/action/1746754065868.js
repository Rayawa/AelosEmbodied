Blockly.Blocks['1746754065868'] = {
  init: function() {
    this.jsonInit({
      "type": "1746754065868",
      "message0": "抱块左侧移_小幅度",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746754065868'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 93, 54, 123, 90, 145, 189, 13, 89, 105, 144, 75, 91, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 93, 54, 124, 90, 145, 189, 13, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 95, 93, 54, 124, 105, 145, 189, 13, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 93, 54, 124, 110, 145, 189, 13, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 93, 54, 124, 110, 145, 189, 13, 106, 107, 144, 74, 114, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746754065868'] = function(block) {
  let code = "base_action.action('抱块左侧移_小幅度')\n";
  return code;
}

