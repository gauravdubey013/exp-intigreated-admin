import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const BookDetail = () => {
  const { bkname } = useParams()
  // console.log(decodeURIComponent(bkname));

  const [bookDetail, setBookDetail] = useState();


  const fetchbooks = async () => {
    const bookColl = "books";
    try {
      axios
        .post("http://localhost:3001/get-dbcollections", bookColl)
        .then((res) => {
          const bkDetail = res.data.data;
          // console.log(res.data.message, bkDetail);
          setBookDetail(bkDetail.filter(book => book.bkname === decodeURIComponent(bkname)))
        });
    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    if (!bookDetail) {
      fetchbooks();
    }
  });
  // console.log(bookDetail && bookDetail[0]);

  return (
    <>
      <div className="main-book h-auto">
        {!bookDetail ? <div className="w-full h-screen text-center text-3xl p-4">Loading...</div> :
          <div className="p-16">
            <div className="p-8 bg-white shadow-lg mt-24 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="text-center">
                  <div className=''>
                    <p className="font-bold text-gray-700 text-xl">0</p>
                    <p className="text-gray-400">Comments</p>
                    {/* <Link to={"#"} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 active:-translate-y-2 text-center">View Author Profile</Link> */}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-44 h-44 bg-indigo-100 mx-auto shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center">
                    <img
                      src={bookDetail[0]?.bkimage ?? "img"}
                      alt=""
                      className="w-auto rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                  <Link to={"#"} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 active:-translate-y-2 text-center">View Author Profile</Link>
                  <Link to={bookDetail[0]?.bkcon ?? "book-content"} target='_blank' className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 active:-translate-y-2 text-center">Read book</Link>
                </div>
              </div>
              <div className="mt-20 text-center border-b pb-12 capitalize">
                <h1 className="text-4xl font-semibold text-gray-700">{bookDetail[0]?.bkname ?? "book-name"}</h1>
                <p className="mt-4 text-gray-500">{bookDetail[0]?.bkgenre ?? "book-genre"}</p>
                <p className="mt-2 text-gray-500">Author : {bookDetail[0]?.authname ?? "book-author"}</p>
              </div>
              <div className="mt-12 flex flex-col justify-center capitalize">
                <p className="text-black text-center font-light lg:px-16">{bookDetail[0]?.desp ?? "book-description"}</p>
                {/* <button className="text-indigo-500 py-2 px-4  font-medium mt-4">Show more</button> */}
              </div>
            </div>
          </div>}
      </div >
    </>
  )
}

export default BookDetail