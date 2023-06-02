import { Form, InputNumber, Select } from 'antd';
import { ResistorValues, Color, decodedValue } from '../exercism/ResistorDuo';

const { Option } = Select;

type ResistorDuoProps = {};

const ResistorDuo: React.FC<ResistorDuoProps> = () => {
  const onFinish = (values: any) => {
    const { colors } = values;
    const value = decodedValue(colors);
    console.log(value);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Color 1"
        name={['colors', 0]}
        rules={[{ required: true, message: 'Please select the first color' }]}
      >
        <Select>
          {Object.entries(ResistorValues).map(([color, value]) => (
            <Option key={color} value={color as Color}>
              {color}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Color 2"
        name={['colors', 1]}
        rules={[{ required: true, message: 'Please select the second color' }]}
      >
        <Select>
          {Object.entries(ResistorValues).map(([color, value]) => (
            <Option key={color} value={color as Color}>
              {color}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <button type="submit">Calculate</button>
      </Form.Item>
    </Form>
  );
};

export default ResistorDuo;
