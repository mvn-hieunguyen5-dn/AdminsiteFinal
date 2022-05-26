import React, { useState } from "react";
import UploadImgForm from "../../../components/Module/Form/UploadImgForm";
import { apiPostTrip } from "../../../core/api/Trip/Trip.api";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Select,
  Switch,
  message,
} from "antd";
// import { async } from "@firebase/util";
export default function AddTrip() {
  const [img, setImg] = useState("");
  const [isLoad, setLoad] = useState(false);
  const onFormLayoutChange = ({ itemT }) => {
    console.log(itemT);
  };
  const onFinish = async (values) => {
    const Data = {
      createdAt: new Date(),
      name: values.name,
      start_location: values.start_location,
      end_location: values.end_location,
      start_date: values.range_time[0],
      end_date: values.range_time[1],
      EM_name: values.EM_name[1],
      customer_name: values.customer_name,
      customer_social_id: values.customer_social_id,
      image: img,
      Department: values.EM_name[0],
    };
    setLoad(true);
    const res = await apiPostTrip(Data);
    setLoad(false);
    if (res.status === 201) {
      message.success(res.statusText, 2.5);
    } else {
      message.error("Create fail, something went wrong");
    }
    console.log(res);
  };
  const { RangePicker } = DatePicker;
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Requied value!!" }],
  };
  return (
    <div className="overflow-x-auto">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 18,
        }}
        layout="horizontal"
        initialValues={{
          size: "Large",
        }}
        onFinish={onFinish}
        onValuesChange={onFormLayoutChange}
        size="Large"
      >
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Select" name="start_location">
          <Select>
            <Select.Option value="HAN">Ha Noi City </Select.Option>
            <Select.Option value="DAN">Da Nang City </Select.Option>
            <Select.Option value="SGN">Ha Chi Minh City </Select.Option>
            <Select.Option value="HP">Hai Phong </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Destination" name="end_location">
          <Select>
            <Select.Option value="HAN">Ha Noi City </Select.Option>
            <Select.Option value="DAN">Da Nang City </Select.Option>
            <Select.Option value="SGN">Ha Chi Minh City </Select.Option>
            <Select.Option value="HP">Hai Phong </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Responsible" name="EM_name" {...rangeConfig} >
          <Cascader
            options={[
              {
                value: "TG",
                label: "Tour Guide",
                children: [
                  {
                    value: "Hoang Kim",
                    label: "Hoang Kim",
                  },
                  {
                    value: "Thuy Minh",
                    label: "Thuy Minh",
                  },
                ],
              },
              {
                value: "EV",
                label: "Event",
                children: [
                  {
                    value: "Tien Hoang",
                    label: "Tien Hoang",
                  },
                  {
                    value: "Trung Quan",
                    label: "Trung Quan",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item name="range_time" label="Range date" {...rangeConfig}>
          <RangePicker showTime format="YYYY-MM-DD" />
        </Form.Item>
        <Form.Item label="Customer name" name="customer_name">
          <Input />
        </Form.Item>
        <Form.Item label="Customer social id" name="customer_social_id">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload IMG">
          <UploadImgForm
            setImg={(img) => {
              setImg(img);
              console.log(img);
            }}
          />
        </Form.Item>

        <Form.Item label="">
          <Button type="primary" htmlType="submit" loading={isLoad}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
