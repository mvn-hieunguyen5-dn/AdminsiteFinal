import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UploadImgForm from "../../../components/Module/Form/UploadImgForm";
import {
  apiPostTrip,
  apiGetTripById,
  apiEditTripById,
} from "../../../core/api/Trip/Trip.api";
import moment from "moment";
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
  const [form] = Form.useForm();
  const { id } = useParams();
  const [image, setImg] = useState("");
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    createdAt: "",
    name: "",
    start_location: "",
    end_location: "",
    range_time: [0, 0],
    EM_name: ["", ""],
    customer_name: "",
    customer_social_id: "",
  });
  const [Data, setData] = useState({
    createdAt: new Date(),
    name: "",
    start_location: "",
    end_location: "",
    start_date: null,
    end_date: null,
    EM_name: "",
    customer_name: "",
    customer_social_id: 0,
    image: "",
    Department: "",
  });
  useEffect(() => {
    async function getData() {
      if (id) {
        message.info("Id detective");
        let res = await apiGetTripById(id);
        // console.log(res);
        setData(res.data[0]);
      }
    }
    getData();
  }, []);
  useEffect(() => {
    setFormData({
      createdAt: Data.date,
      name: Data.name,
      start_location: Data.start_location,
      end_location: Data.end_location,
      range_time: [moment(Data.start_date), moment(Data.end_date)],
      EM_name: [Data.Department, Data.EM_name],
      customer_name: Data.customer_name,
      customer_social_id: Data.customer_social_id,
    });
    setImg(Data.image);
    form.resetFields();
  }, [Data]);

  const onFormLayoutChange = (items) => {
  };
  const onFinish = async (values) => {
    setLoad(true);
    console.log(values);
    let res = null;
    if (!id) {
      res = await apiPostTrip({
        createdAt: new Date(),
        name: values.name,
        start_location: values.start_location,
        end_location: values.end_location,
        start_date: values.range_time[0],
        end_date: values.range_time[1],
        EM_name: values.EM_name[1],
        customer_name: values.customer_name,
        customer_social_id: values.customer_social_id,
        image: image,
        Department: values.EM_name[0],
      });
    } else {
      res = await apiEditTripById({
        createdAt: new Date(),
        name: values.name,
        start_location: values.start_location,
        end_location: values.end_location,
        start_date: values.range_time[0],
        end_date: values.range_time[1],
        EM_name: values.EM_name[1],
        customer_name: values.customer_name,
        customer_social_id: values.customer_social_id,
        image: image,
        Department: values.EM_name[0],
      },id);
    }
    
    setLoad(false);
    if (res.status === 200) {
      message.success(res.statusText, 2.5);
    } else {
      message.error("Create fail, something went wrong");
    }
  };
  const { RangePicker } = DatePicker;
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Requied value!!" }],
  };
  return (
    <div className="overflow-x-auto xl:px-50 2xl:px-96">
      {id ? <blockquote>Edit item id: {id}</blockquote> : ""}
      <Form
        form={form}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        initialValues={formData}
        onFinish={(val)=>onFinish(val)}
        onValuesChange={onFormLayoutChange}
        size="Large"
        responsive="sm"
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
        <Form.Item label="Responsible" name="EM_name" {...rangeConfig}>
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
        <Form.Item label="Upload IMG">
          <UploadImgForm
            img={image}
            setImg={(img) => {
              setImg(img);
            }}
          />
        </Form.Item>

        <Form.Item label="">
          <Button type="primary" htmlType="submit" loading={isLoad}>
            {id ? "Edit" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
