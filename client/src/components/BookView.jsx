import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const chaptersData = [
  {
    _id: 1,
    title: "Chapter 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quod minima mollitia similique nam dolorum perspiciatis eum, dolor rerum in libero dolorem eveniet corporis repudiandae consequuntur! Deleniti voluptate nihil praesentium, aperiam saepe veniam dicta atque, provident esse nobis in! Accusantium nisi velit cumque in, temporibus quo ipsam animi, eligendi minima itaque ea repellat ipsum officia nemo non amet dolore consequuntur harum enim, perferendis sapiente inventore. Dignissimos repellat voluptas neque ipsam sit sint exercitationem deserunt, ad doloremque, totam perferendis eius voluptatibus eveniet molestiae sapiente soluta minus, illo eum. Vel adipisci iusto dignissimos, doloremque rem tenetur ut quam expedita! Sint autem doloremque culpa consequatur nobis. Laboriosam maiores iusto ducimus eaque amet accusantium voluptates impedit minus, earum, quas quo perspiciatis facilis ex ad aperiam itaque doloremque, praesentium tempora? Consequatur, reiciendis ducimus repellat enim non quia saepe molestias. Quo suscipit, saepe, dicta excepturi numquam nemo autem ducimus ullam, expedita dolorem temporibus corrupti iusto natus dolores aperiam dolorum iure inventore. Eum adipisci et qui eius autem id quibusdam. Numquam harum eligendi id sequi, quidem rem quasi blanditiis ratione doloribus molestias enim dolores laboriosam soluta unde fugiat perferendis non similique labore praesentium officia voluptate? Maiores in error distinctio hic dicta ut odio deleniti ipsum obcaecati nulla? Repellat recusandae veniam officiis sint! Minima, tempore praesentium perferendis deleniti quisquam officia aliquid corporis quibusdam numquam sint optio dicta harum quod repellat in sit illo aliquam mollitia. Dolores quo similique asperiores aspernatur debitis provident, alias aut nisi corporis laudantium, impedit cum quod recusandae ea ex molestiae voluptas veritatis hic atque. Iure eos quisquam labore odio mollitia, quos doloremque beatae earum, blanditiis tempore repellendus omnis suscipit ut explicabo, esse aperiam voluptatem. Accusamus veritatis sunt voluptate delectus labore quidem quaerat excepturi esse, at eos. Id totam hic explicabo aliquid, consequatur iure, nemo ad deserunt harum eum odit omnis quas, eius cupiditate laborum nulla sapiente fuga dicta alias ea distinctio voluptas vero delectus. Aperiam laudantium culpa quaerat suscipit quod perspiciatis dolorem, tenetur pariatur alias, necessitatibus consequatur facere veritatis fuga voluptates. Dolores, exercitationem nisi vitae amet dolorum nostrum pariatur asperiores, error reprehenderit enim sequi natus non quas dicta illum dolorem quam eos harum aperiam facere dolor eaque nesciunt! Omnis optio alias dolorem aut illum quaerat excepturi vel fuga voluptates ipsa repellendus perspiciatis aperiam magni culpa accusamus molestiae consequatur odio eum, distinctio corporis earum. Recusandae velit consequatur assumenda delectus unde ipsum quam minus deserunt! Dolorem expedita qui sint optio aliquid aliquam adipisci rerum dolores, sequi ullam, perferendis sed quidem nam eum. Totam magnam aperiam obcaecati nemo amet eos porro placeat, atque eaque repudiandae temporibus error! Sequi, accusamus mollitia. Quam dolorum voluptatem accusantium provident voluptate unde reprehenderit veritatis recusandae, consectetur, odio in! Optio libero voluptates minus culpa nulla inventore aspernatur doloremque beatae. Facere, doloribus beatae sint cupiditate et eos maiores a voluptates debitis at quibusdam cumque fugiat quaerat quam ex expedita explicabo porro libero consectetur quasi consequatur sit magnam repudiandae id? Minima, dignissimos iusto quisquam laudantium consequuntur maiores quidem assumenda vitae ad pariatur, ut natus, sit nihil dolores suscipit. Illo beatae laudantium eos voluptatum architecto aspernatur perferendis maiores sed. Repellendus impedit accusamus soluta aperiam! Ad aperiam eligendi obcaecati delectus repellat magni fugiat quasi dolor ipsa. Odit error blanditiis impedit maxime voluptatibus unde cum, natus pariatur, ipsam, possimus officia voluptatem? Sit ducimus ad labore, explicabo nesciunt quas unde doloremque laudantium tempore! Inventore quasi ullam autem dolor quia ducimus magnam distinctio nobis impedit. Quaerat aspernatur eaque eos quas ipsa, rem veritatis, facilis illum dolores dolor labore laudantium minus quisquam nulla aut adipisci esse delectus? Cum animi vitae quisquam eaque? Quam blanditiis perspiciatis enim quasi, non minus repudiandae doloribus officiis maiores? Et placeat ut autem incidunt harum explicabo atque quo similique quae quam minus eligendi alias animi enim, reprehenderit quas porro laboriosam maxime consequatur! Ipsa corrupti nobis nisi nam consequuntur repudiandae. Qui dicta illum quas totam aspernatur alias, repellendus blanditiis? Quod hic, cumque expedita facilis praesentium repudiandae voluptates et tenetur ducimus quos distinctio aut repellendus fugiat vel blanditiis, sequi incidunt. Rem fuga nam quis vero officiis totam dolorem ratione exercitationem accusantium. Optio, corporis perferendis. Esse culpa assumenda dolor cupiditate vitae aliquam ipsa odit, repellat deleniti. Quis assumenda similique, aperiam eum vel velit cum voluptate sit veniam, quae neque ut ullam ipsa repudiandae excepturi, minus perspiciatis quia sed! Adipisci perferendis esse aliquid reprehenderit amet dolorem sed non. Hic adipisci soluta, alias cumque quibusdam excepturi a, minima neque inventore nam voluptates at? Delectus nesciunt adipisci, officiis cum beatae aperiam voluptas aut, saepe explicabo minima reprehenderit officia ad, nisi vero repudiandae perferendis inventore ipsum iste ullam minus obcaecati doloremque odit dolore? Inventore repellendus voluptatum harum aliquam iusto voluptates voluptate accusamus debitis dolores ut esse nihil reprehenderit velit minus, ex omnis quos reiciendis voluptatem ratione dolorum nisi similique iste repellat. Nobis illo magnam voluptatum nemo enim impedit consequatur perspiciatis sapiente nesciunt odit necessitatibus dolor fugiat qui, laboriosam officia exercitationem doloribus, veritatis possimus officiis. Quo minima impedit a, quis velit, corrupti doloribus hic at ex nisi explicabo nostrum. Ab iure illo, natus hic qui unde ratione earum eligendi, laudantium aut praesentium, quaerat doloremque. Assumenda eaque beatae dolor incidunt non necessitatibus vel ullam maiores dolorum porro provident odio doloribus, alias dicta quidem quibusdam veritatis quam? Reprehenderit ad optio, sapiente doloremque sequi numquam quod fuga tempore laboriosam quas odio at minus voluptatem placeat perspiciatis inventore, ipsa debitis, autem quos dolor libero molestias dolores minima eos. Nemo dolores dignissimos inventore voluptate repudiandae ad. Alias nemo nobis labore necessitatibus at error incidunt non cum laborum, doloremque, consequatur atque quibusdam assumenda, reiciendis ratione? Magnam animi sint hic repellendus minima autem explicabo aperiam assumenda velit molestiae dolor nihil, aliquam natus reprehenderit voluptas expedita vel suscipit iure. Impedit eveniet repellat quod officia repudiandae quidem id fugit quam iure libero aperiam cumque, porro veritatis quaerat adipisci debitis. Quas amet corporis est, distinctio illum dolor suscipit dolorum magni vel! Provident magni adipisci numquam dicta eos nihil recusandae temporibus, molestias illum quae amet libero, nisi ad deleniti, dignissimos vitae laudantium inventore accusantium consectetur. Aut quasi perspiciatis ut modi impedit harum quo, saepe assumenda voluptates quam dicta earum ea dolore expedita cum amet porro quaerat?}",
  },
  {
    _id: 2,
    title: "Chapter 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quisquam saepe nam dolores eligendi, repellendus beatae similique consectetur atque magnam exercitationem doloribus officia velit, impedit suscipit quas iure perferendis dicta sed odit ex quasi sunt accusamus rerum? Ex, vitae? Ipsa eius, dicta officia natus possimus nisi nulla laborum qui ipsum explicabo quisquam animi commodi ab omnis ullam placeat inventore id rerum debitis nesciunt perspiciatis voluptates, aliquam sint! Error illo voluptatum perferendis, repudiandae itaque autem assumenda repellat voluptatem labore excepturi. Enim culpa eaque hic, nostrum consequuntur odit nulla sed suscipit quasi! Architecto, excepturi cum? Quibusdam porro ipsum quae libero, cupiditate doloribus?",
  },
  {
    _id: 3,
    title: "Chapter 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, quisquam saepe nam dolores eligendi, repellendus beatae similique consectetur atque magnam exercitationem doloribus officia velit, impedit suscipit quas iure perferendis dicta sed odit ex quasi sunt accusamus rerum? Ex, vitae? Ipsa eius, dicta officia natus possimus nisi nulla laborum qui ipsum explicabo quisquam animi commodi ab omnis ullam placeat inventore id rerum debitis nesciunt perspiciatis voluptates, aliquam sint! Error illo voluptatum perferendis, repudiandae itaque autem assumenda repellat voluptatem labore excepturi. Enim culpa eaque hic, nostrum consequuntur odit nulla sed suscipit quasi! Architecto, excepturi cum? Quibusdam porro ipsum quae libero, cupiditate doloribus?",
  },
];

