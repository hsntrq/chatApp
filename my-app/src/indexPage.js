import React from "react";

const indexPage = (props) => {
    React.useEffect(()=>{
        const token = localStorage.getItem("CC_Token");
        if (!token){
            props.histor.push("/login");
        }
        else {
            props.histor.push("/chat");
        }
    }, [0       ])
  return <div></div>;
};

export default indexPage;
