import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["stories"], () =>
  makeRequest.get("/stories").then((res) => {
    console.log("Fetched Stories:", res.data); // Log the data
    return res.data;
  })
);


  //TODO Add story using react-query mutations and use upload function.

  return (
    <div className="stories">
      <div className="story">
        
        <span>Portfolio</span>
        
      </div>
    
    </div>
  );
};

export default Stories;
