/* 
        # Modo de uso

        to={} hace referencia a un <Link>

        <ButtonLogin to={"a"} nouser={true} />
        <ButtonLogin to={"a"} user={true} />
        <ButtonLogin to={"a"} admin={true} />
        <ButtonLogin to={"a"} edit={true} />
        <ButtonLogin to={"a"} logout={true} />
        <ButtonLogin to={"a"} addUser={true} />
        <ButtonLogin to={"a"} superAdmin={true} />
        <ButtonLogin to={"a"} superForm={true} />



 */

import {
  AiOutlineEdit,
  AiOutlineForm,
  AiOutlineLogout,
  AiOutlineTool,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import ButtonSession from "./ButtonSession";

export default function ButtonLogin({
  User = false,
  nouser = false,
  addUser = false,
  logout = false,
  Admin = false,
  SuperAdmin = false,
  SuperForm = false,
  edit = false,
  onClick,
  to,
}) {
  const icon = "fill-customGreenLight size-6";

  return (
    <>
      {nouser && (
        <ButtonSession to={to} addStyle={"bg-gray-400"}>
          <AiOutlineUser className={icon} />
        </ButtonSession>
      )}
      {User && (
        <ButtonSession to={to} addStyle={"bg-customGreen"}>
          <AiOutlineUser className={icon} />
        </ButtonSession>
      )}
      {addUser && (
        <ButtonSession to={to} addStyle={"bg-customGrayDark"}>
          <AiOutlineUserAdd className={icon} />
        </ButtonSession>
      )}
      {logout && (
        <ButtonSession to={to} addStyle={"bg-customGrayDark"} onClick={onClick}>
          <AiOutlineLogout className={icon} />
        </ButtonSession>
      )}
      {Admin && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineUser className={icon} />
        </ButtonSession>
      )}
      {SuperAdmin && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineUser className={icon} />
        </ButtonSession>
      )}
      {edit && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineEdit className={icon} />
        </ButtonSession>
      )}
      {SuperAdmin && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineTool className={icon} />
        </ButtonSession>
      )}

      {SuperForm && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineForm className={icon} />
        </ButtonSession>
      )}
    </>
  );
}
