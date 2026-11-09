Blockly.Blocks['Hands_up'] = {
  init: function () {
    this.jsonInit({
      type: 'Hands_up',
      message0: '%{BKY_HANDS_UP}',
      previousStatement: 'motion_block',
      nextStatement: 'motion_block',
      colour: '#48BCBC',
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['Hands_up'] = function (block) {
  const code = [
    'MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)',
    'MOTOsetspeed(30)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 185, 100, 76, 27, 142, 100, 120, 170, 15, 100, 124, 173, 58, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(28)',
    'MOTOmove16(50, 20, 140, 100, 88, 55, 123, 100, 150, 180, 60, 100, 114, 145, 77, 100)',
    'MOTOwait()',
    'DelayMs(500)',
    'MOTOsetspeed(35)',
    'MOTOmove16(50, 20, 140, 100, 76, 27, 141, 100, 150, 180, 60, 100, 124, 173, 60, 100)',
    'MOTOwait()',
    'MOTOsetspeed(35)',
    'MOTOmove16(130, 170, 60, 100, 76, 27, 142, 100, 70, 30, 140, 100, 124, 173, 61, 100)',
    'MOTOwait()',
    'DelayMs(100)',
    'MOTOsetspeed(42)',
    'MOTOmove16(130, 170, 60, 100, 86, 55, 124, 100, 70, 30, 140, 100, 114, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(90, 30, 130, 100, 90, 55, 124, 100, 110, 170, 70, 100, 110, 145, 76, 100)',
    'MOTOwait()',
    'MOTOsetspeed(42)',
    'MOTOmove16(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100)',
    'MOTOwait()',
    '',
  ];
  return code.join('\n');
}

Blockly.Python['Hands_up'] = function (block) {
  let code = "base_action.action('" + Blockly.Msg['HANDS_UP'] + "')\n";
  return code;
}

