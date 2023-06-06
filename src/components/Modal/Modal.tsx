import React, { useCallback, useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import { BiCommentDetail } from "react-icons/bi";

function Modal({ photo, isOpen, modalOpen }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const escFunction = useCallback(
    (event) => {
      if (event.key === "Escape" && isOpen) {
        modalOpen();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  function sendMessage(e) {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessage("");
  }
  return isOpen ? (
    <>
      <div
        className="top-0 left-0 w-[100%] h-[100%] fixed bg-black bg-opacity-75"
        onClick={() => modalOpen()}
      ></div>
      <div
        className={`fixed top-[50%] left-[50%] translate-y-[-50%] grid grid-cols-12 ${styles.slideUpAnimation}`}
      >
        <div className="absolute right-[-20px] top-[-20px]">
          <i onClick={() => modalOpen()} className="text-white bi bi-x-lg"></i>
        </div>
        <img
          src={photo.url}
          className={`object-cover w-full col-span-7 xl:col-span-7 2xl:col-span-6 `}
          alt="nature"
        />
        <div
          className={`2xl:col-span-6 col-span-5 flex flex-col justify-between ${styles.commentSection}`}
        >
          <div>
            <h2 className="mb-5 ps-4 bg-slate-400 h-10 flex items-center text-white">
              Comments:{" "}
            </h2>
            <ul>
              {messages.map((message, i) => (
                <li
                  className="flex justify-between p-2 bg-slate-200 mb-5 mx-3 rounded-xl"
                  key={i}
                >
                  <p className="ps-3">{message}</p>
                  <p className="text-slate-400">2023/05/28 20:47</p>
                </li>
              ))}
            </ul>
          </div>
          <form
            className="flex gap-2 ps-3 pb-4"
            onSubmit={(e) => sendMessage(e)}
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              className="w-[80%] bg-gray-200 outline-none p-2 rounded-md"
              placeholder="type comment"
            />
            <button className="mx-auto bg-slate-200 p-2 rounded-md hover:bg-slate-100">
              <BiCommentDetail />
            </button>
          </form>
        </div>
      </div>
    </>
  ) : null;
}

export default Modal;