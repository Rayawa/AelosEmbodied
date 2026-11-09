Blockly.Blocks['1746753881050'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753881050",
      "message0": "小幅度右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753881050'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 97, 120, 170, 115, 104, 98, 145, 70, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 115, 99, 88, 55, 118, 76, 120, 170, 115, 104, 98, 145, 70, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 100, 98, 65, 119, 85, 120, 170, 100, 100, 107, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(8)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753881050'] = function(block) {
  let code = "base_action.action('小幅度右转')\n";
  return code;
}

