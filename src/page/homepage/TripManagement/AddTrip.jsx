import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUnSaveForm,
  turnOnWarn,
  turnOffWarn,
} from "../../../store/unSaveClice";
import UploadImgForm from "../../../components/Module/Form/UploadImgForm";
import { useNavigate } from "react-router-dom";
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
  message,
} from "antd";
// import { async } from "@firebase/util";
export default function AddTrip() {
  const isAlert = useSelector((state) => state.unSave.isWarn);
  const unsaveData = useSelector((state) => state.unSave.value);
  const [form] = Form.useForm();
  const { id } = useParams();
  const [image, setImg] = useState("");
  const [isLoad, setLoad] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    createdAt: "",
    name: "",
    start_location: "",
    end_location: "",
    range_time: null,
    EM_name: null,
    customer_name: "",
    customer_social_id: "",
  });
  useEffect(() => {
    const getData = async () => {
      if (id) {
        message.info("Id detective");
        const res = await apiGetTripById(id);
        console.log(res);
        setFormData({
          createdAt: res.data[0].date,
          name: res.data[0].name,
          start_location: res.data[0].start_location,
          end_location: res.data[0].end_location,
          range_time: [
            moment(res.data[0].start_date),
            moment(res.data[0].end_date),
          ],
          EM_name: [res.data[0].Department, res.data[0].EM_name],
          customer_name: res.data[0].customer_name,
          customer_social_id: res.data[0].customer_social_id,
        });
        setImg(res.data[0].image);
      } else {
        resetFormData();
        setImg("");
      }
    };
    getData();
  }, [id, form]);

  useEffect(() => {
    form.resetFields();
    return () => {
      if (!id) dispatch(turnOnWarn());
    };
  }, [formData, form, dispatch,id]);
  const onValuesChange = (items, allitem) => {
    if (id) dispatch(updateUnSaveForm({ ...allitem, id: id }));
    else dispatch(updateUnSaveForm(allitem));
  };
  const fillUnsaveData = () => {
    console.log(unsaveData);
    setFormData(unsaveData);
    deleteUnsaveData();
  };
  const deleteUnsaveData = () => {
    dispatch(turnOffWarn());
  };
  const resetFormData = () => {
    setFormData({
      createdAt: "",
      name: "",
      start_location: "",
      end_location: "",
      range_time: null,
      EM_name: null,
      customer_name: "",
      customer_social_id: "",
    });
  };
  const onFinish = async (values) => {
    setLoad(true);
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
      res = await apiEditTripById(
        {
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
        },
        id
      );
    }

    setLoad(false);
    if (res.status === 200) {
      message.success(res.statusText, 2.5);
      navigate(-1);
    } else {
      message.error("Create fail, something went wrong");
    }
    resetFormData();
    dispatch(updateUnSaveForm(undefined));
  };
  const { RangePicker } = DatePicker;
  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Requied value!!" }],
  };
  return (
    <div className="overflow-x-auto xl:px-50 2xl:px-96">
      <button onClick={() => navigate("/trip/addTrip/11")}>Test</button>
      <blockquote>{id ? " Edit item id:" + id : "Create new Tip"}</blockquote>
      {isAlert ? (
        <blockquote className="bg-red-100 ">
          You have a unsave work{" "}
          <span className="func_a text-emerald-600" onClick={fillUnsaveData}>
            Restore
          </span>{" "}
          or
          <span className="func_a text-red-500" onClick={deleteUnsaveData}>
            {" "}
            Leave it
          </span>
        </blockquote>
      ) : (
        ""
      )}
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
        onFinish={(val) => onFinish(val)}
        onValuesChange={onValuesChange}
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
