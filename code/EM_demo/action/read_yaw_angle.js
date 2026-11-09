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

