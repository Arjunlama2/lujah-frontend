import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

function About() {
  const [postData, setPostData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setPostData(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    async function fetch() {
      let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPostData(data.data);
    }

    fetch();
  }, []);

  console.log(postData);
  return (
    <div>
   
      {postData.length > 0 &&
        postData.map((el) => {
          return (
            <div key={el.id}>
              <p className="text-red-500">{el.title}</p>
              <p>{el.body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default About;
