import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../loading";
import { Document, Page } from "react-pdf";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "../cardCss/booksCard.css"

const Books = () => {
  const [bookdata, setBookdata] = useState();
  const [bookNo, setBookNo] = useState("");

  // const [bk, setBk] = useState();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const fetchbooks = async () => {
    const bookColl = "books"

    try {
      axios
        .post("http://localhost:3001/get-dbcollections", bookColl)
        .then((res) => {
          const databook = res.data.data;
          // alert(res.data.message);
          setBookdata(databook);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!bookdata) {
      fetchbooks();
    }
  });
  // console.log(bookdata && bookdata.length);

  return (
    <div className="main-book">
      {
        bookdata == undefined &&
        <Loading />
      }
      < div className="w-auto h-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 place-items-center" >
        {
          bookdata != undefined &&
          bookdata.map((i) => (
            <div key={i?.bkname} className="">
              <BooksCard i={i} />
            </div>
          ))
        }
      </div>
      <div className="w-full h-[10vh] text-4xl text-black">{bookdata && bookdata.length}</div>
    </div >
  );
};

export default Books;



export const BooksCard = (props) => {
  const { i } = props;
  return (
    <>
      <div className="w-auto h-[30rem] flex flex-col gap-1 shadow-xl text-black scale-90 hover:scale-95 hover:bg-primary ease-in-out duration-300 rounded-xl active:scale-90 overflow-hidden">
        <div className="w-full h-[85%] bg-[#F8F8F8] overflow-hidden">
          <Link to={`/admin/books/book-detail/${i?.bkname ?? "name"}`} target="_parent" className="h-full flex items-center">
            <img
              src={i?.bkimage ?? "img"}
              alt=""
              className="w-[18rem]"
            />
          </Link>
        </div>
        <h1 className="w-full h-[15%] flex items-center justify-center text-3xl font-bold capitalize">{i.bkname ?? "name"}</h1>
      </div>
    </>
  )
}