const BookView = (props) => {
  const { chapters } = props;
  // console.log(chapters[0]);
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);
  const [editOpen, setEditOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("bg-white");
  const [textColor, setTextColor] = useState("text-black");
  const [textSize, setTextSize] = useState("text-base");
  const [fontStyle, setFontStyle] = useState("font-sans");
  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
  };

  const changeBackgroundColor = (color, text) => {
    setBackgroundColor(color);
    setTextColor(text);
  };
  const changeTextSize = (size) => {
    setTextSize(size);
  };
  const handleFontChange = (font) => {
    setFontStyle(font);
  };

  return (
    <div className="app">
      <div className="aside">
        <div className=" text-2xl justify-center	content-center text-center bold h-15 	">
          <h1>Chapters</h1>
        </div>
        <div className="gap-0.5 text-center  ">
          {/*  grid  hover:bg-zinc-700  */}
          <ul>
            {chapters.map((i) => (
              <li key={i._id} onClick={() => handleChapterClick(i)}>
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`flex flex-col w-full text-black  ${backgroundColor} ${textColor} ${textSize} ${fontStyle} `}
      >
        <div className=" relative justify-center text-3xl text-center bg-zinc-900 text-white h-16  	">
          <h2>{selectedChapter.title}</h2>

          <div className="absolute cursor-pointer w-auto h-auto text-2xl right-2 top-5 active:scale-90 ease-in-out duration-200">
            <PiDotsThreeOutlineVerticalFill
              onClick={() => setEditOpen(!editOpen)}
              className="active:scale-90 cursor-pointer ease-in-out duration-200"
            />
          </div>
          <div
            className={`${editOpen ? "opacity-100" : "opacity-0 hidden"
              } absolute mt-0 w-full h-100 bg-zinc-700 flex flex-col justify-center z-50`}
          >
            {/* <form className=" relative w-[50%] h-[40rem] shadow-2xl rounded-xl flex flex-col gap-2 items-center justify-center border"> */}
            <div
              onClick={() => setEditOpen(false)}
              className="absolute cursor-pointer w-auto h-auto text-2xl right-2 top-2 active:scale-90 ease-in-out duration-200"
            >
              X
            </div>
            <div className="text-lg text-center text-white mb-2 mt-5 flex flex-col gap-2">
              Page color
              <div className="flex gap-20">
                <button
                  className="bg-black px-8 grid text-black text-center"
                  onClick={() =>
                    changeBackgroundColor("bg-black", "text-white")
                  }
                >
                  BLACK
                </button>
                <button
                  className="bg-white px-8 grid text-white text-center"
                  onClick={() =>
                    changeBackgroundColor("bg-white", "text-black")
                  }
                >
                  WHITE
                </button>
                <button
                  className="bg-amber-200 px-8  grid text-amber-200 text-center"
                  onClick={() =>
                    changeBackgroundColor("bg-amber-200", "text-black")
                  }
                >
                  BLACK
                </button>
              </div>
            </div>
            <div className="text-lg text-center text-white mb-2 mt-5 flex flex-col gap-2 ">
              Font Size
              <div className="flex gap-20">
                <button
                  className="border-white border-2 px-8 grid text-base bold text-white text-center"
                  onClick={() => changeTextSize("text-base")}
                >
                  Aa
                </button>
                <button
                  className="border-white border-2 px-8 grid text-xl bold text-white text-center"
                  onClick={() => changeTextSize("text-xl")}
                >
                  Aa
                </button>
                <button
                  className="border-white border-2 px-8 grid text-2xl bold text-white text-center"
                  onClick={() => changeTextSize("text-2xl")}
                >
                  Aa
                </button>
              </div>
            </div>
            <div className="text-lg text-center text-white mb-2 mt-5 flex flex-col gap-2 ">
              Font
              <div className="flex gap-20">
                <button
                  className="border-white border-2 px-8 grid text-2xl font-sans		 bold text-white text-center"
                  onClick={() => handleFontChange("font-serif")}
                >
                  Serif
                </button>
                <button
                  className="border-white border-2 px-8 grid text-2xl font-serif	 bold text-white text-center"
                  onClick={() => handleFontChange("font-sans")}
                >
                  Sans-serif
                </button>
                <button
                  className="border-white border-2 px-8 grid text-2xl font-mono bold text-white text-center"
                  onClick={() => handleFontChange("font-mono")}
                >
                  Monospace
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center text-justify p-2">
          <p>{selectedChapter.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BookView;
