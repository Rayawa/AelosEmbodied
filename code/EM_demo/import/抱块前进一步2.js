Blockly.Blocks['1746769707395'] = {
  init: function() {
    this.jsonInit({
      "type": "1746769707395",
      "message0": "抱块前进一步2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746769707395'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(6)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 145, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 125, 95, 110, 90, 145, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 113, 37, 156, 88, 145, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 10, 190, 107, 100, 56, 124, 111, 145, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 95, 54, 123, 113, 145, 189, 13, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 93, 54, 123, 111, 145, 189, 13, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 88, 71, 45, 107, 90, 145, 189, 13, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 110, 95, 100, 90, 145, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 91, 106, 76, 116, 88, 145, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746769707395'] = function(block) {
  let code = "base_action.action('抱块前进一步2')\n";
  return code;
}

