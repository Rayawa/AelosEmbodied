Blockly.Blocks['1746753972943'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753972943",
      "message0": "抱块后退半步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753972943'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(45)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(100,100,100,85,50,50,50,85,100,100,100,85,50,50,50,85,0,0,0)\nMOTOrigid16(100,100,100,85,60,60,60,75,100,100,100,85,60,60,60,75,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 130, 108, 132, 187, 10, 111, 102, 136, 70, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 55, 134, 107, 132, 187, 10, 108, 125, 145, 94, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 92, 106, 55, 144, 85, 132, 187, 10, 95, 117, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 92, 84, 55, 120, 91, 132, 187, 10, 95, 117, 145, 76, 93, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(8)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 98, 132, 187, 10, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753972943'] = function(block) {
  let code = "base_action.action('抱块后退半步')\n";
  return code;
}

