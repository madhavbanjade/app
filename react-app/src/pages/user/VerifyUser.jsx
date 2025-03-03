import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { baseurl } from "../../urls";

const VerifyUser = () => {
  let [query] = useSearchParams();
  let token = query.get("token");
  let Navigate = useNavigate();

  let verifyEmail = async () => {
    try {
      let result = await fetch(`${baseurl}/api/verify-email`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.status === 200) {
        Navigate("/login");
      }
    } catch (error) {}
  };

  useEffect(() => {
    verifyEmail();
  });
  return <div>VerifyUser</div>;
};

export default VerifyUser;
