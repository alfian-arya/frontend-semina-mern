import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SBreadCrumb from "../../components/BreadCrumb";
import SAlert from "../../components/Alert";
import Form from "./form";
import { useNavigate } from "react-router-dom";
// import { getData, putData } from '../../utils/fetchData';
// import { useDispatch } from 'react-redux';
// import { setNotif } from '../../redux/notif/actions';

function CategoryEdit() {
  const navigate = useNavigate();
  //const { categoryId } = useParams();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const fetchOneCategories = async () => {
    //const res = await getData(`api/v1/categories/${categoryId}`);
    //setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // const res = await putData(`api/v1/categories/${categoryId}`, form);

      navigate("/categories");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err.response.data.msg,
      });
    }
  };
  return (
    <Container>
      <SBreadCrumb
        textSecond={"Categories"}
        urlSecond={"/categories"}
        textThird="Edit"
      />
      {alert.status && <SAlert type={alert.type} message={alert.message} />}
      <Form
        edit
        form={form}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default CategoryEdit;
