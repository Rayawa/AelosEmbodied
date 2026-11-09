Blockly.Blocks['1746753855410'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753855410",
      "message0": "翻墙1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753855410'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30,0,0,0)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90, 105, 190, 100, 128, 10, 170, 100, 110, 95, 10, 100, 72, 190, 30, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90, 10, 190, 100, 108, 10, 170, 100, 110, 190, 10, 100, 92, 190, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 118, 10, 170, 100, 110, 190, 10, 100, 82, 190, 30, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90, 10, 190, 100, 128, 10, 169, 100, 110, 190, 10, 100, 72, 190, 31, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 128, 10, 168, 100, 110, 190, 10, 100, 72, 190, 32, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 128, 10, 164, 100, 110, 190, 10, 100, 72, 190, 36, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 130, 10, 164, 100, 110, 190, 10, 100, 70, 190, 36, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 130, 10, 161, 100, 110, 190, 10, 100, 70, 190, 39, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 130, 10, 159, 100, 110, 190, 10, 100, 70, 190, 41, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 132, 10, 159, 100, 110, 190, 10, 100, 68, 190, 41, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 132, 10, 157, 100, 110, 190, 10, 100, 68, 190, 43, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(90, 10, 190, 100, 132, 10, 154, 100, 110, 190, 10, 100, 68, 190, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(87, 14, 190, 100, 132, 10, 154, 100, 113, 186, 10, 100, 68, 190, 46, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(50, 50, 190, 100, 132, 10, 154, 100, 150, 150, 10, 100, 68, 190, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 65, 190, 40, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50, 50, 165, 100, 10, 95, 108, 100, 150, 150, 35, 100, 165, 190, 40, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 5\nMOTOsetspeed(120)\nMOTOmove19(50, 50, 150, 100, 10, 95, 108, 100, 150, 150, 50, 100, 190, 190, 10, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 7\nMOTOsetspeed(120)\nMOTOmove19(30, 40, 190, 100, 10, 95, 108, 100, 170, 160, 10, 100, 190, 175, 10, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50, 50, 190, 100, 90, 95, 170, 100, 150, 150, 10, 100, 110, 105, 30, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89, 182, 110, 100, 10, 95, 93, 100, 111, 18, 90, 100, 190, 105, 107, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90, 160, 190, 100, 10, 95, 63, 100, 110, 40, 10, 100, 190, 105, 137, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70,0,0,0)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90, 50, 190, 100, 142, 145, 77, 100, 110, 150, 10, 100, 58, 55, 123, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753855410'] = function(block) {
  let code = "base_action.action('翻墙1')\n";
  return code;
}

Blockly.Blocks['1746753859889'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753859889",
      "message0": "俯卧撑2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753859889'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(90,90,90,40,40,40,40,40,90,90,90,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 41, 154, 100, 110, 140, 55, 100, 120, 159, 46, 100, 90, 60, 145, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 41, 157, 98, 156, 140, 44, 100, 120, 159, 43, 99, 43, 59, 156, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(100, 10, 185, 100, 160, 130, 35, 100, 100, 190, 15, 100, 40, 70, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(15, 80, 190, 99, 109, 50, 154, 100, 185, 120, 10, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(65,65,65,60,60,60,60,60,65,65,65,60,60,60,60,60,0,0,0)\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(15, 80, 190, 100, 120, 90, 45, 100, 185, 120, 10, 100, 80, 110, 155, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 75, 110, 185, 10, 137, 40, 55, 165, 125, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 67, 110, 185, 10, 137, 40, 55, 165, 133, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(60)\nMOTOmove19(80, 15, 160, 65, 158, 150, 55, 70, 120, 185, 40, 135, 42, 50, 145, 130, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(40)\nMOTOmove19(80, 14, 153, 79, 154, 150, 90, 75, 119, 185, 40, 122, 40, 50, 107, 120, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(85, 26, 139, 104, 154, 150, 92, 93, 119, 163, 54, 106, 40, 50, 106, 99, 0, 0, 99)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(20)\nMOTOmove19(84, 26, 109, 103, 127, 91, 116, 95, 119, 162, 84, 107, 67, 94, 92, 104, 0, 0, 103)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753859889'] = function(block) {
  let code = "base_action.action('俯卧撑2')\n";
  return code;
}

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

Blockly.Blocks['1746753871820'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753871820",
      "message0": "向前走半步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753871820'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 100, 90, 91, 48, 129, 88, 120, 165, 100, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 86, 125, 95, 110, 90, 120, 165, 90, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 90, 88, 103, 35, 158, 87, 120, 165, 90, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 113, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753871820'] = function(block) {
  let code = "base_action.action('向前走半步')\n";
  return code;
}

Blockly.Blocks['1746753875808'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753875808",
      "message0": "小幅度右侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753875808'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 90, 93, 54, 124, 100, 120, 145, 100, 110, 107, 146, 76, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 94, 93, 54, 124, 85, 120, 145, 100, 105, 107, 146, 76, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 85, 93, 54, 124, 85, 120, 175, 100, 94, 107, 146, 76, 90, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753875808'] = function(block) {
  let code = "base_action.action('小幅度右侧移')\n";
  return code;
}

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

