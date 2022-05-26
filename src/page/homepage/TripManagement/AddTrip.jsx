import React from "react";
import UploadImgForm from "../../../components/Module/Form/UploadImgForm";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
  TreeSelect,
} from "antd";
export default function AddTrip() {

  const onFormLayoutChange = ({ itemT }) => {
    console.log(itemT);
  };
  const { RangePicker } = DatePicker;
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };
  return (
    <div className="overflow-x-auto">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: "Large",
        }}
        onValuesChange={onFormLayoutChange}
        size="Large"
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect" name="itemT">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [
                  {
                    title: "Bamboo",
                    value: "bamboo",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader" name="itemL">
          <Cascader
            options={[
              {
                value: "TG",
                label: "Tour Guide",
                children: [
                  {
                    value: "001",
                    label: "Hoang Kim",
                  },
                  {
                    value: "004",
                    label: "Thuy Minh",
                  },
                ],
              },
              {
                value: "EV",
                label: "Event",
                children: [
                  {
                    value: "002",
                    label: "Tien Hoang",
                  },
                  {
                    value: "003",
                    label: "Trung Quan",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="range-time-picker"
          label="RangePicker[showTime]"
          {...rangeConfig}
        >
          <RangePicker showTime format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload IMG">
          <UploadImgForm />
        </Form.Item>

        <Form.Item label="">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
