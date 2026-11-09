Blockly.Blocks['1746753985253'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753985253",
      "message0": "抱块小右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753985253'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 97, 132, 187, 10, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(13)\nMOTOmove19(60, 15, 190, 99, 88, 55, 118, 76, 132, 187, 10, 104, 98, 145, 70, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 98, 65, 119, 85, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 98, 92, 52, 124, 93, 132, 187, 10, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753985253'] = function(block) {
  let code = "base_action.action('抱块小右转')\n";
  return code;
}

