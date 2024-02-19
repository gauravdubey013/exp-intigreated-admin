import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../loading";
import { Link } from "react-router-dom";

const AllBooks = () => {
  const [bookdata, setBookdata] = useState([]);
  const [bknameInput, setBknameInput] = useState("");
  const [selectedOption, setSelectedOption] = useState("All");

  const options = [
    "All",
    "Adventure",
    "Children's literature",
    "Fiction",
    "Historical Fiction",
    "Horror",
    "Humor",
    "Mythology",
    "Nonfiction",
    "Poetry",
    "Paranormal",
    "Romance",
    "Self Help",
    "Thriller",
  ];

  const fetchbooks = async () => {
    const bookColl = "books";

    try {
      const res = await axios.post(
        "http://localhost:3001/get-dbcollections",
        bookColl
      );
      const databook = res.data.data;

      let filteredBooks = databook;

      if (selectedOption !== "All") {
        filteredBooks = databook.filter(
          (book) => book.bkgenre === selectedOption
        );
      }
      if (bknameInput !== "") {
        filteredBooks = filteredBooks.filter(
          (book) => book.bkname === bknameInput
        );
      }
      setBookdata(filteredBooks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchbooks();
  }, [bknameInput, selectedOption]);

  return (
    <div className="container">
      <div className=" flex flex-row	">
        <form className="input-form">
          <div className="flex flex-row">
            <div className="input-flexbk">
              <input
                type="text"
                name="audioBkName"
                value={bknameInput}
                placeholder="Enter book name"
                onChange={(e) => setBknameInput(e.target.value)}
              ></input>
            </div>
            <div className="input-flexbk">
              <select
                id="dropdown"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
      {bookdata.length === 0 && <Loading />}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 ">
        {bookdata.map((i) => (
          <div key={i?.bkname} className="div space-y-3">
            <BooksCard i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;

export const BooksCard = (props) => {
  const { i } = props;
  return (
    <>
      <div className=" div  w-auto h-auto flex flex-col gap-5 shadow-xl text-black scale-90 hover:scale-95 hover:bg-orange-500 ease-in-out duration-300 rounded-xl active:scale-90 overflow-hidden">
        <Link
          to={`/admin/books/book-detail/${i?.bkname ?? "name"}`}
          target="_parent"
        >
          <img
            src={i?.bkimage ?? "img"}
            alt=""
            className="h-[220px] w-[150px] object-cover rounded-md"
          />
        </Link>
        <div>
          <h3 className="font-semibold dark:text-white">
            {i.bkname ?? "name"}
          </h3>
          <p className="text-sm text-stone-700 ">{i.authname}</p>
        </div>
      </div>
    </>
  );
};
