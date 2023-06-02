import React from "react";
import { Form, Select, Button } from "antd";
import { decodedResistorValue, Color, COLORS } from "../exercism/ResistorTrio";

const { Option } = Select;

const Form2 = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { band1, band2, band3 } = values;
    const resistorValue = decodedResistorValue([band1, band2, band3]);
    console.log(resistorValue);
  };

  const handleChange = () => {
    form.submit();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="band1"
        label="Band 1"
        rules={[{ required: true, message: "Please select band 1" }]}
      >
        <Select onChange={handleChange}>
          {COLORS.map((color: Color) => (
            <Option key={color} value={color}>
              {color}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="band2"
        label="Band 2"
        rules={[{ required: true, message: "Please select band 2" }]}
      >
        <Select onChange={handleChange}>
          {COLORS.map((color: Color) => (
            <Option key={color} value={color}>
              {color}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="band3"
        label="Band 3"
        rules={[{ required: true, message: "Please select band 3" }]}
      >
        <Select onChange={handleChange}>
          {COLORS.map((color: Color) => (
            <Option key={color} value={color}>
              {color}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Calculate
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form2;
