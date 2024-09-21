import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="loader main_loading" id="loading">
      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const loadingListener = () => {
  const loading = document.querySelector("#loading") as HTMLElement;
  if (loading) {
    // Now we know loading is not null
    if (document.readyState !== "complete") {
      document.addEventListener("readystatechange", () => {
        document.body.style.overflow = "hidden";
        if (document.readyState === "complete") {
          document.body.style.overflow = "visible";
          loading.style.transition = "all 500ms ease-out";
          loading.classList.add("main_loading-hidden");
        }
      });
    } else {
      loading.classList.add("main_loading-hidden");
    }
  } else {
    console.error("Element with id 'loading' not found");
  }
};

export { Loader as default, loadingListener };
