import { Link } from "react-router-dom";

function Navbar({ openModal }) {
  return (
    <div className="fixed bottom-0 w-full h-20 grid grid-cols-2 gap-[5.5rem] text-gray-600 z-10">
      <div className="relative z-10 bg-white text-fuchsia-50 grid grid-cols-2 place-items-center rounded-r-[2rem] rounded-l-lg">
        <Link to="/" className="btn w-12">
          <svg
            width="35"
            height="34"
            viewBox="0 0 25 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/home-2">
              <g id="home-2">
                <path
                  id="Vector"
                  d="M9.32 2.84001L3.93 7.04001C3.03 7.74001 2.3 9.23001 2.3 10.36V17.77C2.3 20.09 4.19 21.99 6.51 21.99H18.09C20.41 21.99 22.3 20.09 22.3 17.78V10.5C22.3 9.29001 21.49 7.74001 20.5 7.05001L14.32 2.72001C12.92 1.74001 10.67 1.79001 9.32 2.84001Z"
                  stroke="#484C52"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M12.3 17.99V14.99"
                  stroke="#484C52"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
          <p className="text-black mt-2 ">Home</p>
        </Link>

        <Link to="/report" className="btn w-12">
          <svg
            width="31"
            height="29"
            viewBox="0 0 21 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 8">
              <g id="Group 3">
                <mask
                  id="mask0_292_73"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="31"
                  height="29"
                >
                  <path
                    id="Clip 2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.900009 0H20.9137V18.1855H0.900009V0Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_292_73)">
                  <path
                    id="Fill 1"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.9127 1.5C10.4367 1.5 10.0127 1.746 9.7747 2.159L2.5767 14.724C2.3427 15.134 2.3447 15.623 2.5817 16.032C2.8187 16.441 3.2427 16.686 3.7157 16.686H18.0987C18.5707 16.686 18.9947 16.441 19.2317 16.032C19.4697 15.623 19.4717 15.134 19.2357 14.724L12.0507 2.159C11.8137 1.746 11.3897 1.5 10.9127 1.5ZM18.0987 18.186H3.7157C2.7017 18.186 1.7927 17.662 1.2837 16.784C0.774702 15.907 0.771702 14.858 1.2747 13.979L8.4747 1.413C8.9807 0.528 9.8917 0 10.9127 0H10.9137C11.9337 0 12.8467 0.529 13.3527 1.415L20.5387 13.979C21.0417 14.858 21.0387 15.907 20.5297 16.784C20.0207 17.662 19.1117 18.186 18.0987 18.186Z"
                    fill="#484C52"
                  />
                </g>
              </g>
              <path
                id="Fill 4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9039 11.164C10.4899 11.164 10.1539 10.828 10.1539 10.414V7.314C10.1539 6.9 10.4899 6.564 10.9039 6.564C11.3179 6.564 11.6539 6.9 11.6539 7.314V10.414C11.6539 10.828 11.3179 11.164 10.9039 11.164Z"
                fill="#484C52"
              />
              <path
                id="Fill 6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9059 14.499C10.3529 14.499 9.90091 14.052 9.90091 13.499C9.90091 12.946 10.3439 12.499 10.8959 12.499H10.9059C11.4589 12.499 11.9059 12.946 11.9059 13.499C11.9059 14.052 11.4589 14.499 10.9059 14.499Z"
                fill="#484C52"
              />
            </g>
          </svg>
          <p className="text-black mt-2 ">Reportar</p>
        </Link>
      </div>
      <div className="relative z-10 bg-white text-fuchsia-50 grid grid-cols-2 place-items-center rounded-l-[2rem] rounded-r-lg">
        <Link to="/history" className="btn w-12">
          <svg
            width="35"
            height="34"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/bold/clock">
              <g id="clock">
                <path
                  id="Vector"
                  d="M12.1 2C6.58998 2 2.09998 6.49 2.09998 12C2.09998 17.51 6.58998 22 12.1 22C17.61 22 22.1 17.51 22.1 12C22.1 6.49 17.61 2 12.1 2ZM16.45 15.57C16.31 15.81 16.06 15.94 15.8 15.94C15.67 15.94 15.54 15.91 15.42 15.83L12.32 13.98C11.55 13.52 10.98 12.51 10.98 11.62V7.52C10.98 7.11 11.32 6.77 11.73 6.77C12.14 6.77 12.48 7.11 12.48 7.52V11.62C12.48 11.98 12.78 12.51 13.09 12.69L16.19 14.54C16.55 14.75 16.67 15.21 16.45 15.57Z"
                  fill="#484C52"
                />
              </g>
            </g>
          </svg>
          <p className="text-black mt-2 ">Historial</p>
        </Link>

        <Link to="/login" className="btn w-12">
          <svg
            width="35"
            height="34"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="vuesax/linear/user">
              <g id="vuesax/linear/user_2">
                <g id="user">
                  <path
                    id="Vector"
                    d="M12.7 12C15.4614 12 17.7 9.76142 17.7 7C17.7 4.23858 15.4614 2 12.7 2C9.93856 2 7.69998 4.23858 7.69998 7C7.69998 9.76142 9.93856 12 12.7 12Z"
                    stroke="#484C52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M21.29 22C21.29 18.13 17.44 15 12.7 15C7.95998 15 4.10999 18.13 4.10999 22"
                    stroke="#484C52"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </g>
          </svg>
          <p className="text-black mt-2 ">Usuario</p>
        </Link>
      </div>
      <div className="absolute z-[2] h-24 w-24 -top-10 left-1/2 -translate-x-1/2 rounded-full border-[10px] hover:border-[5px] transition-all bg-blue-600 hover:rotate-45">
        <button
          onClick={openModal}
          id="createNote"
          className="rounded-full w-full h-full flex justify-center items-center"
        >
          <svg
            width="30"
            height="28"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Swap">
              <path
                id="Stroke 1"
                d="M14.8396 2.79645C15.2193 2.79645 15.5331 3.0786 15.5828 3.44468L15.5896 3.54645V17.1642C15.5896 17.5784 15.2538 17.9142 14.8396 17.9142C14.4599 17.9142 14.1461 17.6321 14.0964 17.266L14.0896 17.1642V3.54645C14.0896 3.13223 14.4254 2.79645 14.8396 2.79645Z"
                fill="#FFFFFF"
              />
              <path
                id="Stroke 3"
                d="M18.3857 12.539C18.6779 12.2454 19.1528 12.2443 19.4464 12.5366C19.7133 12.8022 19.7384 13.2188 19.5213 13.5129L19.4488 13.5972L15.3711 17.6939C15.1045 17.9616 14.6863 17.986 14.3922 17.7669L14.3079 17.6939L10.2302 13.5972C9.93795 13.3036 9.93905 12.8288 10.2326 12.5366C10.4995 12.2709 10.9162 12.2477 11.2093 12.4662L11.2933 12.539L14.8391 16.101L18.3857 12.539Z"
                fill="#FFFFFF"
              />
              <path
                id="Stroke 5"
                d="M4.91113 0.0828857C5.29083 0.0828857 5.60462 0.36504 5.65429 0.731115L5.66113 0.832886V14.4507C5.66113 14.8649 5.32535 15.2007 4.91113 15.2007C4.53144 15.2007 4.21764 14.9185 4.16798 14.5524L4.16113 14.4507V0.832886C4.16113 0.418672 4.49692 0.0828857 4.91113 0.0828857Z"
                fill="#FFFFFF"
              />
              <path
                id="Stroke 7"
                d="M4.37972 0.303233C4.64624 0.0354795 5.06449 0.0111383 5.3586 0.230209L5.44283 0.303233L9.52061 4.3999C9.81282 4.69347 9.81172 5.16834 9.51816 5.46056C9.25127 5.72621 8.83455 5.74945 8.54145 5.53092L8.4575 5.45811L4.91105 1.895L1.36505 5.45811C1.0994 5.72499 0.682793 5.75016 0.388679 5.53298L0.304393 5.46056C0.0375118 5.19491 0.012343 4.7783 0.229518 4.48419L0.301942 4.3999L4.37972 0.303233Z"
                fill="#FFFFFF"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="absolute z-[1] bottom-0 h-[80%] left-1/2 -translate-x-1/2 w-1/2 bg-white"></div>
    </div>
  );
}

export default Navbar;
