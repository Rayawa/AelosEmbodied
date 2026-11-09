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

