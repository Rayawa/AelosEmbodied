Blockly.Blocks['remote_control'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control',
      message0: '%{BKY_GAMEPAD} %1 %{BKY_GAMEPAD_VAR} %2',
      args0: [
        {
          type: 'input_dummy',
        },
        {
          type: 'input_value',
          name: 'variable',
          check: 'Variable',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control'] = function(block) {
  const variable = Blockly.Lua.valueToCode(block, "variable", Blockly.Lua.ORDER_NONE);
  let code = "";
  if(variable) {
    code = `${variable} = HKEY()\n`;
  } else {
    code = `HKEY()\n`;
  }
  return code;
}

Blockly.Python['remote_control'] = function (block) {
  const variable = Blockly.Python.valueToCode(block, 'variable', Blockly.Python.ORDER_NONE);
  const code = variable ? `${variable} = get_key.key()\n` : `get_key.key()\n`;
  return code;
}

Blockly.Blocks['aelos_compare'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_compare',
      message0: '%1 %2 %3',
      args0: [
        {
          type: 'input_value',
          name: 'input_1',
          check: ['Number', 'Variable', 'Remote_type'],
        },
        {
          type: 'field_dropdown',
          name: 'OP',
          options: [
            ['=', 'JNE'],
            ['\u2260', 'JE'],
            ['<', 'JAE'],
            ['\u200f\u2265\u200f', 'JA'],
            ['>', 'JBE'],
            ['\u200f\u2264\u200f', 'JB'],
          ],
        },
        {
          type: 'input_value',
          name: 'input_2',
          check: ['Number', 'Variable', 'Remote_type'],
        },
      ],
      inputsInline: true,
      output: 'Boolean',
      outputShape: Blockly.OUTPUT_SHAPE_HEXAGONAL,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '~=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Lua.valueToCode(block, 'input_1', Blockly.Lua.ORDER_ATOMIC);
  const input_2 = Blockly.Lua.valueToCode(block, 'input_2', Blockly.Lua.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'false';
  }

  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['aelos_compare'] = function (block) {
  const op_map = {
    JNE: '==',
    JE: '!=',
    JAE: '<',
    JA: '<=',
    JBE: '>',
    JB: '>=',
  };
  const input_1 = Blockly.Python.valueToCode(block, 'input_1', Blockly.Python.ORDER_ATOMIC);
  const input_2 = Blockly.Python.valueToCode(block, 'input_2', Blockly.Python.ORDER_ATOMIC);
  const operation = op_map[block.getFieldValue('OP')];
  let code = '';

  if (input_1 && input_2) {
    code = `${input_1} ${operation} ${input_2}`;
  } else {
    code = 'False';
  }

  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['remote_control_button'] = {
  init: function () {
    this.jsonInit({
      type: 'remote_control_button',
      message0: '%{BKY_REMOTE_CONTROL_BUTTON_REMOTE}， %1 ，%{BKY_REMOTE_CONTROL_BUTTON_KEY} %2',
      args0: [
        { type: 'field_dropdown', name: 'mode', options: remoteControlMode() },
        { type: 'field_dropdown', name: 'key', options: remoteControlKey },
      ],
      output: 'Remote_type',
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['remote_control_button'] = function(block) {
  const mode = block.getFieldValue("mode");
  const key = block.getFieldValue("key");
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Lua.ORDER_UNARY : Blockly.Lua.ORDER_ATOMIC];
}

Blockly.Python['remote_control_button'] = function (block) {
  const mode = block.getFieldValue('mode');
  const key = block.getFieldValue('key');
  const num = HKEYMap[mode][key];
  return [num, 0 > num ? Blockly.Python.ORDER_UNARY_SIGN : Blockly.Python.ORDER_ATOMIC];
}

Blockly.Blocks['aelos_if'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_if'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const do_code = Blockly.Lua.statementToCode(block, 'do');

  const code = `if ${condition} then \n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['aelos_while'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_while',
      message0: '%{BKY_AELOS_WHILE} %1 %{BKY_AELOS_DO} %2',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'do',
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['aelos_while'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const do_code = Blockly.Lua.statementToCode(block, 'do') || '  pass\n';

  const code = `while (${condition})\ndo\n${do_code}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_while'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `while ${condition}:\n${do_code}`;
  return code;
}

Blockly.Blocks['delayed'] = {
  init: function () {
    this.jsonInit({
      type: 'delayed',
      message0: '%{BKY_DELAY} %1 %{BKY_SECOND_DELAY_TIME}',
      args0: [
        {
          type: 'field_number',
          name: 'time',
          value: 0,
          min: 0,
          max: 5000,
          precision: 0.1,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['delayed'] = function(block) {
  let time = parseInt(block.getFieldValue("time"), 0);
  const MAX_TIME = 5000;
  const ms = 1000;
  time = time * ms;
  if (time > MAX_TIME) {
    time = MAX_TIME;
  }
  let code = `DelayMs(${time})\n`;
  return code;
}

Blockly.Python['delayed'] = function (block) {
  const time = block.getFieldValue('time') || 0;
  Blockly.Python.definitions_['import_time'] = 'import time';
  const code = `time.sleep(${time})\n`;
  return code;
}

Blockly.Blocks['Back_Bow'] = {
  init: function () {
    this.jsonInit({
      type: 'Back_Bow',
      message0: '%{BKY_BACK_BOW}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Back_Bow'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 35, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(28, 21, 175, 100, 93, 55, 124, 100, 180, 155, 155, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(28, 21, 175, 100, 145, 55, 145, 100, 180, 155, 155, 100, 55, 145, 55, 100)',
    'MOTOwait()',
    'DelayMs(1600)',
    'MOTOsetspeed(21)',
    'MOTOmove16(28, 21, 175, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(28)',
    'MOTOmove16(80, 40, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Back_Bow'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['BACK_BOW'] + "')\n";
  return code;
}

Blockly.Blocks['music'] = {
  init: function () {
    this.jsonInit({
      type: 'music',
      message0: '%{BKY_AELOS_MUSIC} %1',
      args0: [
        {
          type: 'field_input',
          name: 'music_name',
          text: '%{BKY_DEFAULT_MUSIC_INPUT}',
          spellcheck: false,
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['music'] = function(block) {
  const music_name = block.getFieldValue("music_name");
  let code = `Play_AI_music('')\n`;
    
  if (music_name) {
    code = `Play_AI_music('0:/music/${music_name}.mp3')\n`;
  }

  return code;
}

Blockly.Python['music'] = function (block) {
  const music_name = block.getFieldValue('music_name');
  let code = `music.music_play(None)\n`;

  if (music_name && music_name !== Blockly.Msg['DEFAULT_MUSIC_INPUT']) {
    code = `music.music_play('${music_name}')\n`;
  }

  return code;
}

Blockly.Blocks['1742586464334'] = {
  init: function() {
    this.jsonInit({
      "type": "1742586464334",
      "message0": "俯卧撑_EM_20250316",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1742586464334'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(90,90,90,40,40,40,40,40,90,90,90,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 41, 154, 100, 110, 140, 55, 100, 120, 159, 46, 100, 90, 60, 145, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 41, 157, 98, 156, 140, 44, 100, 120, 159, 43, 99, 43, 59, 156, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(12)\nMOTOmove19(100, 10, 185, 100, 160, 130, 35, 100, 100, 190, 15, 100, 40, 70, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(15, 80, 190, 99, 109, 50, 154, 100, 185, 120, 10, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(65,65,65,60,60,60,60,60,65,65,65,60,60,60,60,60,0,0,0)\n\n\n-- 01\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 0\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 02\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 0\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 03\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 0\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 06\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 0\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 07\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 0\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 08\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 0\nMOTOsetspeed(50)\nMOTOmove19(10, 85, 177, 99, 109, 50, 154, 100, 183, 116, 27, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 09\nMOTOsetspeed(50)\nMOTOmove19(69, 32, 168, 99, 109, 50, 154, 100, 132, 168, 35, 101, 91, 151, 46, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(15, 80, 190, 100, 120, 90, 45, 100, 185, 120, 10, 100, 80, 110, 155, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(53)\nMOTOmove19(15, 80, 190, 100, 120, 90, 47, 100, 185, 120, 10, 100, 80, 110, 154, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 159, 144, 53, 75, 110, 185, 10, 137, 45, 55, 142, 125, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(70)\nMOTOmove19(90, 15, 190, 63, 160, 145, 35, 67, 110, 185, 10, 137, 40, 55, 165, 133, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(55)\nMOTOmove19(80, 15, 160, 65, 158, 150, 55, 70, 120, 185, 40, 135, 42, 50, 145, 130, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(88, 61, 139, 74, 160, 145, 62, 74, 109, 140, 64, 126, 40, 55, 138, 126, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 50, 130, 100, 121, 150, 55, 100, 115, 150, 70, 100, 82, 52, 150, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1742586464334'] = function(block) {
  let code = "base_action.action('俯卧撑_EM_20250316')\n";
  return code;
}

Blockly.Blocks['Spread_wings'] = {
  init: function () {
    this.jsonInit({
      type: 'Spread_wings',
      message0: '%{BKY_SPREAD_WINGS}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Spread_wings'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,70)',
    'MOTOsetspeed(30)',
    'MOTOmove16(78, 105, 99, 99, 92, 56, 124, 99, 121, 90, 100, 101, 106, 142, 75, 99)',
    'MOTOwait()',
    'MOTOsetspeed(10)',
    'MOTOmove16(100, 100, 100, 89, 92, 58, 122, 82, 100, 100, 100, 93, 102, 133, 86, 91)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 90, 98, 69, 114, 86, 100, 100, 100, 93, 102, 133, 86, 88)',
    'MOTOwait()',
    'MOTOsetspeed(20)',
    'MOTOmove16(100, 100, 100, 85, 115, 95, 102, 90, 100, 100, 100, 88, 98, 145, 74, 87)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 79, 90, 100, 100, 70, 93, 71, 128, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 62, 165, 53, 87)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(140, 150, 170, 85, 54, 55, 102, 90, 60, 50, 30, 93, 50, 170, 48, 88)',
    'MOTOwait()',
    'MOTOsetspeed(50)',
    'MOTOmove16(70, 50, 170, 85, 54, 55, 102, 90, 130, 150, 30, 93, 55, 170, 48, 86)',
    'MOTOwait()',
    'DelayMs(300)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 85, 54, 55, 102, 90, 100, 100, 30, 93, 50, 170, 48, 86)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,60,60,60,60,70)',
    'MOTOsetspeed(32)',
    'MOTOmove16(100, 100, 170, 89, 61, 94, 101, 88, 100, 100, 30, 93, 77, 165, 57, 89)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 130, 85, 105, 145, 53, 90, 100, 100, 70, 93, 85, 131, 83, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(100, 100, 100, 85, 111, 86, 96, 85, 100, 100, 100, 93, 103, 142, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(30)',
    'MOTOmove16(100, 100, 100, 89, 92, 50, 121, 85, 100, 100, 100, 93, 102, 139, 83, 92)',
    'MOTOwait()',
    'MOTOrigid16(40,40,40,60,60,60,60,40,40,40,40,60,60,60,60,60)',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 35, 100, 100, 93, 55, 124, 100, 120, 165, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Spread_wings'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SPREAD_WINGS'] + "')\n";
  return code;
}

Blockly.Blocks['Left_foot_shot'] = {
  init: function () {
    this.jsonInit({
      type: 'Left_foot_shot',
      message0: '%{BKY_LEFT_FOOT_SHOT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#7148F5',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Left_foot_shot'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 40, 100, 86, 91, 48, 129, 85, 120, 160, 100, 92, 107, 145, 77, 86)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(80, 40, 100, 86, 142, 112, 104, 83, 120, 160, 100, 95, 87, 145, 70, 85)',
    'MOTOwait()',
    'MOTOsetspeed(34)',
    'MOTOmove16(65, 35, 165, 77, 61, 116, 78, 96, 110, 163, 162, 93, 87, 132, 85, 85)',
    'MOTOwait()',
    'MOTOsetspeed(90)',
    'MOTOmove16(81, 45, 101, 77, 102, 95, 81, 88, 121, 161, 100, 95, 87, 140, 76, 85)',
    'MOTOwait()',
    'MOTOsetspeed(110)',
    'MOTOmove16(80, 40, 50, 77, 150, 47, 171, 96, 129, 177, 34, 95, 101, 139, 75, 85)',
    'MOTOwait()',
    'DelayMs(400)',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 130, 78, 131, 83, 120, 160, 100, 95, 108, 144, 78, 87)',
    'MOTOwait()',
    'MOTOsetspeed(25)',
    'MOTOmove16(80, 40, 100, 77, 110, 81, 114, 80, 120, 160, 100, 95, 105, 145, 77, 87)',
    'MOTOwait()',
    'MOTOsetspeed(15)',
    'MOTOmove16(80, 40, 100, 87, 94, 76, 109, 82, 120, 160, 100, 93, 107, 145, 77, 90)',
    'MOTOwait()',
    'MOTOsetspeed(8)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Left_foot_shot'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['LEFT_FOOT_SHOT'] + "')\n";
  return code;
}

Blockly.Blocks['1742586515751'] = {
  init: function() {
    this.jsonInit({
      "type": "1742586515751",
      "message0": "少年_EM_20250317",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1742586515751'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\n\n\n-- 刘叶\nMOTOsetspeed(30)\nMOTOmove19(81, 29, 101, 98, 94, 56, 125, 102, 122, 170, 101, 100, 108, 145, 77, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 飞翔\nMOTOsetspeed(5)\nMOTOmove19(75, 26, 114, 98, 102, 119, 75, 103, 121, 179, 85, 100, 100, 84, 126, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(1300)\n\n\n-- 飞翔1\nMOTOsetspeed(5)\nMOTOmove19(77, 36, 101, 100, 103, 120, 70, 100, 120, 169, 100, 99, 99, 81, 129, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1300)\n\n\n-- 1\nMOTOsetspeed(5)\nMOTOmove19(79, 62, 102, 100, 97, 56, 124, 100, 123, 138, 106, 99, 105, 144, 77, 99, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 2\nMOTOsetspeed(5)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\nMOTOsetspeed(5)\nMOTOmove19(83, 89, 98, 93, 95, 58, 122, 91, 113, 114, 102, 93, 107, 143, 78, 93, 0, 0, 100)\nMOTOwait()\nDelayMs(600)\nMOTOsetspeed(5)\nMOTOmove19(83, 87, 98, 110, 94, 58, 124, 107, 113, 114, 102, 109, 107, 141, 77, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(1400)\nMOTOsetspeed(5)\nMOTOmove19(84, 91, 98, 96, 95, 58, 123, 94, 113, 107, 102, 95, 105, 140, 78, 95, 0, 0, 100)\nMOTOwait()\nDelayMs(1400)\n\n\n-- 从前那个少年\nMOTOsetspeed(30)\nMOTOmove19(81, 90, 103, 100, 93, 55, 124, 100, 190, 167, 16, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(50, 21, 159, 102, 91, 56, 124, 101, 183, 167, 14, 100, 113, 144, 78, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(168, 66, 120, 95, 88, 54, 123, 91, 28, 131, 80, 107, 108, 142, 78, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(172, 104, 12, 95, 89, 54, 124, 92, 67, 84, 190, 107, 108, 142, 78, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(45)\nMOTOmove19(64, 88, 40, 80, 131, 123, 84, 96, 125, 121, 186, 95, 82, 100, 103, 111, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(10, 71, 175, 83, 127, 121, 92, 96, 190, 135, 18, 95, 87, 100, 98, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(61, 62, 172, 83, 127, 121, 92, 96, 128, 139, 20, 95, 87, 100, 98, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(78, 41, 185, 78, 129, 98, 115, 82, 109, 176, 10, 104, 76, 108, 78, 112, 0, 0, 100)\nMOTOwait()\n\n\n-- 没有一丝丝改变\nMOTOsetspeed(45)\nMOTOmove19(77, 97, 27, 78, 129, 98, 115, 82, 169, 185, 14, 104, 76, 108, 78, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(94, 68, 104, 67, 135, 103, 109, 85, 137, 190, 54, 94, 72, 118, 76, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 40, 152, 85, 111, 88, 112, 87, 136, 160, 52, 104, 95, 113, 91, 107, 0, 0, 100)\nMOTOwait()\n\n\n-- 时间只不过是考验\nMOTOsetspeed(33)\nMOTOmove19(67, 53, 128, 93, 125, 103, 99, 94, 133, 145, 63, 111, 80, 96, 104, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(33)\nMOTOmove19(67, 39, 106, 99, 100, 56, 125, 97, 104, 31, 105, 111, 107, 145, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(95, 85, 97, 99, 94, 56, 125, 97, 104, 110, 101, 111, 108, 145, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(18, 42, 171, 99, 94, 56, 125, 97, 190, 156, 28, 111, 108, 145, 77, 109, 0, 0, 100)\nMOTOwait()\n\n\n-- 有\nMOTOsetspeed(30)\nMOTOmove19(10, 42, 171, 111, 86, 68, 117, 93, 190, 156, 28, 130, 115, 120, 99, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(10, 42, 171, 72, 119, 101, 104, 90, 190, 156, 28, 88, 106, 138, 75, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(53, 36, 184, 75, 118, 99, 102, 90, 180, 124, 10, 93, 101, 139, 77, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(28, 32, 185, 71, 109, 94, 101, 90, 148, 175, 59, 88, 108, 145, 76, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(70, 49, 151, 97, 85, 43, 131, 84, 129, 159, 61, 116, 93, 111, 95, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(45)\nMOTOmove19(11, 72, 176, 97, 84, 37, 134, 84, 106, 108, 190, 116, 84, 105, 94, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(76, 50, 67, 101, 105, 72, 123, 97, 175, 145, 17, 116, 101, 140, 74, 115, 0, 0, 100)\nMOTOwait()\n\n\n-- 挺\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 83, 123, 80, 123, 83, 185, 159, 17, 109, 82, 114, 90, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(78, 47, 67, 87, 73, 87, 92, 87, 182, 158, 33, 110, 124, 112, 105, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 83, 123, 80, 123, 83, 185, 159, 17, 109, 82, 114, 90, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(78, 47, 67, 87, 73, 87, 92, 87, 182, 158, 33, 110, 124, 112, 105, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 83, 123, 80, 123, 83, 185, 159, 17, 109, 82, 114, 90, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(78, 47, 67, 87, 73, 87, 92, 87, 182, 158, 33, 110, 124, 112, 105, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 95, 100, 51, 128, 93, 185, 159, 17, 110, 99, 148, 67, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(75, 47, 174, 105, 88, 65, 117, 100, 40, 48, 138, 121, 121, 154, 73, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(75, 47, 174, 91, 132, 93, 117, 92, 40, 48, 138, 114, 85, 123, 84, 117, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(76, 31, 128, 97, 112, 55, 137, 95, 115, 168, 60, 114, 89, 151, 58, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(32, 64, 106, 97, 112, 55, 137, 95, 79, 42, 130, 114, 89, 151, 58, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(32, 64, 106, 92, 135, 98, 117, 91, 135, 189, 49, 115, 84, 115, 87, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(71, 29, 152, 90, 101, 48, 138, 88, 59, 32, 140, 108, 97, 139, 70, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(29, 41, 140, 97, 118, 79, 119, 97, 59, 31, 141, 117, 99, 147, 70, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(71, 29, 152, 107, 88, 65, 113, 95, 59, 19, 140, 129, 114, 145, 80, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 156, 107, 88, 65, 113, 95, 59, 32, 190, 129, 114, 145, 80, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(101, 116, 109, 95, 93, 65, 118, 91, 42, 51, 90, 115, 119, 150, 78, 114, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 方年隆呜\nMOTOsetspeed(30)\nMOTOmove19(79, 30, 101, 100, 94, 56, 123, 101, 120, 170, 101, 101, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10, 78, 104, 92, 94, 56, 123, 92, 120, 172, 51, 106, 107, 144, 77, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(10, 84, 105, 92, 94, 56, 123, 92, 121, 172, 21, 106, 107, 144, 77, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(15)\nMOTOmove19(51, 86, 110, 92, 94, 56, 123, 92, 181, 171, 20, 106, 107, 144, 77, 105, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(38, 100, 92, 65, 86, 65, 117, 65, 181, 171, 20, 90, 101, 82, 123, 92, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(10, 58, 181, 61, 88, 64, 116, 66, 181, 171, 20, 92, 99, 93, 117, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(81, 109, 190, 61, 88, 64, 116, 66, 181, 171, 20, 92, 99, 93, 117, 90, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(10, 49, 179, 85, 102, 77, 117, 84, 181, 171, 20, 108, 106, 121, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 88, 178, 96, 99, 68, 119, 94, 116, 117, 22, 101, 106, 133, 82, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 101, 88, 87, 57, 117, 88, 171, 168, 35, 99, 110, 134, 88, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 101, 80, 86, 56, 123, 81, 150, 177, 35, 100, 108, 119, 100, 97, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(29, 31, 165, 100, 92, 81, 100, 103, 118, 148, 99, 120, 114, 144, 77, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(50, 23, 165, 100, 92, 81, 100, 103, 118, 148, 99, 120, 114, 144, 77, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 101, 80, 86, 56, 123, 81, 171, 167, 35, 100, 108, 119, 100, 97, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 101, 80, 86, 56, 123, 81, 150, 177, 35, 100, 108, 119, 100, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(29, 34, 165, 100, 92, 81, 100, 103, 118, 148, 99, 120, 114, 144, 77, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(50, 23, 165, 100, 92, 81, 100, 103, 118, 148, 99, 120, 114, 144, 77, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(49, 45, 190, 81, 118, 102, 102, 91, 139, 173, 10, 100, 95, 118, 89, 113, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(40)\nMOTOmove19(81, 48, 99, 100, 105, 65, 123, 92, 116, 146, 100, 106, 90, 127, 78, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(29, 33, 165, 100, 92, 81, 100, 103, 118, 148, 99, 120, 114, 144, 77, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(50, 23, 165, 100, 92, 81, 100, 103, 118, 148, 99, 120, 114, 144, 77, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 101, 80, 86, 56, 123, 81, 171, 177, 35, 100, 108, 119, 100, 97, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 101, 80, 86, 56, 123, 81, 150, 177, 35, 100, 108, 119, 100, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(145, 10, 153, 101, 92, 57, 124, 102, 44, 190, 37, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(82, 52, 100, 101, 92, 57, 124, 102, 116, 146, 100, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 风起云涌\nMOTOsetspeed(40)\nMOTOmove19(63, 35, 140, 102, 91, 58, 124, 100, 144, 165, 32, 100, 108, 138, 76, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(49, 23, 155, 101, 92, 57, 124, 102, 165, 179, 15, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(49, 23, 155, 101, 92, 57, 124, 102, 160, 163, 18, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(18, 36, 181, 101, 92, 57, 124, 102, 157, 177, 17, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(18, 37, 190, 101, 92, 57, 124, 102, 158, 177, 46, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(79, 14, 180, 101, 92, 57, 124, 102, 184, 167, 17, 102, 107, 144, 77, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 暴风少年登场\nMOTOsetspeed(40)\nMOTOmove19(79, 15, 189, 91, 92, 53, 128, 90, 129, 176, 50, 112, 107, 143, 78, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80, 15, 158, 91, 92, 53, 128, 90, 129, 176, 21, 112, 107, 143, 78, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(115, 182, 89, 91, 92, 53, 128, 90, 76, 27, 111, 112, 107, 143, 78, 110, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 战胜烈火\nMOTOsetspeed(33)\nMOTOmove19(90, 100, 96, 91, 110, 94, 105, 88, 102, 18, 190, 111, 103, 110, 102, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(33)\nMOTOmove19(90, 100, 96, 91, 88, 39, 139, 90, 102, 18, 190, 113, 109, 157, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(90, 100, 96, 94, 96, 85, 106, 88, 102, 18, 190, 113, 109, 111, 103, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(33)\nMOTOmove19(90, 100, 96, 91, 88, 39, 139, 90, 102, 18, 190, 113, 109, 157, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(90, 100, 96, 91, 95, 39, 139, 90, 190, 26, 180, 113, 100, 157, 66, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 喧闹整个世界\nMOTOsetspeed(40)\nMOTOmove19(17, 176, 97, 91, 95, 39, 139, 90, 110, 188, 10, 113, 100, 157, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(17, 86, 97, 91, 95, 39, 139, 90, 110, 97, 10, 113, 100, 157, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(17, 85, 97, 91, 95, 39, 139, 90, 113, 15, 166, 113, 100, 157, 66, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(95, 178, 32, 90, 91, 46, 137, 87, 113, 15, 166, 112, 109, 145, 73, 109, 0, 0, 100)\nMOTOwait()\n\n\n-- 硝烟狂飞\nMOTOsetspeed(40)\nMOTOmove19(157, 180, 20, 100, 108, 85, 110, 101, 120, 89, 175, 115, 110, 145, 77, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(157, 105, 134, 109, 119, 89, 111, 104, 120, 89, 175, 137, 99, 153, 70, 127, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(73, 40, 168, 109, 119, 89, 111, 104, 120, 89, 175, 137, 99, 153, 70, 127, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(50)\nMOTOmove19(18, 36, 183, 109, 119, 89, 111, 104, 120, 89, 175, 137, 99, 153, 70, 127, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 51, 181, 109, 119, 89, 111, 104, 120, 89, 175, 137, 99, 153, 70, 127, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(18, 37, 183, 109, 119, 89, 111, 104, 120, 89, 175, 137, 99, 153, 70, 127, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 51, 181, 109, 119, 89, 111, 104, 120, 89, 175, 137, 99, 153, 70, 127, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 机甲\nMOTOsetspeed(50)\nMOTOmove19(80, 111, 25, 81, 99, 72, 118, 76, 43, 44, 180, 104, 84, 101, 95, 105, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(80, 111, 25, 63, 101, 47, 130, 73, 43, 95, 66, 91, 81, 111, 89, 96, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(80, 111, 25, 62, 101, 56, 129, 71, 127, 160, 32, 91, 88, 110, 90, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 操控我的权势\nMOTOsetspeed(35)\nMOTOmove19(84, 91, 12, 96, 98, 68, 116, 97, 65, 30, 113, 105, 105, 135, 82, 106, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(50)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(135, 175, 87, 94, 100, 58, 128, 92, 45, 106, 188, 101, 99, 142, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(135, 175, 87, 94, 100, 58, 128, 92, 103, 115, 189, 101, 99, 142, 71, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(135, 175, 87, 95, 75, 58, 115, 94, 25, 78, 190, 102, 126, 140, 87, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(40)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(12, 43, 189, 101, 91, 54, 131, 99, 187, 167, 14, 100, 110, 145, 73, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(15)\nMOTOmove19(31, 28, 189, 100, 121, 112, 96, 100, 180, 174, 14, 99, 79, 93, 100, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(61, 10, 186, 100, 121, 111, 95, 100, 156, 186, 16, 98, 80, 89, 104, 99, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\nMOTOsetspeed(30)\nMOTOmove19(61, 10, 186, 82, 100, 82, 107, 84, 156, 186, 16, 106, 99, 119, 89, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87, 39, 127, 81, 101, 70, 122, 76, 121, 160, 51, 123, 101, 133, 81, 123, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87, 25, 31, 84, 99, 61, 123, 83, 121, 160, 51, 117, 102, 140, 80, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 103, 102, 84, 99, 61, 123, 83, 118, 100, 105, 117, 102, 140, 80, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59, 43, 157, 84, 99, 61, 123, 60, 118, 160, 170, 117, 102, 140, 80, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(85, 103, 102, 84, 99, 61, 123, 83, 118, 100, 105, 117, 102, 140, 80, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(87, 39, 37, 84, 99, 61, 123, 83, 121, 160, 51, 117, 102, 140, 80, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59, 43, 157, 94, 95, 62, 123, 76, 118, 160, 170, 107, 103, 138, 81, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(59, 43, 157, 94, 95, 62, 123, 95, 118, 160, 170, 107, 103, 138, 81, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(140, 165, 107, 66, 116, 99, 99, 71, 57, 38, 107, 94, 91, 80, 119, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(140, 151, 151, 77, 114, 100, 96, 75, 57, 48, 43, 100, 84, 79, 123, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(131, 165, 38, 87, 130, 107, 103, 86, 45, 39, 156, 124, 76, 101, 90, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(154, 157, 107, 69, 113, 93, 100, 71, 25, 61, 104, 98, 90, 72, 129, 101, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(93, 182, 92, 98, 114, 82, 109, 92, 87, 24, 104, 120, 86, 114, 90, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(175, 86, 106, 112, 120, 86, 114, 93, 25, 99, 104, 139, 84, 113, 91, 122, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(93, 182, 92, 98, 114, 82, 109, 92, 87, 24, 104, 120, 86, 114, 90, 115, 0, 0, 100)\nMOTOwait()\n\n\n-- 第四段\nMOTOsetspeed(40)\nMOTOmove19(80, 36, 105, 102, 106, 58, 129, 103, 121, 158, 90, 100, 97, 142, 72, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(35)\nMOTOmove19(80, 36, 105, 99, 107, 65, 129, 99, 177, 158, 44, 98, 99, 137, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(73, 15, 189, 102, 106, 58, 129, 103, 188, 157, 44, 100, 97, 142, 72, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(18, 47, 153, 102, 106, 58, 129, 103, 188, 157, 44, 100, 97, 142, 72, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(22, 32, 190, 100, 95, 57, 128, 100, 179, 162, 43, 100, 104, 145, 73, 99, 0, 0, 100)\nMOTOwait()\n\n\n-- 换右腿\nMOTOsetspeed(35)\nMOTOmove19(47, 58, 109, 96, 113, 66, 127, 100, 49, 107, 110, 97, 102, 157, 62, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(141, 59, 64, 94, 105, 58, 127, 97, 118, 107, 13, 114, 98, 153, 65, 114, 0, 0, 100)\nMOTOwait()\n\n\n-- 扭下\nMOTOsetspeed(45)\nMOTOmove19(50, 44, 70, 89, 99, 62, 125, 83, 52, 36, 162, 104, 89, 116, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(57, 31, 63, 86, 122, 120, 83, 96, 68, 52, 160, 108, 85, 109, 93, 119, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(37, 79, 124, 85, 148, 139, 87, 88, 105, 58, 111, 111, 57, 68, 108, 116, 0, 0, 100)\nMOTOwait()\n\n\n-- 左脚后\nMOTOsetspeed(40)\nMOTOmove19(12, 46, 190, 81, 95, 53, 128, 77, 165, 171, 41, 111, 90, 108, 91, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(39, 28, 146, 78, 100, 57, 129, 77, 175, 157, 51, 108, 91, 115, 90, 107, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(35)\nMOTOmove19(175, 125, 90, 99, 109, 99, 94, 101, 50, 67, 116, 117, 109, 133, 89, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(95, 105, 114, 90, 96, 58, 119, 89, 106, 99, 106, 108, 99, 137, 79, 108, 0, 0, 100)\nMOTOwait()\n\n\n-- 左脚后\nMOTOsetspeed(40)\nMOTOmove19(34, 74, 73, 82, 92, 56, 117, 79, 172, 170, 30, 105, 90, 105, 97, 102, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(56, 50, 152, 90, 107, 55, 130, 84, 155, 132, 87, 107, 78, 111, 85, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(35, 18, 176, 98, 105, 79, 110, 100, 159, 159, 163, 118, 116, 165, 66, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(57, 13, 157, 93, 102, 44, 143, 84, 138, 152, 70, 109, 90, 123, 86, 103, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(94, 76, 143, 100, 125, 119, 86, 94, 121, 121, 60, 98, 75, 82, 110, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(175, 118, 96, 95, 119, 105, 94, 93, 36, 67, 113, 109, 79, 95, 100, 108, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(37)\nMOTOmove19(100, 75, 164, 94, 119, 80, 117, 92, 109, 177, 28, 107, 82, 126, 78, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15秒\nMOTOsetspeed(40)\nMOTOmove19(17, 48, 151, 96, 103, 74, 114, 91, 190, 159, 14, 103, 90, 108, 93, 97, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(38, 51, 135, 100, 112, 95, 102, 100, 153, 154, 71, 104, 85, 101, 96, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(35)\nMOTOmove19(89, 91, 167, 93, 98, 83, 101, 91, 113, 108, 35, 104, 99, 117, 92, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(79, 35, 125, 101, 121, 79, 122, 99, 124, 167, 77, 104, 81, 119, 81, 104, 0, 0, 100)\nMOTOwait()\n\n\n-- 两次\nMOTOsetspeed(30)\nMOTOmove19(93, 84, 96, 103, 92, 55, 122, 101, 109, 109, 100, 103, 107, 143, 79, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(39, 81, 30, 103, 100, 56, 126, 101, 179, 94, 168, 103, 101, 140, 77, 102, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\nMOTOsetspeed(60)\nMOTOmove19(29, 81, 101, 103, 100, 56, 126, 101, 180, 103, 95, 103, 101, 140, 77, 102, 0, 0, 100)\nMOTOwait()\n\n\n-- 左右\nMOTOsetspeed(35)\nMOTOmove19(12, 36, 172, 91, 105, 65, 124, 84, 181, 164, 20, 112, 86, 108, 91, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(49, 49, 179, 96, 131, 99, 108, 99, 109, 61, 99, 113, 84, 122, 84, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(94, 130, 102, 94, 122, 100, 106, 96, 140, 173, 35, 114, 92, 120, 87, 118, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(55, 27, 157, 94, 100, 84, 107, 89, 140, 165, 52, 113, 104, 114, 100, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(95, 163, 111, 97, 109, 69, 116, 99, 129, 156, 99, 107, 99, 148, 70, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(89, 113, 103, 100, 103, 52, 130, 93, 104, 56, 89, 112, 95, 132, 82, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(10, 47, 169, 91, 124, 121, 86, 92, 185, 162, 40, 106, 80, 86, 112, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(89, 68, 122, 94, 123, 121, 88, 97, 112, 140, 72, 107, 75, 79, 106, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 46, 186, 94, 123, 121, 88, 97, 186, 159, 48, 107, 75, 79, 106, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14, 46, 154, 94, 123, 121, 88, 97, 190, 162, 14, 107, 75, 79, 106, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(10, 38, 186, 94, 123, 121, 88, 97, 186, 159, 48, 107, 75, 79, 106, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(14, 46, 154, 94, 123, 121, 88, 97, 190, 162, 14, 107, 75, 79, 106, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(50)\nMOTOmove19(75, 37, 141, 97, 114, 91, 110, 93, 117, 177, 20, 115, 93, 115, 89, 113, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(59, 49, 102, 104, 99, 47, 136, 98, 25, 100, 95, 102, 99, 145, 71, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(59, 58, 117, 97, 98, 64, 119, 94, 96, 30, 111, 113, 109, 147, 76, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(93, 170, 101, 100, 113, 54, 136, 100, 104, 33, 96, 101, 82, 145, 64, 101, 0, 0, 100)\nMOTOwait()\nDelayMs(150)\n\n\n-- 羽羽\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10, 73, 99, 100, 92, 56, 123, 105, 121, 171, 59, 101, 107, 144, 76, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10, 73, 99, 100, 92, 56, 123, 105, 121, 171, 26, 101, 107, 144, 76, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(10, 73, 99, 100, 92, 56, 123, 105, 121, 171, 10, 101, 107, 144, 76, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(79, 30, 101, 100, 92, 56, 123, 105, 120, 158, 11, 101, 107, 144, 76, 104, 0, 0, 100)\nMOTOwait()\nDelayMs(250)\nMOTOsetspeed(13)\nMOTOmove19(83, 23, 134, 103, 92, 57, 123, 103, 186, 131, 100, 102, 106, 142, 75, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(83, 24, 154, 105, 98, 57, 127, 99, 186, 131, 100, 102, 97, 133, 81, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(83, 25, 168, 102, 91, 53, 126, 99, 186, 131, 100, 100, 106, 139, 78, 98, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(13)\nMOTOmove19(83, 38, 187, 94, 95, 59, 126, 89, 186, 131, 100, 92, 103, 136, 78, 91, 0, 0, 100)\nMOTOwait()\nDelayMs(250)\n\n\n-- 唱歌\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 我还是\nMOTOsetspeed(40)\nMOTOmove19(84, 97, 100, 103, 97, 66, 123, 102, 190, 159, 14, 103, 109, 143, 77, 106, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(40)\nMOTOmove19(38, 29, 159, 97, 97, 64, 124, 94, 190, 159, 14, 104, 109, 144, 77, 106, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(91, 30, 91, 96, 94, 57, 122, 94, 129, 152, 111, 107, 108, 142, 80, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(42, 64, 182, 95, 97, 63, 123, 94, 159, 136, 15, 105, 107, 137, 79, 106, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(45)\nMOTOmove19(64, 88, 40, 94, 116, 86, 104, 98, 125, 101, 186, 111, 100, 143, 79, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(19, 56, 186, 79, 115, 92, 110, 87, 182, 148, 17, 107, 101, 127, 85, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(141, 42, 184, 75, 120, 89, 111, 84, 52, 176, 37, 107, 96, 132, 81, 116, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(131, 125, 66, 75, 120, 89, 111, 84, 33, 130, 136, 107, 96, 132, 81, 116, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(45)\nMOTOmove19(99, 172, 10, 80, 125, 91, 117, 87, 118, 20, 190, 105, 80, 119, 75, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 没有一丝丝改变\nMOTOsetspeed(45)\nMOTOmove19(94, 103, 10, 90, 112, 66, 125, 83, 190, 138, 22, 117, 82, 109, 89, 111, 0, 0, 100)\nMOTOwait()\nDelayMs(700)\nMOTOsetspeed(35)\nMOTOmove19(94, 68, 104, 70, 145, 111, 108, 88, 137, 190, 54, 94, 79, 129, 75, 117, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(64, 40, 152, 93, 95, 87, 99, 89, 136, 160, 52, 114, 112, 119, 99, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(58, 18, 152, 93, 88, 80, 101, 88, 152, 182, 48, 114, 111, 116, 100, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 时间只不过\nMOTOsetspeed(33)\nMOTOmove19(67, 53, 128, 93, 125, 95, 112, 93, 133, 145, 63, 110, 79, 107, 87, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(67, 53, 128, 98, 95, 66, 118, 93, 133, 145, 63, 116, 115, 153, 71, 116, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(67, 39, 106, 99, 94, 56, 125, 97, 104, 31, 105, 111, 108, 145, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(95, 85, 97, 99, 94, 56, 125, 97, 104, 110, 101, 111, 108, 145, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(33)\nMOTOmove19(10, 48, 171, 99, 94, 56, 125, 97, 190, 156, 28, 111, 108, 145, 77, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 42, 171, 89, 90, 76, 110, 86, 190, 156, 28, 106, 112, 120, 99, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(10, 42, 171, 96, 119, 105, 99, 97, 190, 156, 28, 119, 97, 133, 78, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(53, 36, 184, 89, 121, 96, 113, 91, 180, 124, 10, 119, 102, 134, 80, 124, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(28, 31, 185, 71, 109, 94, 101, 90, 148, 179, 59, 88, 108, 145, 76, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(70, 49, 151, 96, 96, 36, 143, 82, 129, 159, 61, 115, 86, 110, 94, 103, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(11, 72, 176, 97, 84, 37, 134, 84, 106, 108, 190, 116, 84, 105, 94, 104, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(76, 50, 67, 106, 101, 57, 127, 101, 175, 118, 17, 123, 98, 150, 68, 115, 0, 0, 100)\nMOTOwait()\n\n\n-- 挺\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 86, 108, 62, 128, 87, 185, 159, 17, 108, 102, 140, 80, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 85, 67, 66, 106, 88, 185, 159, 17, 111, 155, 170, 75, 115, 0, 0, 100)\nMOTOwait()\n\n\n-- 挺\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 86, 108, 62, 128, 87, 185, 159, 17, 108, 102, 140, 80, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 85, 67, 66, 106, 88, 185, 159, 17, 111, 155, 170, 75, 115, 0, 0, 100)\nMOTOwait()\n\n\n-- 挺\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 86, 108, 62, 128, 87, 185, 159, 17, 108, 102, 140, 80, 111, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(20)\nMOTOmove19(76, 50, 67, 85, 67, 66, 106, 88, 185, 159, 17, 111, 155, 170, 75, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 50, 67, 106, 101, 57, 127, 101, 185, 159, 17, 123, 98, 150, 68, 115, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(75, 47, 112, 106, 101, 57, 127, 101, 66, 27, 136, 123, 98, 150, 68, 115, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(16, 45, 159, 103, 89, 50, 127, 96, 127, 126, 91, 115, 112, 151, 73, 112, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(45)\nMOTOmove19(76, 31, 128, 97, 112, 55, 137, 95, 115, 168, 60, 114, 89, 151, 58, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(32, 58, 106, 97, 112, 55, 137, 95, 79, 42, 130, 114, 89, 151, 58, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(32, 58, 106, 102, 116, 100, 102, 99, 135, 189, 49, 121, 99, 126, 87, 124, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(71, 29, 152, 84, 93, 67, 118, 79, 59, 30, 140, 105, 103, 119, 96, 107, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(29, 39, 140, 102, 93, 86, 97, 99, 59, 30, 141, 123, 113, 141, 82, 124, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(71, 29, 152, 104, 108, 73, 119, 94, 59, 34, 140, 119, 95, 113, 95, 111, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(31, 34, 167, 107, 88, 70, 113, 94, 43, 47, 190, 129, 118, 143, 83, 122, 0, 0, 100)\nMOTOwait()\n\n\n-- 面\nMOTOsetspeed(30)\nMOTOmove19(16, 45, 159, 88, 108, 85, 114, 93, 127, 126, 91, 112, 119, 166, 61, 119, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(172, 128, 126, 91, 121, 63, 131, 96, 42, 51, 90, 106, 84, 146, 65, 109, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(40, 40, 55, 111, 78, 75, 103, 93, 184, 157, 39, 134, 122, 123, 99, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76, 50, 67, 106, 101, 57, 127, 101, 177, 144, 17, 123, 98, 150, 68, 115, 0, 0, 100)\nMOTOwait()\n\n\n-- 1\nMOTOsetspeed(30)\nMOTOmove19(40, 40, 55, 111, 78, 75, 103, 93, 184, 158, 39, 134, 122, 123, 99, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(146, 168, 118, 96, 113, 73, 117, 87, 37, 58, 78, 108, 81, 101, 96, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(23, 68, 143, 96, 113, 73, 117, 87, 37, 103, 62, 108, 81, 101, 96, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(107, 64, 28, 75, 128, 90, 113, 73, 98, 119, 181, 103, 71, 89, 102, 101, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(34)\nMOTOmove19(145, 163, 102, 89, 119, 104, 95, 92, 39, 55, 99, 116, 89, 126, 81, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(34)\nMOTOmove19(86, 96, 28, 91, 120, 91, 109, 91, 96, 121, 167, 117, 92, 127, 82, 120, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(168, 96, 187, 91, 120, 91, 109, 91, 32, 69, 87, 117, 92, 127, 82, 120, 0, 0, 100)\nMOTOwait()\n\n\n-- 往上\nMOTOsetspeed(11)\nMOTOmove19(67, 53, 102, 88, 101, 78, 106, 88, 134, 135, 100, 114, 98, 121, 89, 113, 0, 0, 100)\nMOTOwait()\nDelayMs(300)\nMOTOsetspeed(11)\nMOTOmove19(67, 67, 142, 98, 114, 83, 110, 94, 133, 133, 58, 125, 97, 145, 70, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(11)\nMOTOmove19(66, 117, 122, 103, 114, 92, 103, 97, 134, 83, 78, 131, 99, 130, 85, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(11)\nMOTOmove19(81, 145, 98, 91, 127, 102, 100, 94, 119, 55, 102, 120, 91, 125, 85, 122, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(11)\nMOTOmove19(67, 67, 142, 99, 115, 89, 111, 98, 133, 133, 58, 126, 104, 146, 73, 122, 0, 0, 100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n\n\n-- 背手鞠躬\nMOTOsetspeed(28)\nMOTOmove19(80, 35, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(15, 41, 175, 100, 93, 55, 124, 100, 180, 155, 155, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(15, 41, 175, 100, 145, 55, 145, 100, 180, 155, 130, 100, 55, 145, 55, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(1600)\nMOTOsetspeed(21)\nMOTOmove19(15, 41, 175, 100, 93, 55, 124, 100, 120, 120, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(28)\nMOTOmove19(80, 40, 160, 100, 93, 55, 124, 100, 120, 130, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1742586515751'] = function(block) {
  let code = "base_action.action('少年_EM_20250317')\n";
  return code;
}

Blockly.Blocks['1742586487533'] = {
  init: function() {
    this.jsonInit({
      "type": "1742586487533",
      "message0": "科目三_EM_20250316",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1742586487533'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(2000)\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 91, 91, 31, 103, 107, 106, 144, 76, 104, 0, 0, 98)\nMOTOwait()\nDelayMs(300)\n\n\n-- 红尘\nMOTOsetspeed(20)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 87, 186, 160, 33, 107, 106, 144, 76, 108, 0, 0, 98)\nMOTOwait()\nDelayMs(500)\n\n\n-- 俱往矣\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 110, 109, 75, 117, 111, 92, 98, 97, 114, 95, 112, 87, 115, 0, 0, 177)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 苍天\nMOTOsetspeed(15)\nMOTOmove19(107, 99, 99, 88, 92, 76, 110, 88, 120, 170, 100, 94, 101, 129, 85, 89, 0, 0, 34)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 对月\nMOTOsetspeed(15)\nMOTOmove19(89, 100, 188, 100, 93, 55, 124, 100, 112, 105, 14, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 寂寥\nMOTOsetspeed(15)\nMOTOmove19(40, 23, 187, 100, 154, 96, 121, 100, 164, 174, 14, 100, 46, 104, 76, 100, 0, 0, 167)\nMOTOwait()\nDelayMs(1400)\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 128, 94, 93, 55, 124, 93, 119, 170, 69, 107, 107, 145, 76, 106, 0, 0, 100)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(36)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 枕1\nMOTOsetspeed(34)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(34)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 浓烈\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 只身1\nMOTOsetspeed(10)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 看惯2\nMOTOsetspeed(10)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(12)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 这成败\nMOTOsetspeed(50)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 江湖一笑\nMOTOsetspeed(40)\nMOTOmove19(89, 50, 188, 84, 93, 55, 124, 62, 52, 41, 95, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 63, 189, 100, 93, 55, 124, 100, 37, 67, 98, 117, 107, 145, 76, 135, 0, 0, 135)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 84, 93, 55, 124, 62, 25, 94, 102, 99, 107, 145, 76, 96, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 100, 93, 55, 124, 100, 25, 94, 102, 117, 107, 145, 76, 135, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(160, 143, 101, 84, 93, 55, 124, 62, 109, 154, 11, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 123, 102, 100, 93, 55, 124, 100, 111, 140, 10, 117, 107, 145, 76, 135, 0, 0, 62)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 84, 93, 55, 124, 62, 110, 112, 11, 99, 107, 145, 76, 96, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 100, 93, 55, 124, 100, 110, 112, 11, 117, 107, 145, 76, 135, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 寂寥第一段结束\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1间奏\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(36)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 拂袖1\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 84, 93, 55, 124, 62, 109, 71, 94, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(10, 47, 180, 100, 93, 55, 124, 100, 109, 71, 94, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 枕1\nMOTOsetspeed(34)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 汝1\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 190, 84, 93, 55, 124, 62, 190, 157, 36, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(18)\nMOTOmove19(10, 46, 162, 100, 93, 55, 124, 100, 190, 160, 10, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(34)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 剑起1\nMOTOsetspeed(25)\nMOTOmove19(93, 62, 145, 84, 93, 55, 124, 62, 167, 164, 54, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(46, 29, 147, 100, 93, 55, 124, 100, 117, 147, 52, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 浓烈\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 只身1\nMOTOsetspeed(12)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\n\n\n-- 看惯2\nMOTOsetspeed(12)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(500)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(12)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(69, 14, 166, 84, 93, 55, 124, 62, 138, 182, 35, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(14, 38, 166, 100, 93, 55, 124, 100, 190, 160, 35, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 这成败\nMOTOsetspeed(50)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(58, 177, 99, 84, 93, 55, 124, 62, 146, 24, 102, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(124, 177, 99, 100, 93, 55, 124, 100, 78, 24, 102, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 江湖一笑\nMOTOsetspeed(40)\nMOTOmove19(89, 50, 188, 84, 93, 55, 124, 62, 52, 41, 95, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 63, 189, 100, 93, 55, 124, 100, 37, 67, 98, 117, 107, 145, 76, 135, 0, 0, 135)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 84, 93, 55, 124, 62, 25, 94, 102, 99, 107, 145, 76, 96, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(90, 103, 190, 100, 93, 55, 124, 100, 25, 94, 102, 117, 107, 145, 76, 135, 0, 0, 170)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(40)\nMOTOmove19(160, 143, 101, 84, 93, 55, 124, 62, 109, 154, 11, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 123, 102, 100, 93, 55, 124, 100, 111, 140, 10, 117, 107, 145, 76, 135, 0, 0, 62)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 84, 93, 55, 124, 62, 110, 112, 11, 99, 107, 145, 76, 96, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(25)\nMOTOmove19(175, 98, 100, 100, 93, 55, 124, 100, 110, 112, 11, 117, 107, 145, 76, 135, 0, 0, 30)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(22)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 侠骨1\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 84, 93, 55, 124, 62, 105, 155, 60, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 2\nMOTOsetspeed(20)\nMOTOmove19(40, 25, 148, 100, 93, 55, 124, 100, 136, 190, 50, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 谁了解\nMOTOsetspeed(55)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 84, 93, 55, 124, 62, 28, 75, 100, 99, 107, 145, 76, 96, 0, 0, 100)\nMOTOwait()\nDelayMs(50)\n\n\n-- 第二段结束\nMOTOsetspeed(35)\nMOTOmove19(90, 11, 190, 100, 93, 55, 124, 100, 29, 75, 173, 117, 107, 145, 76, 135, 0, 0, 100)\nMOTOwait()\nDelayMs(350)\nMOTOsetspeed(30)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 91, 91, 31, 103, 107, 106, 144, 76, 104, 0, 0, 98)\nMOTOwait()\nDelayMs(300)\n\n\n-- 红尘\nMOTOsetspeed(20)\nMOTOmove19(80, 29, 100, 93, 94, 55, 124, 87, 186, 160, 33, 107, 106, 144, 76, 108, 0, 0, 98)\nMOTOwait()\nDelayMs(500)\n\n\n-- 俱往矣\nMOTOsetspeed(15)\nMOTOmove19(80, 30, 100, 110, 109, 75, 117, 111, 92, 98, 97, 114, 95, 112, 87, 115, 0, 0, 177)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 苍天\nMOTOsetspeed(15)\nMOTOmove19(107, 99, 99, 88, 92, 76, 110, 88, 120, 170, 100, 94, 101, 129, 85, 89, 0, 0, 34)\nMOTOwait()\nDelayMs(1000)\n\n\n-- 对月\nMOTOsetspeed(15)\nMOTOmove19(89, 100, 188, 100, 93, 55, 124, 100, 112, 105, 14, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nDelayMs(800)\n\n\n-- 寂寥\nMOTOsetspeed(15)\nMOTOmove19(40, 23, 187, 100, 154, 96, 121, 100, 164, 174, 14, 100, 46, 104, 76, 100, 0, 0, 167)\nMOTOwait()\nDelayMs(1800)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1742586487533'] = function(block) {
  let code = "base_action.action('科目三_EM_20250316')\n";
  return code;
}

