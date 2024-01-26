import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../loading";
import { Document, Page } from "react-pdf";
// import "../cardCss/booksCard.css"

const Books = () => {
  const [bookdata, setBookdata] = useState();
  // const [bk, setBk] = useState();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const books = "books";
  const fetchbooks = async () => {
    const bookColl = books

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
  console.log(bookdata);

  return (
    <div className="main-book">
      {
        bookdata == undefined &&
        <Loading />
      }
      {
        bookdata != undefined &&
        bookdata.map((i) => (
          <div key={i._id}>
            {/* <div className="">
              {i?.bkname ?? "title"}
            </div>
            <div className="">
              <img src={i?.bkimage ?? "img"} alt="img" />
            </div>
            <div className="pdf-div">
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <Document file={"/users/bookCon/Krishna _EJ QB-1 (E-next.in).pdf"} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => {
                    return (
                      <Page
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    );
                  })}
              </Document>
            </div> */}
            <BooksCard i={i} />
          </div>
        ))
      }
    </div>
  );
};

export default Books;



export const BooksCard = (props) => {
  const { i } = props;
  return (
    <div className="containerBk">
      <div className="cardBk">
        <h2>{i.bkname}</h2>
        <h2>{i.authname}</h2>
        {/* <div className="titleBk title--legendary">{i?.bkgenre}</div> */}
        <div className="descBk">{i?.bkgenre}</div>
        <div className="descBk">{i?.desp}</div>
        <div className="imgBk">
          <img className="img" src={i?.bkimage ?? "img"} alt="img" />
        </div>
      </div>
    </div>
  )
}



