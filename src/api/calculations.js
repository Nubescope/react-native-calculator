import axios from 'axios'

export default {
  sum: async (left, right) => {
    const response = await axios.post('http://10.17.1.66:9443/tenant/v1/calculations', {
      expressionType: 'binary',
      expression: {
        left,
        right,
      },
      operand: 'sum',
    })

    return response.data.result
  },
}
