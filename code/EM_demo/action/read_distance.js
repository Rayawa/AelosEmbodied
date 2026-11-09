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

