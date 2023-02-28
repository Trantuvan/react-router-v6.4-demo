import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      Order confirmed!
      <button type="button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
};

export default OrderSummary;