Blockly.Blocks['1746753884415'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753884415",
      "message0": "小幅度左侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753884415'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,45,65,65,65,65,30,30,30,45,65,65,65,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 90, 93, 54, 124, 90, 120, 175, 100, 110, 107, 146, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80, 55, 100, 95, 93, 54, 124, 105, 120, 175, 100, 106, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85,0,0,0)\nMOTOsetspeed(20)\nMOTOmove19(80, 25, 100, 106, 93, 54, 124, 110, 120, 145, 100, 115, 107, 146, 76, 115, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,55,55,55,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753884415'] = function(block) {
  let code = "base_action.action('小幅度左侧移')\n";
  return code;
}

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

Blockly.Blocks['1746753930752'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753930752",
      "message0": "抱起方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753930752'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 149, 100, 93, 55, 124, 100, 120, 170, 50, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 149, 100, 113, 90, 109, 100, 120, 170, 50, 100, 87, 111, 91, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 149, 100, 136, 150, 62, 100, 120, 170, 50, 100, 72, 50, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 149, 100, 149, 150, 55, 100, 120, 170, 50, 100, 52, 50, 145, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65, 10, 149, 100, 149, 150, 55, 100, 140, 190, 50, 100, 52, 50, 145, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65, 10, 149, 100, 104, 132, 70, 100, 140, 190, 50, 100, 93, 69, 130, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65, 10, 149, 100, 95, 55, 125, 100, 140, 190, 50, 100, 105, 145, 75, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(30)\nMOTOmove19(65, 10, 190, 100, 90, 55, 127, 100, 140, 189, 14, 100, 110, 145, 73, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753930752'] = function(block) {
  let code = "base_action.action('抱起方块')\n";
  return code;
}

Blockly.Blocks['1746753935546'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753935546",
      "message0": "放下方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753935546'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(15)\nMOTOmove19(60, 10, 190, 100, 93, 55, 130, 98, 145, 190, 13, 100, 107, 145, 70, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(60, 10, 190, 99, 90, 150, 38, 100, 145, 187, 10, 101, 111, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(59, 10, 148, 99, 122, 150, 39, 100, 145, 188, 56, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 10, 147, 99, 122, 150, 39, 100, 130, 176, 57, 101, 79, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(72, 10, 147, 99, 98, 150, 40, 100, 130, 176, 57, 100, 105, 50, 163, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753935546'] = function(block) {
  let code = "base_action.action('放下方块')\n";
  return code;
}

Blockly.Blocks['1746753941863'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753941863",
      "message0": "大幅度抱箱子右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753941863'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,20,20,20,75,65,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 95, 132, 187, 10, 105, 137, 145, 106, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 123, 55, 154, 93, 132, 187, 10, 105, 137, 145, 106, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n";
  return code;
}

Blockly.Python['1746753941863'] = function(block) {
  let code = "base_action.action('大幅度抱箱子右转')\n";
  return code;
}

Blockly.Blocks['1746753945332'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753945332",
      "message0": "大幅度抱箱子左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753945332'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(20,20,20,75,65,65,65,65,30,20,20,65,75,65,65,65,0,0,0)\nMOTOsetspeed(24)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 95, 132, 187, 10, 105, 77, 145, 46, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 95, 63, 55, 94, 93, 132, 187, 10, 105, 77, 145, 46, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 124, 100, 132, 187, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753945332'] = function(block) {
  let code = "base_action.action('大幅度抱箱子左转')\n";
  return code;
}

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

Blockly.Blocks['1746753977107'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753977107",
      "message0": "抱块向前慢走半步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753977107'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 145, 189, 13, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 125, 95, 110, 90, 145, 189, 13, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 86, 113, 37, 156, 88, 145, 189, 13, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 107, 100, 56, 124, 111, 145, 189, 13, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 106, 95, 54, 123, 113, 145, 189, 13, 107, 97, 133, 83, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 145, 189, 13, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753977107'] = function(block) {
  let code = "base_action.action('抱块向前慢走半步')\n";
  return code;
}

Blockly.Blocks['1746753981001'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753981001",
      "message0": "抱块小右侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753981001'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,100,100,100,85,20,20,20,85,85,95,85,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 105, 93, 54, 130, 105, 132, 187, 10, 110, 102, 136, 72, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 94, 93, 54, 130, 100, 132, 187, 10, 106, 107, 146, 70, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 91, 93, 54, 130, 88, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 97, 95, 61, 130, 91, 132, 187, 10, 102, 107, 146, 70, 98, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 130, 100, 132, 187, 10, 100, 107, 145, 70, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753981001'] = function(block) {
  let code = "base_action.action('抱块小右侧移')\n";
  return code;
}

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

Blockly.Blocks['1746753990478'] = {
  init: function() {
    this.jsonInit({
      "type": "1746753990478",
      "message0": "抱块小左侧移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746753990478'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(100,100,100,65,100,100,100,65,100,100,100,65,100,100,100,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,100,100,100,85,0,0,0)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 90, 98, 64, 128, 90, 132, 187, 10, 95, 107, 146, 72, 95, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 15, 190, 95, 93, 54, 128, 90, 132, 187, 10, 105, 107, 146, 72, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(12)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 109, 107, 146, 72, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 94, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 98, 93, 54, 128, 102, 132, 187, 10, 103, 105, 139, 77, 109, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(10)\nMOTOmove19(60, 15, 190, 100, 93, 55, 128, 100, 132, 187, 10, 100, 107, 145, 72, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746753990478'] = function(block) {
  let code = "base_action.action('抱块小左侧移')\n";
  return code;
}

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

