Blockly.Blocks['1746753994804'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753994804",
      "message0": "抱块小左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753994804'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 103, 109, 54, 139, 100, 132, 187, 10, 108, 112, 144, 82, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 110, 109, 55, 136, 108, 132, 187, 10, 117, 113, 145, 86, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 15, 190, 96, 102, 55, 130, 106, 132, 187, 10, 101, 112, 145, 82, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 106, 132, 187, 10, 100, 102, 135, 81, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(5)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753994804'] = function(block) {
  let code = "base_action.action('抱块小左转')\n";
  return code;
}

