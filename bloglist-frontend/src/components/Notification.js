import { useSelector } from "react-redux";

const Notification = () => {
  const msg = useSelector((state) => state.msg.message);
  if (!msg) {
    return;
  }
  return (
    <div className={msg.type === "error" ? "error" : "notification"}>
      {msg.message}
    </div>
  );
};
export default Notification;
