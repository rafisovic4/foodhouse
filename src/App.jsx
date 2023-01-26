import "./index.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
{/*       <section className="menu-tovar">
        <div className="container">
          <h2 className="menu-h2">Наше меню</h2>
          <div className="h2-underline"></div>
          <div className="menu-tovar-osnova">
            <div className="menu-categories">
              <div className="menu-categories-elem-acive">
                <img
                  src="./src/assets/cat-salat.svg"
                  alt="salad"
                  className="categories-image"
                />
                <p className="categories-p-active">Салаты</p>
              </div>
              <div className="menu-categories-elem">
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M128.062 16.419C128.164 17.0264 128.144 17.6477 128.005 18.2475C127.866 18.8473 127.61 19.4139 127.252 19.9148C126.894 20.4156 126.44 20.8411 125.918 21.1667C125.395 21.4924 124.814 21.7119 124.206 21.8127L89.8938 27.5315L89.1563 31.2502H114.062C115.306 31.2502 116.498 31.7441 117.377 32.6232C118.256 33.5023 118.75 34.6945 118.75 35.9377V60.9377C118.749 66.0541 116.818 70.9817 113.342 74.7359C109.866 78.4901 105.101 80.7942 100 81.1877V84.3752C100 96.5815 91.25 106.744 79.6875 108.938V128.125H95.3125C96.5557 128.125 97.748 128.619 98.6271 129.498C99.5061 130.377 100 131.57 100 132.813C100 134.056 99.5061 135.248 98.6271 136.127C97.748 137.006 96.5557 137.5 95.3125 137.5H54.6875C53.4443 137.5 52.252 137.006 51.3729 136.127C50.4939 135.248 50 134.056 50 132.813C50 131.57 50.4939 130.377 51.3729 129.498C52.252 128.619 53.4443 128.125 54.6875 128.125H70.3125V108.938C64.5981 107.846 59.4434 104.795 55.7358 100.312C52.0282 95.8288 49.9998 90.193 50 84.3752V81.1877C44.8988 80.7942 40.1341 78.4901 36.658 74.7359C33.1819 70.9817 31.2506 66.0541 31.25 60.9377V35.9377C31.25 34.6945 31.7439 33.5023 32.6229 32.6232C33.502 31.7441 34.6943 31.2502 35.9375 31.2502H79.5937L81.3438 22.519C81.5299 21.5861 81.9955 20.7318 82.6787 20.0698C83.3619 19.4078 84.2304 18.9694 85.1688 18.8127L122.669 12.5627C123.276 12.4617 123.897 12.4812 124.497 12.6203C125.097 12.7594 125.664 13.0154 126.165 13.3735C126.665 13.7316 127.091 14.1849 127.416 14.7074C127.742 15.23 127.962 15.8116 128.062 16.419ZM74.9062 54.6877L77.7188 40.6252H40.625V54.6877H74.9062ZM109.375 54.6877V40.6252H87.2812L84.4688 54.6877H109.375Z"
                    fill="#232323"
                  />
                </svg>
                <p className="categories-p">Напитки</p>
              </div>
              <div className="menu-categories-elem">
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M137.5 81.25C137.5 88.1875 131.938 93.75 125 93.75H25C21.6848 93.75 18.5054 92.433 16.1612 90.0888C13.817 87.7446 12.5 84.5652 12.5 81.25C12.5 77.9348 13.817 74.7554 16.1612 72.4112C18.5054 70.067 21.6848 68.75 25 68.75H81.25L96.875 81.25L112.5 68.75H125C128.315 68.75 131.495 70.067 133.839 72.4112C136.183 74.7554 137.5 77.9348 137.5 81.25ZM75 18.75C18.75 18.75 18.75 56.25 18.75 56.25H131.25C131.25 56.25 131.25 18.75 75 18.75ZM18.75 112.5C18.75 122.875 27.125 131.25 37.5 131.25H112.5C122.875 131.25 131.25 122.875 131.25 112.5V106.25H18.75V112.5Z"
                    fill="#232323"
                  />
                </svg>
                <p className="categories-p">Бургеры</p>
              </div>
              <div className="menu-categories-elem">
                <svg
                  className="potatoFree"
                  width="145"
                  height="145"
                  viewBox="0 0 145 145"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.0324 55.9043C41.5742 42.4238 39.082 28.5695 39.0027 14.8059C38.9914 13.0953 38.4023 9.3797 40.1242 8.41681C41.4042 7.69181 43.4886 7.49923 44.9386 7.52189C46.1281 7.53321 46.0941 8.07696 46.4566 9.05118C48.8015 15.2817 48.9941 22.1805 49.9003 28.7168C50.8746 35.6496 51.7128 42.5938 52.8117 49.5039C54.2164 58.2606 55.5531 67.1078 55.4285 75.9438C55.4171 76.918 55.4511 78.1641 54.7714 78.6965C53.4574 79.7273 51.0898 79.2856 49.5831 78.6965C47.5894 77.9035 47.2269 74.0066 46.6718 71.8543C46.0374 69.3621 45.539 67.0399 45.1878 64.491C44.9839 62.9277 44.5081 61.3984 44.3042 59.8352C44.157 58.4645 44.2929 57.275 44.0324 55.9043Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M44.7348 7.52192H44.9387C46.1281 7.53325 46.0941 8.077 46.4566 9.05122C48.8016 15.2817 48.9941 22.1805 49.9004 28.7168C50.8746 35.6497 51.7129 42.5938 52.8117 49.504C54.2164 58.2606 55.5531 67.1079 55.4285 75.9438C55.4172 76.918 55.4512 78.1641 54.7715 78.6965C54.1938 79.1497 53.4348 79.3196 52.6192 79.3196C51.5656 79.3196 50.4441 79.0364 49.5945 78.6965C47.6008 77.9036 47.2383 74.0067 46.6832 71.8543C46.0488 69.3622 45.5504 67.0399 45.1992 64.4911C44.9953 62.9278 44.5195 61.3985 44.3156 59.8352C44.157 58.4645 44.293 57.2864 44.0438 55.9157C41.5856 42.4352 39.0934 28.5809 39.0141 14.8172C39.0027 13.1067 38.4137 9.39106 40.1356 8.42817C41.3477 7.72583 43.2961 7.52192 44.7348 7.52192ZM44.7348 0.702393C42.5371 0.702393 39.3766 1.00825 36.7711 2.48091C31.6621 5.34692 32.002 11.4754 32.1492 14.0922C32.1606 14.3754 32.1832 14.636 32.1832 14.8512C32.2738 29.4758 34.9586 44.1684 37.3262 57.1278C37.3715 57.3997 37.3941 57.7961 37.4055 58.3059C37.4281 58.9403 37.4508 59.7333 37.5527 60.6395C37.6887 61.7836 37.9152 62.7692 38.1078 63.6528C38.2438 64.2872 38.3797 64.8876 38.4363 65.3747C38.8102 68.0368 39.3086 70.5516 40.0789 73.5536C40.1695 73.9047 40.2488 74.2899 40.3281 74.6977C40.9852 77.8243 42.0727 83.0579 47.0797 85.0403C48.1332 85.4594 50.2289 86.1391 52.6192 86.1391C55.0547 86.1391 57.2637 85.4254 58.9969 84.0661C62.1801 81.5739 62.2254 77.8469 62.2481 76.2496V76.0684C62.3727 66.9153 61.1039 58.136 59.552 48.4391C58.827 43.8739 58.2039 39.1614 57.5809 34.5961C57.2863 32.3192 56.9805 30.0536 56.6633 27.7766C56.4367 26.168 56.2555 24.5481 56.0856 22.9168C55.4965 17.5926 54.8961 12.0985 52.857 6.66099L52.8004 6.49106C51.1578 1.51802 47.227 0.736377 45.0406 0.713721H44.7348V0.702393Z"
                    fill="#232323"
                  />
                  <path
                    d="M65.0347 55.2926C64.2304 41.6083 63.4488 27.5501 65.0234 13.8883C65.216 12.1891 65.08 8.42818 66.9039 7.68052C68.2633 7.11412 70.359 7.18209 71.7976 7.37466C72.9871 7.53326 72.8738 8.06568 73.1117 9.07388C74.6863 15.5536 74.0406 22.4184 74.1539 29.0114C74.2672 36.0122 74.2672 43.0129 74.5277 50.0024C74.8449 58.861 75.1054 67.8102 73.916 76.5555C73.7801 77.5297 73.6554 78.7645 72.9418 79.2176C71.5031 80.0786 69.2035 79.3536 67.7875 78.5833C65.907 77.5637 66.0203 73.6555 65.7257 71.4465C65.3972 68.8977 65.182 66.5301 65.148 63.9586C65.1367 62.3727 64.8422 60.8094 64.8422 59.2235C64.8535 57.8301 65.114 56.686 65.0347 55.2926Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M69.7813 7.23872C70.5063 7.23872 71.1973 7.29536 71.809 7.37466C72.9985 7.53325 72.8852 8.06567 73.1231 9.07388C74.6977 15.5536 74.052 22.4184 74.1653 29.0114C74.2786 36.0122 74.2786 43.0129 74.5391 50.0024C74.8563 58.861 75.1169 67.8102 73.9274 76.5555C73.7915 77.5297 73.6668 78.7645 72.9532 79.2176C72.4774 79.4895 71.9336 79.6141 71.3559 79.6141C70.1325 79.6141 68.7618 79.1043 67.7989 78.5833C65.9184 77.5637 66.0317 73.6555 65.7372 71.4465C65.4086 68.8977 65.1934 66.5301 65.1594 63.9586C65.1481 62.3727 64.8536 60.8094 64.8536 59.2235C64.8536 57.8415 65.1254 56.686 65.0461 55.2926C64.2418 41.6083 63.4602 27.55 65.0348 13.8883C65.2274 12.1891 65.0915 8.42817 66.9153 7.68052C67.7083 7.352 68.7618 7.23872 69.7813 7.23872ZM69.7813 0.419189C67.6969 0.419189 65.8618 0.736377 64.3098 1.37075C58.8836 3.61372 58.4758 9.74224 58.3059 12.3704C58.2946 12.6422 58.2832 12.9028 58.2493 13.118C56.5614 27.686 57.445 42.5711 58.2266 55.7004C58.2379 55.961 58.2039 56.3688 58.1586 56.8786C58.0907 57.5016 58.0227 58.2946 58.0227 59.2008C58.0227 60.3563 58.1133 61.3645 58.204 62.2594C58.2606 62.9051 58.3172 63.5168 58.3286 64.004C58.3625 66.6434 58.5551 69.2036 58.9629 72.3188C59.0082 72.6473 59.0309 73.0325 59.0649 73.4516C59.3028 76.4309 59.7672 81.993 64.525 84.5645C65.7938 85.2555 68.3653 86.4223 71.3333 86.4223C73.2024 86.4223 74.9356 85.9579 76.4422 85.0516C79.92 82.9333 80.4184 79.2629 80.6336 77.6883L80.6563 77.5071C81.8797 68.5239 81.6872 59.6313 81.3247 49.7532C81.1547 45.1313 81.0981 40.3735 81.0528 35.7743C81.0301 33.4747 80.9961 31.1864 80.9622 28.8868C80.9395 27.2895 80.9508 25.6583 80.9735 24.027C81.0415 18.6688 81.0981 13.118 79.7387 7.45396L79.6934 7.26138C78.6626 2.14106 74.8676 0.883643 72.6926 0.600439C71.7297 0.487158 70.7215 0.419189 69.7813 0.419189Z"
                    fill="#232323"
                  />
                  <path
                    d="M89.73 32.1379C86.4335 45.4485 83.1144 59.1215 82.1742 72.8512C82.0609 74.5618 81.2453 78.2321 82.8992 79.2969C84.1339 80.0899 86.1956 80.4184 87.6456 80.4864C88.8578 80.543 88.8351 79.9993 89.2656 79.059C91.9843 72.9758 92.6074 66.111 93.9101 59.6313C95.2921 52.7778 96.5609 45.8903 98.0902 39.0594C100.016 30.4047 101.896 21.6481 102.327 12.8461C102.372 11.8719 102.474 10.6258 101.84 10.0481C100.594 8.93794 98.1921 9.23248 96.6628 9.73091C94.6238 10.3879 94.0234 14.2622 93.3437 16.3805C92.5507 18.8274 91.9163 21.1157 91.4179 23.6532C91.112 25.2051 90.5456 26.6891 90.2511 28.2524C89.9906 29.6004 90.0585 30.7786 89.73 32.1379Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M99.3476 9.28901C100.288 9.28901 101.205 9.49292 101.84 10.048C102.474 10.6144 102.372 11.8605 102.327 12.846C101.908 21.648 100.016 30.416 98.0902 39.0593C96.5609 45.9015 95.2922 52.7777 93.9102 59.6312C92.6074 66.1109 91.9844 72.9644 89.2656 79.0589C88.8691 79.9539 88.8578 80.4976 87.8156 80.4976H87.6457C86.1957 80.4296 84.134 80.1011 82.8992 79.3082C81.2453 78.232 82.0496 74.573 82.1742 72.8624C83.1145 59.1328 86.4336 45.4597 89.7301 32.1492C90.0586 30.7898 90.0019 29.6117 90.2512 28.2523C90.5457 26.7003 91.1121 25.205 91.418 23.6531C91.9164 21.1269 92.5508 18.8273 93.3437 16.3804C94.0234 14.2621 94.6238 10.3992 96.6629 9.73081C97.4219 9.48159 98.4074 9.28901 99.3476 9.28901ZM99.3476 2.46948C97.3652 2.46948 95.632 2.89995 94.5445 3.26245C89.4129 4.92769 87.9516 10.3085 87.1699 13.2085C87.068 13.605 86.966 13.9789 86.8641 14.296C85.9352 17.1507 85.2555 19.7109 84.7457 22.3277C84.6551 22.8148 84.4738 23.4039 84.3039 24.0156C84.0434 24.8878 83.7602 25.8847 83.5563 26.9949C83.3863 27.9125 83.3184 28.7167 83.2504 29.3625C83.2051 29.8722 83.1711 30.2687 83.1031 30.5292C79.9539 43.2734 76.3742 57.7394 75.3887 72.398C75.3773 72.5679 75.3434 72.8171 75.298 73.1003C74.9922 75.7171 74.2672 81.823 79.1949 85.0289C81.9477 86.796 85.4707 87.2152 87.3172 87.3171C87.4984 87.3171 87.657 87.3285 87.8156 87.3285C89.866 87.3285 93.5703 86.6375 95.4168 82.0269L95.4848 81.8457C97.8637 76.5328 98.8152 71.0613 99.7215 65.7824C100.005 64.1738 100.265 62.5765 100.594 61.0132C101.047 58.7589 101.489 56.5046 101.93 54.2503C102.825 49.7417 103.732 45.0859 104.74 40.5773C106.892 30.971 108.693 22.271 109.135 13.2085L109.146 12.9933C109.214 11.4074 109.396 7.70308 106.405 5.00698C105.091 3.81753 102.837 2.46948 99.3476 2.46948Z"
                    fill="#232323"
                  />
                  <path
                    d="M106.439 60.3223C110.325 47.1703 114.357 33.6898 120.486 21.3648C121.245 19.8355 122.4 16.2558 124.36 16.1652C125.833 16.1086 127.781 16.8676 129.073 17.5473C130.126 18.1023 129.854 18.5668 129.741 19.5976C129.016 26.2246 126.082 32.4664 123.941 38.7082C121.687 45.3238 119.296 51.9055 117.155 58.5777C114.459 67.0172 111.661 75.5359 107.572 83.3523C107.119 84.2246 106.575 85.3574 105.748 85.516C104.094 85.8445 102.191 84.3832 101.115 83.1824C99.6875 81.5738 101.126 77.9375 101.602 75.7625C102.157 73.259 102.757 70.9594 103.607 68.5238C104.128 67.0285 104.389 65.4539 104.921 63.9699C105.397 62.6445 106.054 61.659 106.439 60.3223Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M124.53 16.1652C125.98 16.1652 127.827 16.9016 129.073 17.5473C130.126 18.1023 129.854 18.5668 129.741 19.5977C129.016 26.2246 126.082 32.4664 123.941 38.7082C121.687 45.3238 119.296 51.9055 117.155 58.5777C114.459 67.0172 111.661 75.5359 107.572 83.3523C107.119 84.2246 106.575 85.3574 105.748 85.516C105.589 85.55 105.419 85.5613 105.261 85.5613C103.743 85.5613 102.078 84.2586 101.115 83.1711C99.6875 81.5625 101.126 77.9262 101.602 75.7512C102.157 73.2477 102.757 70.948 103.607 68.5125C104.128 67.0172 104.389 65.4426 104.921 63.9586C105.386 62.6559 106.043 61.6703 106.428 60.3223C110.313 47.1703 114.346 33.6898 120.475 21.3648C121.234 19.8355 122.389 16.2559 124.349 16.1652H124.53ZM124.53 9.3457H124.088C118.198 9.61758 115.728 15.259 114.686 17.6719C114.573 17.9324 114.471 18.159 114.38 18.3516C107.866 31.4695 103.63 45.777 99.914 58.3852C99.8347 58.6457 99.6648 59.0082 99.4609 59.4613C99.189 60.0391 98.8492 60.7754 98.532 61.6477C98.1469 62.7125 97.8863 63.7207 97.6597 64.6043C97.5011 65.2273 97.3539 65.8164 97.1953 66.2809C96.323 68.7844 95.632 71.2652 94.9636 74.3012C94.8957 74.6184 94.7937 74.9922 94.6804 75.4C93.8535 78.4926 92.4488 83.6582 96.0285 87.691C97.2859 89.107 100.684 92.3695 105.272 92.3695C105.895 92.3695 106.496 92.3016 107.096 92.1883C111.072 91.384 112.794 88.0988 113.53 86.6828L113.621 86.5129C117.835 78.4359 120.656 70.0191 123.658 60.6395C125.051 56.3121 126.592 51.8941 128.076 47.6348C128.857 45.3918 129.639 43.1488 130.398 40.8945C130.919 39.3992 131.474 37.8926 132.041 36.3746C133.921 31.3336 135.881 26.134 136.515 20.3227L136.549 20.1527C137.331 14.9758 134.182 12.5063 132.244 11.4867C130.319 10.5125 127.453 9.3457 124.53 9.3457Z"
                    fill="#232323"
                  />
                  <path
                    d="M32.7496 48.473C39.3653 60.4921 46.0942 72.8624 50.5235 85.8785C51.0899 87.4984 52.8118 90.8402 51.4864 92.2902C50.4895 93.3777 48.5864 94.2273 47.193 94.6691C46.0489 95.0316 45.9243 94.4992 45.2786 93.6949C41.0871 88.5292 38.7196 82.0495 35.7856 76.1249C32.6703 69.8605 29.6684 63.5281 26.4512 57.3203C22.3618 49.4585 18.2723 41.4835 15.5989 33.0781C15.3157 32.1492 14.8852 30.971 15.3496 30.2574C16.2785 28.8527 18.6575 28.5242 20.2774 28.6148C22.4071 28.7281 23.993 32.3078 25.1938 34.1769C26.5871 36.3406 27.7879 38.391 28.9207 40.7019C29.6231 42.1292 30.552 43.4206 31.243 44.848C31.8434 46.0941 32.0813 47.2609 32.7496 48.473Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M19.7789 28.6035C19.9601 28.6035 20.13 28.6035 20.2886 28.6148C22.4183 28.7281 24.0042 32.3078 25.205 34.1769C26.5984 36.3406 27.7992 38.391 28.932 40.7019C29.6343 42.1292 30.5632 43.4207 31.2542 44.848C31.8433 46.0941 32.0812 47.2609 32.7496 48.4843C39.3652 60.4921 46.0941 72.8624 50.5234 85.8785C51.0898 87.4984 52.8117 90.8402 51.4863 92.2902C50.4894 93.3777 48.5863 94.2273 47.1929 94.6691C46.9437 94.7484 46.7398 94.7824 46.5699 94.7824C45.9695 94.7824 45.7769 94.3292 45.2785 93.6949C41.0871 88.5293 38.7195 82.0496 35.7855 76.1249C32.6703 69.8605 29.6683 63.5281 26.4511 57.3203C22.3617 49.4585 18.2722 41.4835 15.5988 33.0781C15.3156 32.1492 14.8851 30.971 15.3496 30.2574C16.1878 29 18.2156 28.6035 19.7789 28.6035ZM19.7789 21.7839C15.3382 21.7839 11.6566 23.5058 9.67417 26.4964C7.44253 29.8835 8.57534 33.4292 9.05112 34.9472L9.10776 35.1171C11.8718 43.7945 15.8593 51.7355 20.4019 60.4695C22.5089 64.525 24.5707 68.739 26.5644 72.8171C27.5953 74.9355 28.6375 77.0425 29.6796 79.1496C30.382 80.5656 31.039 82.0156 31.7187 83.4882C33.9617 88.382 36.2839 93.4343 39.9769 97.9769L40.0675 98.1015C41.7894 100.424 43.9757 101.591 46.5699 101.591C47.4535 101.591 48.3144 101.455 49.2433 101.16C51.0332 100.582 54.3296 99.2796 56.5273 96.8781C60.4921 92.5054 58.2039 86.7734 57.2296 84.3265L56.9578 83.6355C52.2453 69.7812 45.0632 56.7199 38.7195 45.1878C38.5835 44.9613 38.4589 44.5648 38.289 44.123C38.0738 43.5226 37.8019 42.775 37.4054 41.9367C36.8957 40.8718 36.3746 39.9996 35.9214 39.2406C35.5816 38.6742 35.2644 38.1417 35.0492 37.7C33.8937 35.3437 32.6363 33.1121 30.9257 30.4839C30.7445 30.2007 30.5519 29.8609 30.348 29.4984C28.8414 26.9156 26.0546 22.1011 20.6624 21.8066C20.3792 21.7953 20.0847 21.7839 19.7789 21.7839Z"
                    fill="#232323"
                  />
                  <path
                    d="M75.8305 58.3964C71.4125 71.3785 66.9266 84.7117 64.8309 98.3167C64.5703 100.016 63.4375 103.584 65.0008 104.808C66.1676 105.703 68.1953 106.201 69.634 106.405C70.8235 106.575 70.8574 106.02 71.3559 105.114C74.5844 99.2796 75.7965 92.5054 77.6543 86.1617C79.6254 79.4441 81.4832 72.7038 83.5789 66.0203C86.241 57.5581 88.8805 48.9941 90.0473 40.2601C90.1719 39.2859 90.3871 38.0624 89.7981 37.4281C88.6426 36.2046 86.2297 36.3066 84.6551 36.6691C82.5707 37.1562 81.6418 40.9511 80.7809 43.0128C79.784 45.3804 78.957 47.6121 78.2434 50.0816C77.8129 51.5996 77.1106 53.0269 76.6914 54.5562C76.3176 55.8816 76.2836 57.071 75.8305 58.3964Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M86.7508 36.4199C87.9176 36.4199 89.0957 36.6804 89.798 37.4167C90.3758 38.0398 90.1605 39.2746 90.0473 40.2488C88.8805 48.9828 86.241 57.5582 83.5789 66.0089C81.4832 72.6812 79.6254 79.4214 77.6543 86.1503C75.7965 92.4828 74.5957 99.2683 71.3559 105.102C70.9141 105.907 70.8348 106.416 70.0078 106.416C69.8945 106.416 69.7699 106.405 69.634 106.394C68.1953 106.201 66.1676 105.703 65.0008 104.796C63.4375 103.584 64.5703 100.005 64.8309 98.3054C66.9266 84.7117 71.4125 71.3671 75.8305 58.3851C76.2723 57.0597 76.3176 55.8816 76.6914 54.5449C77.1105 53.0156 77.8129 51.5882 78.2434 50.0703C78.957 47.5894 79.784 45.3578 80.7809 43.0015C81.6418 40.9511 82.5707 37.1449 84.6551 36.6578C85.2668 36.5218 86.0031 36.4199 86.7508 36.4199ZM86.7508 29.6003C85.5613 29.6003 84.3039 29.7476 83.1145 30.0195C77.8469 31.2542 75.9211 36.4765 74.9016 39.2859C74.7543 39.671 74.6297 40.0449 74.4938 40.3507C73.2816 43.2281 72.4207 45.641 71.6844 48.1785C71.5484 48.6542 71.3445 49.2207 71.1066 49.821C70.7781 50.6707 70.4156 51.6335 70.1211 52.7324C69.8719 53.616 69.7359 54.4089 69.6227 55.0433C69.532 55.5417 69.4641 55.9382 69.3734 56.1875C65.1367 68.6257 60.3336 82.7406 58.0906 97.2519C58.068 97.4332 58.0113 97.6824 57.9434 97.9543C57.4223 100.526 56.1762 106.552 60.7867 110.155C63.3922 112.16 66.8586 112.873 68.7051 113.123C69.1922 113.191 69.6227 113.213 70.0078 113.213C71.8203 113.213 75.1961 112.602 77.2465 108.535L77.3258 108.365C80.1578 103.256 81.5738 97.8863 82.9332 92.6867C83.341 91.1234 83.7375 89.5714 84.1906 88.0421C84.825 85.8445 85.4707 83.6355 86.1051 81.4265C87.3738 77.0085 88.6879 72.4546 90.0699 68.0367C93.0379 58.623 95.5867 50.1042 96.7988 41.1324L96.8328 40.8832C97.0254 39.3312 97.5012 35.6835 94.7824 32.7609C93.4117 31.3109 90.9195 29.6003 86.7508 29.6003Z"
                    fill="#232323"
                  />
                  <path
                    d="M104.434 91.6786C111.945 80.2032 119.591 68.3879 125.006 55.7458C125.686 54.1711 127.668 50.9766 126.456 49.4247C125.55 48.2692 123.714 47.2723 122.366 46.7286C121.256 46.2754 121.086 46.7852 120.361 47.5442C115.785 52.3926 112.941 58.6571 109.566 64.3438C105.986 70.3477 102.52 76.4196 98.8265 82.3782C94.1367 89.9114 89.4695 97.5465 86.1617 105.725C85.7992 106.632 85.2781 107.765 85.7086 108.523C86.5129 109.985 88.8804 110.495 90.489 110.529C92.6301 110.574 94.4765 107.13 95.8246 105.352C97.3765 103.313 98.7359 101.353 100.039 99.1325C100.843 97.7618 101.874 96.561 102.655 95.1789C103.335 93.9895 103.675 92.8567 104.434 91.6786Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M121.675 46.5586C121.868 46.5586 122.083 46.6152 122.378 46.7285C123.726 47.2722 125.561 48.2578 126.467 49.4246C127.679 50.9879 125.708 54.1711 125.017 55.7457C119.602 68.3879 111.956 80.2031 104.445 91.6785C103.686 92.8453 103.347 93.9894 102.655 95.1902C101.874 96.5609 100.843 97.773 100.039 99.1437C98.736 101.364 97.3879 103.324 95.8246 105.363C94.4879 107.119 92.6528 110.54 90.5344 110.54H90.4891C88.8805 110.506 86.5243 109.996 85.7086 108.535C85.2895 107.776 85.7992 106.643 86.1617 105.737C89.4696 97.5578 94.1367 89.9226 98.8266 82.3894C102.508 76.4422 105.986 70.3703 109.566 64.355C112.941 58.6683 115.796 52.4039 120.361 47.5554C120.905 46.989 121.132 46.5586 121.675 46.5586ZM121.675 39.7504C118.152 39.7504 116.17 42.0047 115.536 42.741L115.4 42.8883C111.412 47.125 108.716 51.9734 106.099 56.6633C105.306 58.0793 104.525 59.4953 103.709 60.866C102.497 62.905 101.285 64.9554 100.084 67.0172C97.7957 70.9027 95.4281 74.9129 93.0379 78.7871C87.861 87.1019 83.2844 94.6804 79.8407 103.165L79.75 103.403C79.1723 104.864 77.8016 108.286 79.7161 111.797C81.6078 115.196 85.5614 117.246 90.3418 117.348H90.5231C95.802 117.348 98.8039 113.009 100.582 110.415C100.82 110.075 101.036 109.747 101.239 109.475C103.063 107.085 104.536 104.898 105.907 102.599C106.156 102.168 106.507 101.67 106.881 101.149C107.402 100.401 107.991 99.5629 108.557 98.5773C109.033 97.773 109.362 97.048 109.622 96.459C109.838 95.9945 109.996 95.6207 110.155 95.3941C117.337 84.4285 125.482 71.9675 131.27 58.4304C131.35 58.2718 131.452 58.0453 131.576 57.7961C132.732 55.4285 135.45 49.8777 131.825 45.2332C129.809 42.6504 126.637 41.0984 124.927 40.4074C123.828 39.9656 122.752 39.7504 121.675 39.7504Z"
                    fill="#232323"
                  />
                  <path
                    d="M95.4734 90.9988C100.684 78.3113 105.963 65.2726 108.897 51.8375C109.271 50.1609 110.608 46.6492 109.124 45.3578C108.014 44.3836 106.02 43.7605 104.593 43.4886C103.414 43.2507 103.346 43.7945 102.791 44.6668C99.2004 50.2855 97.5918 56.9804 95.3488 63.1996C92.9699 69.7812 90.7043 76.3968 88.2008 82.9332C85.0289 91.214 81.891 99.6082 80.1805 108.252C79.9879 109.226 79.7047 110.427 80.2484 111.095C81.3359 112.375 83.7375 112.432 85.3234 112.16C87.4418 111.809 88.5973 108.07 89.5941 106.065C90.7269 103.766 91.6898 101.591 92.5508 99.1664C93.0832 97.6711 93.8648 96.289 94.3746 94.7937C94.8277 93.4796 94.9523 92.3015 95.4734 90.9988Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M104.117 43.4208C104.253 43.4208 104.411 43.4434 104.604 43.4774C106.02 43.7606 108.025 44.3836 109.135 45.3465C110.619 46.6493 109.282 50.1497 108.909 51.8262C105.975 65.2614 100.684 78.3001 95.4848 90.9876C94.9637 92.279 94.8504 93.4684 94.3973 94.7712C93.8876 96.2665 93.1059 97.6598 92.5735 99.1438C91.7126 101.568 90.7497 103.743 89.6168 106.043C88.62 108.036 87.4645 111.775 85.3461 112.137C84.8817 112.216 84.3379 112.262 83.7715 112.262C82.4461 112.262 81.0301 111.967 80.2711 111.061C79.7274 110.404 80.0106 109.192 80.2032 108.218C81.9137 99.5743 85.0516 91.1801 88.2235 82.8993C90.727 76.3629 92.9926 69.7473 95.3715 63.1657C97.6145 56.9579 99.2231 50.2629 102.814 44.6329C103.267 43.9305 103.381 43.4208 104.117 43.4208ZM104.117 36.6125C102.066 36.6125 99.1891 37.3489 97.1387 40.8379L97.0481 41.0079C93.9102 45.9243 92.177 51.2032 90.5004 56.3008C89.9907 57.8415 89.4809 59.3708 88.9485 60.8774C88.1668 63.0411 87.3852 65.2161 86.6262 67.3797C85.0856 71.7071 83.511 76.1704 81.8344 80.4977C78.3227 89.6735 75.2641 97.9997 73.4856 106.926L73.4516 107.13C73.1457 108.682 72.4321 112.318 74.9922 115.411C76.9973 117.813 80.1012 119.093 83.7602 119.093C84.6778 119.093 85.584 119.013 86.4789 118.866C91.8032 117.982 94.0348 112.862 95.2356 110.121C95.4055 109.747 95.5528 109.396 95.7001 109.09C97.0254 106.405 98.079 103.97 98.9739 101.455C99.1438 100.99 99.393 100.435 99.6536 99.8461C100.027 99.0192 100.458 98.0676 100.832 96.9915C101.126 96.1305 101.33 95.3262 101.477 94.6918C101.591 94.2047 101.693 93.8083 101.795 93.559C106.779 81.4379 112.432 67.6516 115.558 53.2989C115.604 53.1176 115.672 52.8797 115.74 52.6079C116.431 50.0704 118.039 44.1231 113.621 40.2376C111.152 38.0852 107.731 37.1563 105.918 36.7938C105.318 36.6692 104.717 36.6125 104.117 36.6125Z"
                    fill="#232323"
                  />
                  <path
                    d="M58.4984 60.5941C59.1441 74.2898 59.8805 88.348 62.9164 101.772C63.2902 103.448 63.5508 107.187 65.4539 107.742C66.8699 108.161 68.9317 107.878 70.3477 107.527C71.5145 107.243 71.3445 106.722 71.4918 105.691C72.3527 99.0871 70.982 92.3355 70.3817 85.7539C69.7699 78.7871 69.011 71.8316 68.5012 64.8421C67.8895 55.9949 67.1758 47.0683 65.0688 38.5043C64.8309 37.5414 64.5816 36.3293 63.8 35.9554C62.282 35.2531 60.0731 36.2273 58.7477 37.1336C56.9805 38.357 57.5129 42.2312 57.4563 44.4628C57.3996 47.0343 57.4563 49.4132 57.6941 51.9734C57.8414 53.548 57.7281 55.1339 57.8981 56.7086C58.0227 58.0793 58.4305 59.2121 58.4984 60.5941Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M62.5992 35.7176C63.0297 35.7176 63.4262 35.7856 63.7887 35.9555C64.559 36.3293 64.8082 37.5415 65.0574 38.5043C67.1758 47.0684 67.8781 55.995 68.4898 64.8422C68.9996 71.8317 69.7586 78.7871 70.3703 85.7539C70.982 92.3356 72.3414 99.0871 71.4805 105.691C71.3445 106.722 71.5031 107.243 70.3363 107.527C69.4301 107.753 68.2293 107.957 67.1305 107.957C66.5187 107.957 65.941 107.889 65.4426 107.753C63.5508 107.198 63.2789 103.46 62.9051 101.783C59.8691 88.3594 59.1441 74.3125 58.4871 60.6055C58.4191 59.2122 58.0227 58.0907 57.8754 56.72C57.7055 55.1454 57.8187 53.5594 57.6715 51.9848C57.4336 49.4247 57.3769 47.0457 57.4336 44.4743C57.4902 42.2426 56.9578 38.3684 58.725 37.145C59.7445 36.454 61.2625 35.7176 62.5992 35.7176ZM62.5992 28.9094C59.1894 28.9094 56.3008 30.552 54.8734 31.5375C50.4215 34.6188 50.5574 40.1922 50.6254 43.1829C50.6367 43.5907 50.648 43.9872 50.6367 44.327C50.5687 47.3516 50.6594 49.9911 50.8973 52.6192C50.9426 53.1176 50.9539 53.718 50.9539 54.3637C50.9652 55.2813 50.9879 56.3235 51.1125 57.4676C51.2031 58.3625 51.3617 59.1555 51.4863 59.7899C51.5883 60.2883 51.6676 60.6848 51.6902 60.9567C52.3019 74.0633 53.0156 88.9371 56.2555 103.279C56.3008 103.46 56.3461 103.72 56.3801 103.992C56.8332 106.575 57.8867 112.636 63.5281 114.289C64.6043 114.607 65.8164 114.765 67.1191 114.765C69.0449 114.765 70.8121 114.425 71.9562 114.142C74.052 113.644 77.7109 111.99 78.1867 106.779L78.2094 106.586C78.9684 100.786 78.3 95.2696 77.6656 89.934C77.4617 88.3254 77.2805 86.7282 77.1332 85.1422C76.918 82.752 76.6914 80.3504 76.4535 77.9375C76.023 73.4856 75.5812 68.875 75.2641 64.3664C74.573 54.5789 73.8254 45.743 71.6391 36.8844L71.5937 36.6918C71.2199 35.1625 70.325 31.5829 66.734 29.8497C65.4086 29.1926 64.0492 28.9094 62.5992 28.9094Z"
                    fill="#232323"
                  />
                  <path
                    d="M52.8117 86.6715C51.407 73.0211 49.9117 59.0422 46.1507 45.7997C45.6976 44.1457 45.2218 40.4301 43.2961 39.977C41.8574 39.6372 39.807 40.0336 38.425 40.4641C37.2808 40.8153 37.4621 41.325 37.3828 42.3559C36.8843 49.0055 38.6175 55.6665 39.5918 62.2028C40.5886 69.1356 41.7214 76.0344 42.605 82.9786C43.7152 91.7692 44.916 100.65 47.4988 109.079C47.782 110.019 48.1105 111.22 48.8921 111.548C50.4554 112.171 52.5964 111.084 53.8652 110.087C55.5644 108.773 54.8281 104.932 54.7601 102.712C54.6695 100.141 54.4882 97.7731 54.1144 95.2243C53.8652 93.661 53.9105 92.0751 53.65 90.5118C53.4007 89.1524 52.9589 88.0649 52.8117 86.6715Z"
                    fill="#E9F8FB"
                  />
                  <path
                    d="M42.05 39.8637C42.4918 39.8637 42.9109 39.8977 43.2847 39.9883C45.2105 40.4415 45.6863 44.1571 46.1394 45.811C49.9117 59.0422 51.3957 73.0325 52.8004 86.6828C52.9589 88.0649 53.4007 89.1637 53.6273 90.5231C53.8878 92.0864 53.8425 93.6836 54.0918 95.2356C54.4656 97.7844 54.6582 100.152 54.7375 102.723C54.8054 104.955 55.5418 108.795 53.8425 110.098C52.8343 110.891 51.2597 111.741 49.8777 111.741C49.5265 111.741 49.1867 111.684 48.8695 111.559C48.0878 111.231 47.7593 110.03 47.4761 109.09C44.8933 100.662 43.6925 91.7805 42.5824 82.9899C41.6988 76.0457 40.566 69.1356 39.5691 62.2141C38.5949 55.6778 36.8617 49.0055 37.3601 42.3672C37.4394 41.3364 37.2582 40.8266 38.4023 40.4754C39.4332 40.1582 40.8152 39.8637 42.05 39.8637ZM42.05 33.0442C39.7277 33.0442 37.5187 33.6219 36.4086 33.9618C34.3242 34.5961 30.8011 36.4426 30.5859 41.6536L30.5746 41.8461C30.1441 47.7028 31.107 53.1969 32.0472 58.5098C32.3304 60.0844 32.6136 61.659 32.8515 63.2223C33.2027 65.6352 33.5652 68.0934 33.939 70.5289C34.5961 74.9016 35.2871 79.4328 35.8421 83.8508C37.0769 93.593 38.3003 102.384 40.9738 111.106L41.0304 111.288C41.4836 112.794 42.5711 116.34 46.2867 117.881C47.4648 118.356 48.6656 118.583 49.9003 118.583C53.5593 118.583 56.5726 116.657 58.0566 115.502C62.3046 112.205 61.8742 106.654 61.6363 103.675C61.6023 103.267 61.5683 102.871 61.5683 102.542C61.4664 99.5403 61.2398 96.9121 60.8433 94.2614C60.7527 93.7516 60.73 93.1512 60.6734 92.5055C60.6168 91.5993 60.5488 90.5684 60.3675 89.4469C60.2203 88.5293 60.0164 87.7477 59.8578 87.136C59.7218 86.6375 59.6199 86.2411 59.5972 85.9692C58.2605 72.9305 56.7425 58.102 52.7097 43.9758C52.6644 43.8059 52.6078 43.5567 52.5511 43.2848C51.9621 40.7247 50.5687 34.7094 44.848 33.3727C43.9757 33.1461 43.0355 33.0442 42.05 33.0442Z"
                    fill="#232323"
                  />
                  <path
                    d="M128.2 69.9286C127.102 68.6938 125.402 68.1954 123.805 68.0254C121.789 67.8102 119.772 67.6063 117.756 67.4137C115.411 67.1985 113.032 66.9719 110.687 66.9153C110.347 66.9153 110.019 66.904 109.69 66.904C107.549 66.904 104.468 66.4961 103.335 68.977C102.746 70.2911 102.361 71.809 101.908 73.1797C99.3363 80.9848 90.0925 81.3133 83.2164 81.1208C74.2898 80.8602 64.2984 82.6161 55.6324 80.3618C51.7468 79.3422 47.9406 77.2012 46.6152 73.1797C45.9355 71.152 45.5164 68.0368 43.2734 67.1758C41.5515 66.5188 39.6144 66.87 37.8246 66.9153C35.4683 66.9719 33.1007 67.1985 30.7558 67.4137C28.7394 67.6063 26.723 67.8102 24.7066 68.0254C23.1093 68.1954 21.4101 68.6938 20.3113 69.9286C19.0199 71.3899 20.1187 73.2704 20.3793 74.9583C21.5121 82.2309 24.1175 89.5036 25.7601 96.7083C27.7086 105.204 29.6683 113.689 31.9339 122.106C33.0781 126.297 34.3015 130.466 35.6156 134.612C36.2613 136.651 37.2242 142.689 39.0367 144.116C40.6793 145.408 43.4773 143.629 45.2105 143.414C47.3628 143.142 49.5492 142.825 51.7015 142.598C68.9203 140.729 86.1164 141.182 103.267 143.414C105 143.641 107.798 145.408 109.441 144.116C111.253 142.689 112.216 136.651 112.862 134.612C114.187 130.477 115.411 126.309 116.544 122.106C118.821 113.689 120.78 105.204 122.718 96.7083C124.36 89.5036 126.977 82.2309 128.121 74.9583C128.404 73.2704 129.503 71.3899 128.2 69.9286Z"
                    fill="#232323"
                  />
                </svg>
                <p className="categories-p">Закуски</p>
              </div>
              <div className="menu-categories-elem">
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 150 150"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.2688 29.125C31.2688 19.775 38.9625 11.6 48.9 12.5812C81.2578 15.7869 111.236 31.0126 132.913 55.25C139.6 62.7062 137.519 73.775 129.919 79.2812L127.275 81.2L125.006 77.825L124.956 77.7562C105.019 50.2125 72.5813 32.2875 35.9563 32.2875H31.2688V29.125ZM117.319 83.1875L119.681 86.7062L95.0125 104.612L93.75 105.55V118.687C93.75 120.345 93.0915 121.935 91.9194 123.107C90.7473 124.279 89.1576 124.937 87.5 124.937C85.8424 124.937 84.2527 124.279 83.0806 123.107C81.9085 121.935 81.25 120.345 81.25 118.687V118.312C81.15 117.526 80.7547 116.807 80.1442 116.301C79.5337 115.795 78.7536 115.539 77.962 115.587C77.1705 115.635 76.4267 115.982 75.8813 116.557C75.3359 117.133 75.0298 117.895 75.025 118.687V128.069C75.0252 129.672 74.409 131.215 73.304 132.377C72.1989 133.539 70.6895 134.231 69.0879 134.312C67.4863 134.392 65.9152 133.854 64.6995 132.808C63.4837 131.762 62.7164 130.289 62.5563 128.694L53.5563 135.194C44.25 141.906 31.2438 135.262 31.25 123.781L31.2688 41.6562H35.9563C69.4188 41.6562 99.0563 58.0125 117.319 83.1875ZM56.275 68.6875C57.9326 68.6875 59.5223 68.029 60.6944 66.8569C61.8665 65.6848 62.525 64.0951 62.525 62.4375C62.525 60.7799 61.8665 59.1902 60.6944 58.0181C59.5223 56.846 57.9326 56.1875 56.275 56.1875C54.6174 56.1875 53.0277 56.846 51.8556 58.0181C50.6835 59.1902 50.025 60.7799 50.025 62.4375C50.025 64.0951 50.6835 65.6848 51.8556 66.8569C53.0277 68.029 54.6174 68.6875 56.275 68.6875ZM81.275 87.425C82.9326 87.425 84.5223 86.7665 85.6944 85.5944C86.8665 84.4223 87.525 82.8326 87.525 81.175C87.525 79.5174 86.8665 77.9277 85.6944 76.7556C84.5223 75.5835 82.9326 74.925 81.275 74.925C79.6174 74.925 78.0277 75.5835 76.8556 76.7556C75.6835 77.9277 75.025 79.5174 75.025 81.175C75.025 82.8326 75.6835 84.4223 76.8556 85.5944C78.0277 86.7665 79.6174 87.425 81.275 87.425ZM56.275 106.162C57.9326 106.162 59.5223 105.504 60.6944 104.332C61.8665 103.16 62.525 101.57 62.525 99.9125C62.525 98.2549 61.8665 96.6652 60.6944 95.4931C59.5223 94.321 57.9326 93.6625 56.275 93.6625C54.6174 93.6625 53.0277 94.321 51.8556 95.4931C50.6835 96.6652 50.025 98.2549 50.025 99.9125C50.025 101.57 50.6835 103.16 51.8556 104.332C53.0277 105.504 54.6174 106.162 56.275 106.162Z"
                    fill="#232323"
                  />
                </svg>
                <p className="categories-p">Пицца</p>
              </div>
              <div className="menu-categories-elem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="150"
                  height="150"
                  viewBox="0 0 256 256"
                  xml:space="preserve"
                >
                  <defs></defs>
                  <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path
                      d="M 18.596 37.203 c -4.97 0 -9.642 -1.935 -13.156 -5.45 c -7.254 -7.254 -7.254 -19.058 0 -26.312 c 7.253 -7.254 19.058 -7.255 26.312 0 c 7.254 7.254 7.254 19.058 0 26.312 l 0 0 l 0 0 C 28.239 35.267 23.567 37.203 18.596 37.203 z M 18.597 2.966 c -4.005 0 -8.009 1.524 -11.058 4.573 c -6.097 6.097 -6.097 16.018 0 22.115 c 2.954 2.954 6.88 4.58 11.058 4.58 c 4.178 0 8.104 -1.627 11.058 -4.58 l 0 0 c 6.097 -6.097 6.097 -16.018 0 -22.115 C 26.606 4.491 22.601 2.966 18.597 2.966 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 71.403 90 c -4.764 0 -9.529 -1.814 -13.156 -5.441 c -7.254 -7.255 -7.254 -19.058 0 -26.312 c 7.255 -7.255 19.058 -7.255 26.312 0 c 7.255 7.254 7.255 19.059 0 26.312 l 0 0 C 80.932 88.186 76.167 90 71.403 90 z M 71.403 55.772 c -4.004 0 -8.009 1.524 -11.058 4.573 c -6.097 6.097 -6.097 16.018 0 22.116 c 6.098 6.096 16.019 6.097 22.116 0 l 0 0 c 6.097 -6.097 6.097 -16.018 0 -22.116 C 79.412 57.297 75.407 55.772 71.403 55.772 z M 83.51 83.51 h 0.01 H 83.51 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <path
                      d="M 11.494 79.99 c -0.38 0 -0.759 -0.145 -1.049 -0.435 c -0.58 -0.58 -0.58 -1.519 0 -2.098 l 67.012 -67.013 c 0.58 -0.58 1.519 -0.58 2.098 0 c 0.58 0.579 0.58 1.519 0 2.098 L 12.543 79.556 C 12.253 79.845 11.873 79.99 11.494 79.99 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                  </g>
                </svg>
                <p className="categories-p">Акции</p>
              </div>
            </div>
            <div className="menu-tovar-card">
              <div className="menu-tovar-card__elem">
                <img
                  src="./src/assets/item__image.png"
                  alt=""
                  className="tovar-image"
                />

                <div className="tovar-card-elem__text">
                  <div className="card-elem__text">
                    <p className="h1-elem">Салат "Греческий"</p>
                    <p className="p-first_info">300 грамм - 1 порция</p>
                    <p className="p-second_info">
                      36 - белков, 11 - жиров, 55 - углеводов
                    </p>
                  </div>
                  <div className="card-elem__button">Добавить в корзину</div>
                </div>
              </div>
              <div className="menu-tovar-card__elem">
                <img
                  src="./src/assets/item__image.png"
                  alt=""
                  className="tovar-image"
                />

                <div className="tovar-card-elem__text">
                  <div className="card-elem__text">
                    <p className="h1-elem">Салат "Греческий"</p>
                    <p className="p-first_info">300 грамм - 1 порция</p>
                    <p className="p-second_info">
                      36 - белков, 11 - жиров, 55 - углеводов
                    </p>
                  </div>
                  <div className="card-elem__button">Добавить в корзину</div>
                </div>
              </div>
              <div className="menu-tovar-card__elem">
                <img
                  src="./src/assets/item__image.png"
                  alt=""
                  className="tovar-image"
                />

                <div className="tovar-card-elem__text">
                  <div className="card-elem__text">
                    <p className="h1-elem">Салат "Греческий"</p>
                    <p className="p-first_info">300 грамм - 1 порция</p>
                    <p className="p-second_info">
                      36 - белков, 11 - жиров, 55 - углеводов
                    </p>
                  </div>
                  <div className="card-elem__button">Добавить в корзину</div>
                </div>
              </div>
              <div className="menu-tovar-card__elem">
                <img
                  src="./src/assets/item__image.png"
                  alt=""
                  className="tovar-image"
                />
                <div className="tovar-card-elem__text">
                  <div className="card-elem__text">
                    <p className="h1-elem">Салат "Греческий"</p>
                    <p className="p-first_info">300 грамм - 1 порция</p>
                    <p className="p-second_info">
                      36 - белков, 11 - жиров, 55 - углеводов
                    </p>
                  </div>
                  <div className="card-elem__button">Добавить в корзину</div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-tovar-button">
            Показать ещё
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App;
