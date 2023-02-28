import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return <div>Detail about user: {userId}</div>;
};

export default UserDetail;
