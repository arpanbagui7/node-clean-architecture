const validationMsg = {
  string_type: 'should be a string',
  int_type: 'should be an integer',
  float_type: 'should be a float',
  array_type: 'should be an array',
  json_type: 'should be an object',
  max_min_length: (min: number, max: number) =>
    `length must be between ${min} and ${max}`,
};

export default validationMsg;
