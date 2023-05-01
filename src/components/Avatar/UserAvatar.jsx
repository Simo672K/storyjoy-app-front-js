import React from "react";

function UserAvatar({img}) {
  return (
    <span className="w-20 h-20 block rounded-full overflow-hidden">
      <img className="w-full" src={img} alt="" />
    </span>
  );
}

export default UserAvatar;
