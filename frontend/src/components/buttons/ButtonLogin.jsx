
/* 
        # Modo de uso

        to={} hace referencia a un <Link>

        <ButtonLogin to={"a"} nouser={true} />
        <ButtonLogin to={"a"} user={true} />
        <ButtonLogin to={"a"} admin={true} />
        <ButtonLogin to={"a"} edit={true} />
        <ButtonLogin to={"a"} logout={true} />
        <ButtonLogin to={"a"} addUser={true} />

 */

import { AiOutlineEdit, AiOutlineLogout, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import ButtonSession from "./ButtonSession";

export default function ButtonLogin({
  user = false,
  nouser = false,
  addUser = false,
  logout = false,
  admin = false,
  edit = false,
  to,
}) {
  const icon = "fill-customGreenLight size-6"
  return (

    <>
      {nouser && (
        <ButtonSession to={to} addStyle={"bg-gray-400"}>
          <AiOutlineUser className={icon}/>
        </ButtonSession>
      )}

      {user && (
        <ButtonSession to={to} addStyle={"bg-customGreen"}>
          <AiOutlineUser className={icon} />
        </ButtonSession>
      )}

      {addUser && (
        <ButtonSession to={to} addStyle={"bg-customGrayDark"}>
          <AiOutlineUserAdd  className={icon}/>
        </ButtonSession>
      )}

      {logout && (
        <ButtonSession to={to} addStyle={"bg-customGrayDark"}>
          <AiOutlineLogout   className={icon} />
        </ButtonSession>
      )}
      {admin && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineUser   className={icon}/>
        </ButtonSession>
      )}

      {edit && (
        <ButtonSession to={to} addStyle={"bg-customBlue"}>
          <AiOutlineEdit   className={icon}/>
        </ButtonSession>
      )}
    </>
  );
}
