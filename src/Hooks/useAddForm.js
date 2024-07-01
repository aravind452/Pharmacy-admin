import { useState, useEffect } from "react";

const useAddForm = (Validate) => {
  const [loader, setLoader] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const [productValues, setProductValues] = useState({
    product_id: "",
    product_name: "",
    product_price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductValues((preValues) => {
      return {
        ...preValues,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    function createProduct() {
      setLoader(true);

     // database post and check 
      console.log(productValues);
    }

    if (Object.keys(errors).length === 0 && isSubmit) {
      createProduct();
    }
  }, [errors, isSubmit, productValues]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validate(productValues));
    setIsSubmit(true);
  };

  return {
    handleChange,
    handleSubmit,
    productValues,
    errors,
    loader,
  };
};

export default useAddForm;
