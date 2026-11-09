Blockly.Blocks['Squat'] = {
  init: function () {
    this.jsonInit({
      type: 'Squat',
      message0: '%{BKY_SQUAT}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Squat'] = function (block) {
  const code = [
    'MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 130, 130, 77, 100, 120, 170, 100, 100, 70, 70, 123, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(14)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Squat'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['SQUAT'] + "')\n";
  return code;
}

Blockly.Blocks['identify_label_number'] = {
  init: function () {
    this.jsonInit({
      type: 'identify_label_number',
      message0: '%1 %{BKY_CAMERA}%{BKY_IDENTIFY_LABEL_NUMBER} %2',
      args0: [{ type: 'field_dropdown', name: 'camera', options: cameraOptions() }, artagIdOptions],
      output: 'Boolean',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['identify_label_number'] = function (block) {
  const code = 'false';
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['identify_label_number'] = function (block) {
  const camera = block.getFieldValue('camera');
  const number = block.getFieldValue('number');
  const code = `${GET_SPECIFIES_TAG}(${number}, '${camera}')[${artagOptions.x.value}] != 1000`;
  return [code, Blockly.Python.ORDER_NONE];
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

Blockly.Blocks['read_distance'] = {
  init: function () {
    this.jsonInit({
      type: 'read_distance',
      message0: '%{BKY_READ_DISTANCE_TITLE_5}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        artagIdOptions,
        {
          type: 'field_dropdown',
          name: 'axis',
          options: [
            ['X', artagOptions.x.lable],
            ['Y', artagOptions.y.lable],
          ],
        },
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['read_distance'] = function(block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['read_distance'] = function (block) {
  const camera = block.getFieldValue('camera');
  const number = block.getFieldValue('number');
  const axis = block.getFieldValue('axis');
  const code = `${GET_SPECIFIES_TAG}(${number}, '${camera}')[${artagOptions[axis].value}]`;
  return [code, Blockly.Python.ORDER_NONE];
}

Blockly.Blocks['read_yaw_angle'] = {
  init: function () {
    this.jsonInit({
      type: 'read_yaw_angle',
      message0: '%{BKY_READ_YAW_ANGLE_3}',
      args0: [{ type: 'field_dropdown', name: 'camera', options: cameraOptions() }, artagIdOptions],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['read_yaw_angle'] = function(block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['read_yaw_angle'] = function (block) {
  const camera = block.getFieldValue('camera');
  const number = block.getFieldValue('number');
  const code = `${GET_SPECIFIES_TAG}(${number}, '${camera}')[${artagOptions.yaw.value}]`;
  return [code, Blockly.Python.ORDER_NONE];
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

Blockly.Blocks['color_rgbhsv_central_coordinate'] = {
  init: function () {
    this.jsonInit({
      type: 'color_rgbhsv_central_coordinate',
      message0:
        '%1 %{BKY_CAMERA} %2 %{BKY_COLOR_RGBHSV_DISCRIMIATION_TITLE_1} %3 %4 %{BKY_COLOR_RGBHSV_DISCRIMIATION_TITLE_2} %5 Hmin: %6 ~Hmax: %7 %8 Smin :  %9 ~Smax :  %10 %11 Vmin : %12 ~Vmax: %13',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'input_dummy' },
        {
          type: 'field_dropdown',
          name: 'axis',
          options: [
            ['X%{BKY_COORDINATES}', '0'],
            ['Y%{BKY_COORDINATES}', '1'],
          ],
        },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      output: 'Number',
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_rgbhsv_central_coordinate'] = function (block) {
  const code = ERROR_VALUE;
  return [code, Blockly.Lua.ORDER_NONE];
}

Blockly.Python['color_rgbhsv_central_coordinate'] = function (block) {
  const camera = block.getFieldValue('camera');
  const axis = block.getFieldValue('axis');
  const hmin = block.getFieldValue('hmin');
  const hmax = block.getFieldValue('hmax');
  const smin = block.getFieldValue('smin');
  const smax = block.getFieldValue('smax');
  const vmin = block.getFieldValue('vmin');
  const vmax = block.getFieldValue('vmax');
  const hsvCode = generateHsvCode(GET_CENTRAL_COORDINATE, camera, {
    hmin,
    hmax,
    smin,
    smax,
    vmin,
    vmax,
  });
  const code = `${hsvCode}[${axis}]`;
  return [code, Blockly.Python.ORDER_NONE];
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

Blockly.Blocks['aelos_if_else'] = {
  init: function () {
    this.jsonInit({
      type: 'aelos_if_else',
      message0: '%{BKY_AELOS_IF} %1 %{BKY_AELOS_DO} %2 %{BKY_AELOS_ELSE} %3',
      args0: [
        {
          type: 'input_value',
          name: 'condition',
          check: 'Boolean',
        },
        {
          type: 'input_statement',
          name: 'if_do',
        },
        {
          type: 'input_statement',
          name: 'else_do',
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

Blockly.Lua['aelos_if_else'] = function (block) {
  const condition = Blockly.Lua.valueToCode(block, 'condition', Blockly.Lua.ORDER_NONE) || 'false';
  const if_do = Blockly.Lua.statementToCode(block, 'if_do');
  const else_do = Blockly.Lua.statementToCode(block, 'else_do');

  const code = `if ${condition} then \n${if_do} \nHKEY()\nelse \n${else_do}\nHKEY()\nend\n`;
  return code;
}

Blockly.Python['aelos_if_else'] = function (block) {
  const condition =
    Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_NONE) || 'False';
  const if_do = Blockly.Python.statementToCode(block, 'if_do') || Blockly.Python.PASS;
  const else_do = Blockly.Python.statementToCode(block, 'else_do') || Blockly.Python.PASS;

  const code = `if ${condition}:\n${if_do}else:\n${else_do}`;
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

Blockly.Blocks['1746754892365'] = {
  init: function() {
    this.jsonInit({
      "type": "1746754892365",
      "message0": "抱块向前慢走半步2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1746754892365'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(30)\nMOTOmove19(60,10,190,100,93,55,124,100,145,189,13,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,90,91,48,129,88,145,189,13,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,90,91,48,129,85,145,189,13,94,107,146,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,86,125,95,110,90,145,189,13,94,107,146,76,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60,10,190,86,113,37,156,88,145,189,13,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,107,100,56,124,111,145,189,13,112,129,155,93,110,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(60,10,190,106,95,54,123,113,145,189,13,107,97,142,83,109,0,0,100)\nMOTOwait()\nMOTOsetspeed(5)\nMOTOmove19(60,10,190,100,93,55,124,100,145,189,13,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1746754892365'] = function(block) {
  let code = "base_action.action('抱块向前慢走半步2')\n";
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

Blockly.Blocks['color_identification_rgbhsv'] = {
  init: function () {
    this.jsonInit({
      type: 'color_identification_rgbhsv',
      message0: '%{BKY_VISUAL_COLOR_RGBHSV_TITLE_1}',
      args0: [
        { type: 'field_dropdown', name: 'camera', options: cameraOptions() },
        { type: 'field_colour', name: 'colour', colour: '#ff0000' },
        { type: 'input_dummy' },
        { type: 'input_dummy' },
        hsvArgs.hmin,
        hsvArgs.hmax,
        { type: 'input_dummy' },
        hsvArgs.smin,
        hsvArgs.smax,
        { type: 'input_dummy' },
        hsvArgs.vmin,
        hsvArgs.vmax,
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.VisualHUE,
      tooltip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['color_identification_rgbhsv'] = function (block) {
  const camera = block.getFieldValue('camera');
  const colour = block.getFieldValue('colour');
  const { hmin, hmax, smin, smax, vmin, vmax } = getHsvRangeParams(block);
  return `-- HSVMarker('${camera}', '${colour}', {${hmin}, ${hmax}, ${smin}, ${smax}, ${vmin}, ${vmax}})\n`;
}

Blockly.Python['color_identification_rgbhsv'] = function (block) {
  const camera = block.getFieldValue('camera');
  const colour = block.getFieldValue('colour');
  const { hmin, hmax, smin, smax, vmin, vmax } = getHsvRangeParams(block);
  return `# HSVMarker('${camera}', '${colour}', {${hmin}, ${hmax}, ${smin}, ${smax}, ${vmin}, ${vmax}})\n`;
}

Blockly.Blocks['loop'] = {
  init: function () {
    this.jsonInit({
      type: 'loop',
      message0: '%{BKY_EXIT_LOOP_TEXT}',
      previousStatement: null,
      nextStatement: null,
      colour: '#86C113',
      tooltip: '',
      helpUrl: '',
      extensions: ['controls_flow_in_loop_check'],
    });
  }
};

Blockly.Lua['loop'] = function(block) {
  let code = 'break\n';
  return code;
}

Blockly.Python['loop'] = function (block) {
  const code = 'break\n';
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

Blockly.Blocks['aelos_for'] = {
  init: function() {
    this.jsonInit({
      "type": "aelos_for",
      "message0": "%{BKY_AELOS_LOOP} %1 %{BKY_AELOS_LOOP_TIMES} %2 %{BKY_AELOS_DO} %3",
      "args0": [
        {
          "type": "input_value",
          "name": "times",
          "check": ["Number", "Variable"]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "do"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '#86C113',
      "tooltip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['aelos_for'] = function (block) {
  const times = Blockly.Lua.valueToCode(block, 'times', Blockly.Lua.ORDER_NONE) || '0';
  const do_code = Blockly.Lua.statementToCode(block, 'do');

  const code = `for i = 1,${times},1\ndo\n${do_code}\nHKEY()\nend\n`;

  return code;
}

Blockly.Python['aelos_for'] = function (block) {
  const times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_NONE) || '0';
  const do_code = Blockly.Python.statementToCode(block, 'do') || Blockly.Python.PASS;

  const code = `for i in range(${times}):\n${do_code}`;

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

