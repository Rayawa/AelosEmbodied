Blockly.Blocks['1746753888552'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753888552",
      "message0": "小幅度左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753888552'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(80, 30, 85, 95, 109, 54, 130, 95, 120, 170, 85, 101, 112, 145, 82, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 85, 110, 109, 55, 136, 108, 120, 170, 85, 117, 113, 145, 86, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 85, 96, 102, 55, 130, 106, 120, 170, 85, 101, 112, 145, 82, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 106, 120, 170, 100, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753888552'] = function(block) {
  let code = "base_action.action('小幅度左转')\n";
  return code;
}

