let dmpush_title = "스타벅스 아메리카노 받아가세요!"; //29자. 600, 29자
let dmpush_content = '푸시 알림 받기를 허용하고 <br/> 스타벅스 커피를 공짜로 받아가세요!'; //99자, 400, 16px
let pid = "e7f106a5-6dcb-45ff-8327-e5521aa06434";
const openPopup = () => {
  const Div = document.createElement("div");
  Div.id = "dmpush";
  document.body.appendChild(Div); 
  // body > div#dmpush
  Div.innerHTML = `
  <article
    style="
    width:400px;
    "
  >
  <div style="
    position:fixed;
    z-index: 10000;
    left:50%;
    right:50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    max-width: 100%;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.16);"
  >
    <div style="padding: 30px 20px">
      <h1 style="
      padding: 0;
      margin: 0;
      font-size: 18px;
      font-weight: 900;
      text-align: center;
      ">
      ${dmpush_title}
      </h1>
      <p style="
      padding: 10px 0;
      margin: 0;
      text-align:center;
      font-size: 14px; 
      font-weight: 400;
      // white-space: pre-wrap;
      word-wrap:normal;
      word-break: break-all;
      line-height: 1.2;
      width: 100%;"
      >
      ${dmpush_content}
      </p>
      <div style="
        max-width: 260px;
        border-radius: 8px;
        margin: 10px auto 0;
      ">
        <img src="/assets/images/img-event01.png"  style="width:100%"/>
      </div>
    </div>
    <div 
    style="display: flex;
    justify-content: center;
    align-items:center;"
    >
      <button
        id="regretBtn" 
        style= "
        cursor: pointer;
        display: block;
        width: calc(100% / 2);
        border: none;
        padding: 12px 0;
        background: #9747FF;
        border-radius: 0 0 0 4px;
        border-right: 2px solid #fff;
        color: #fff;
        font-size: 14px;
        font-weight: 400;
        text-align: center;"
      >
        다음에
      </button>
      <button 
        id="agreeBtn"
        style="
        cursor: pointer;
        display: block;
        width: calc(100% / 2);
        border: none;
        padding: 12px 0;
        border-radius: 0 0 4px 0;
        background: #9747FF;
        color: #fff;
        font-size: 14px;
        font-weight: 400; 
        cusor: pointer;
        text-align: center;"   
      >
        이벤트 참여하기
      </button>
    </div>
  </div>
  </article>
  `;

  const agreeBtn = document.querySelector("#agreeBtn");
  const regretBtn = document.querySelector("#regretBtn");
  let popupWidth = 600;
  let popupHeight = 582;
  let popupX = window.screen.width / 2 - popupWidth / 2;
  let popupY = window.screen.height / 2 - popupHeight/ 2;
  
  agreeBtn.addEventListener("click", () => {
    window.open(
      `http://localhost:5500/popup.html?push_id=${pid}`,
      "demo",
      "status=no, height=" +
        popupHeight +
        ", width=" +
        popupWidth +
        ", left=" +
        popupX +
        ", top=" +
        popupY +
        ",menubar=no, toolbar=no, resizable=no"
    );

  Div.remove();
});

function setCookie(name,value,expireDays) {
  let today = new Date();
  today.setDate(today.getDate() + expireDays);
  today.setHours(today.getHours() - 9);
  today.toUTCString();
  document.cookie = name + "=" + value + "; expires=" + today + ";"
}

regretBtn.addEventListener("click", () => {
    setCookie("delayPopup", "close", 7);
    Div.remove();
  });
};

setTimeout(() => {
  if(document.cookie.indexOf("delayPopup=close") < 0) {
      openPopup();
  }
}, 3000);