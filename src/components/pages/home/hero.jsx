"use client";

import { useGlobal } from "@/context/handleContent";
import { useState, useEffect } from "react";

export function HeroSection() {
  const { setIsFilloutOpen } = useGlobal();
  return (
    <section className="relative py-20 md:py-28 bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Floating Icons Background */}
      <FlashIcons />

      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.92), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-72 bg-gradient-to-b from-blue-500/15 to-transparent" />
      <div className="absolute top-1/4 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="container relative mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-900/40 to-blue-800/30 px-5 py-2.5 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-700/40 mb-6 hover:bg-blue-800/40 hover:text-blue-200 transition-all duration-300 transform">
            <span className="relative h-3 w-3 flex items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
            </span>
            <span className="relative">Now with GPT integration</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            AI Chatbots & WhatsApp CMS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-gradient">
              in One Platform
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Engage customers, automate workflows, and grow your business with
            ECOD. The all-in-one solution for modern customer communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
            <button
              onClick={() => setIsFilloutOpen(true)}
              className="px-8 py-2 border cursor-pointer bg-white border-slate-600 rounded-full text-slate-900 hover:text-white hover:bg-slate-800/50 transition-all ease-in-out duration-300 text-center transform"
            >
              Talk to sales
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-100 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 border-4 border-slate-900 flex items-center justify-center transition-transform hover:scale-110">
                <span className="font-bold text-xs">JD</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-500 border-4 border-slate-900 flex items-center justify-center transition-transform hover:scale-110">
                <span className="font-bold text-xs">MK</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500 border-4 border-slate-900 flex items-center justify-center transition-transform hover:scale-110">
                <span className="font-bold text-xs">SL</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-amber-500 border-4 border-slate-900 flex items-center justify-center transition-transform">
                <span className="font-bold text-xs">+27</span>
              </div>
            </div>
            <div className="border-l border-slate-700 h-6"></div>
            <p>
              Trusted by{" "}
              <span className="font-semibold text-blue-300">1,000+</span>{" "}
              businesses worldwide
            </p>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-xl">
            <div className="absolute -top-6 -left-6 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse delay-1000" />

            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-700/50 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-cyan-500/30">
              <img
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="ECOD Platform Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(5deg)
              scale(1.05);
          }
          66% {
            transform: translateY(10px) translateX(-10px) rotate(-5deg)
              scale(1.03);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

function FlashIcons() {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    // Create initial icons with random positions and animation properties
    const initialIcons = [
      {
        id: 1,
        name: "chatgpt",
        x: 10,
        y: 20,
        size: 40,
        delay: 0,
        duration: 15,
      },
      { id: 2, name: "gemini", x: 80, y: 40, size: 35, delay: 2, duration: 18 },
      { id: 3, name: "claude", x: 30, y: 70, size: 45, delay: 4, duration: 20 },
      {
        id: 4,
        name: "facebook",
        x: 70,
        y: 10,
        size: 38,
        delay: 1,
        duration: 16,
      },
      {
        id: 5,
        name: "instagram",
        x: 20,
        y: 50,
        size: 42,
        delay: 3,
        duration: 17,
      },
      {
        id: 6,
        name: "whatsapp",
        x: 60,
        y: 80,
        size: 36,
        delay: 5,
        duration: 19,
      },
      {
        id: 7,
        name: "twitter",
        x: 40,
        y: 30,
        size: 34,
        delay: 6,
        duration: 14,
      },
      {
        id: 8,
        name: "linkedin",
        x: 90,
        y: 60,
        size: 39,
        delay: 7,
        duration: 21,
      },
      {
        id: 10,
        name: "telegram",
        x: 85,
        y: 25,
        size: 41,
        delay: 9,
        duration: 23,
      },
      {
        id: 11,
        name: "discord",
        x: 35,
        y: 15,
        size: 43,
        delay: 10,
        duration: 24,
      },
      {
        id: 12,
        name: "spreadsheet",
        x: 65,
        y: 55,
        size: 33,
        delay: 11,
        duration: 25,
      },
    ];

    setIcons(initialIcons);
  }, []);

  const getIcon = (name) => {
    switch (name) {
      case "chatgpt":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
            className="rounded-full"
          >
            <linearGradient
              id="w17wr4HO9wItDezz_rq6ha_ka3InxFU3QZa_gr1"
              x1="3.842"
              x2="46.225"
              y1="4.692"
              y2="45.288"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#32de9f"></stop>
              <stop offset="1" stopColor="#0ea982"></stop>
            </linearGradient>
            <path
              fill="url(#w17wr4HO9wItDezz_rq6ha_ka3InxFU3QZa_gr1)"
              d="M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8	C42,6.895,41.105,6,40,6z"
            ></path>
            <path
              d="M37.599,24.232c-0.314-1.173-0.922-2.245-1.765-3.12c0.647-1.78,0.48-3.782-0.466-5.422	c-0.961-1.664-2.512-2.854-4.368-3.352c-0.606-0.162-1.229-0.244-1.852-0.244c-0.584,0-1.167,0.072-1.736,0.214	C26.193,10.857,24.377,10,22.487,10c-3.222,0-6.012,2.116-6.901,5.188c-1.893,0.331-3.504,1.455-4.467,3.122	c-0.961,1.663-1.216,3.602-0.719,5.458c0.315,1.176,0.923,2.248,1.767,3.122c-0.647,1.78-0.481,3.782,0.464,5.419	c0.961,1.664,2.512,2.854,4.368,3.352c0.614,0.164,1.244,0.248,1.872,0.248c0.563,0,1.139-0.074,1.715-0.219	c1.228,1.473,3.005,2.31,4.926,2.31c3.227,0,6.019-2.121,6.905-5.198c1.889-0.328,3.503-1.448,4.463-3.112	C37.842,28.026,38.097,26.088,37.599,24.232z M28.849,23.785l1.571,0.884v6.138c0,2.706-2.202,4.908-4.908,4.908	c-0.99,0-1.938-0.354-2.683-0.986l5.524-3.189c0.357-0.207,0.576-0.591,0.571-1.002L28.849,23.785z M15.876,24.996l5.886,3.311	l-1.552,0.919l-5.315-3.069c-1.135-0.655-1.948-1.713-2.287-2.98c-0.339-1.266-0.165-2.589,0.491-3.724	c0.502-0.869,1.268-1.503,2.195-1.828V24	C15.294,24.411,15.517,24.793,15.876,24.996z M14.125,28.351l5.523,3.189	c0.173,0.1,0.371,0.153,0.571,0.153c0.205,0,0.406-0.055,0.583-0.16l5.811-3.442l0.02,1.803l-5.316,3.069	c-0.748,0.432-1.593,0.661-2.445,0.661c-0.429,0-0.86-0.057-1.28-0.17c-1.266-0.339-2.324-1.151-2.98-2.286	C14.118,30.311,13.95,29.313,14.125,28.351z M21.419,22.548l2.548-1.509l2.582,1.452l0.033,2.961l-2.548,1.509l-2.582-1.452	L21.419,22.548z M19.151,24.215l-1.571-0.884v-6.138c0-2.706,2.202-4.908,4.908-4.908c0.99,0,1.939,0.353,2.684,0.985l-5.525,3.189	c-0.357,0.207-0.576,0.591-0.571,1.002L19.151,24.215z M32.124,23.004l-5.886-3.311l1.552-0.919l5.315,3.069	c1.135,0.655,1.948,1.713,2.287,2.98c0.339,1.266,0.165,2.589-0.491,3.724c-0.495,0.858-1.275,1.503-2.195,1.832V24	C32.706,23.589,32.483,23.207,32.124,23.004z M33.873,19.647l-5.519-3.187c-0.174-0.1-0.371-0.152-0.571-0.152	c-0.204,0-0.405,0.055-0.581,0.158l-5.813,3.443l-0.02-1.803l5.316-3.069c0.748-0.432,1.593-0.66,2.446-0.66	c0.429,0,0.859,0.057,1.279,0.169c1.265,0.339,2.323,1.151,2.979,2.286C33.881,17.686,34.048,18.684,33.873,19.647z"
              opacity=".07"
            ></path>
            <path
              d="M38.082,24.102c-0.31-1.156-0.885-2.22-1.679-3.112c0.578-1.842,0.366-3.872-0.602-5.55	c-1.028-1.78-2.687-3.053-4.671-3.585c-0.648-0.173-1.315-0.261-1.981-0.261c-0.523,0-1.044,0.054-1.557,0.161	C26.284,10.332,24.422,9.5,22.487,9.5c-3.343,0-6.252,2.13-7.291,5.256c-1.913,0.422-3.526,1.599-4.51,3.304	c-1.028,1.779-1.301,3.852-0.768,5.838c0.31,1.158,0.887,2.223,1.681,3.114c-0.578,1.843-0.367,3.872,0.6,5.547	c1.028,1.78,2.687,3.053,4.671,3.585c0.656,0.176,1.33,0.265,2.002,0.265c0.506,0,1.02-0.055,1.535-0.164	c1.312,1.441,3.138,2.255,5.106,2.255c3.347,0,6.258-2.134,7.294-5.265c1.905-0.417,3.524-1.591,4.507-3.295	C38.341,28.16,38.614,26.087,38.082,24.102z M29.359,24.645l0.562,0.316v5.846c0,2.43-1.977,4.408-4.408,4.408	c-0.619,0-1.219-0.157-1.749-0.448l4.841-2.795c0.514-0.298,0.828-0.85,0.821-1.441L29.359,24.645z M19.397,31.973	c0.249,0.144,0.533,0.22,0.821,0.22c0.294,0,0.584-0.079,0.838-0.23l5.066-3.001l0.007,0.645l-5.062,2.922	c-0.672,0.389-1.431,0.594-2.195,0.594c-0.385,0-0.772-0.051-1.15-0.153c-1.137-0.304-2.087-1.034-2.676-2.054	c-0.309-0.535-0.473-1.133-0.487-1.738L19.397,31.973z M15.63,25.431l5.132,2.887l-0.555,0.329l-5.062-2.923	c-1.02-0.589-1.749-1.539-2.054-2.676c-0.304-1.137-0.148-2.325,0.441-3.344c0.314-0.544,0.745-0.982,1.262-1.294V24	C14.794,24.591,15.114,25.14,15.63,25.431z M21.922,22.831l2.051-1.215l2.079,1.169l0.027,2.384l-2.051,1.215l-2.079-1.169	L21.922,22.831z M18.641,23.355l-0.562-0.316v-5.846c0-2.43,1.977-4.408,4.408-4.408c0.619,0,1.219,0.157,1.75,0.447l-4.841,2.795	c-0.514,0.298-0.828,0.85-0.821,1.441L18.641,23.355z M32.37,22.569l-5.132-2.887l0.555-0.329l5.062,2.923	c1.02,0.588,1.749,1.539,2.054,2.676c0.304,1.137,0.148,2.325-0.441,3.344c-0.309,0.536-0.745,0.978-1.262,1.292V24	C33.206,23.409,32.886,22.86,32.37,22.569z M28.603,16.027c-0.251-0.144-0.534-0.219-0.821-0.219c-0.293,0-0.582,0.078-0.834,0.227	l-5.07,3.003l-0.007-0.645l5.062-2.922c0.672-0.388,1.431-0.593,2.196-0.593c0.385,0,0.772,0.051,1.15,0.152	c1.136,0.304,2.086,1.033,2.675,2.053c0.308,0.533,0.471,1.131,0.484,1.737L28.603,16.027z"
              opacity=".05"
            ></path>
            <path
              fill="#fff"
              d="M37.116,24.361c-0.325-1.215-0.976-2.284-1.868-3.126c0.729-1.713,0.619-3.68-0.313-5.295	c-0.894-1.548-2.337-2.656-4.064-3.118c-1.216-0.325-2.468-0.297-3.644,0.057c-1.121-1.49-2.865-2.379-4.739-2.379	c-3.154,0-5.799,2.196-6.503,5.137c-0.006,0.001-0.012-0.002-0.019-0.001c-1.866,0.231-3.474,1.298-4.413,2.924	c-0.894,1.548-1.131,3.352-0.669,5.079c0.326,1.216,0.977,2.286,1.87,3.128c-0.729,1.714-0.624,3.673,0.311,5.293	c0.894,1.548,2.337,2.656,4.064,3.119c0.576,0.154,1.162,0.231,1.743,0.231c0.645,0,1.283-0.104,1.901-0.289	c1.12,1.493,2.858,2.381,4.74,2.381c3.157,0,5.804-2.2,6.506-5.145c1.851-0.225,3.491-1.29,4.43-2.915	C37.342,27.892,37.579,26.088,37.116,24.361z M30.538,14.063c1.396,0.373,2.561,1.269,3.283,2.519	c0.674,1.168,0.799,2.571,0.366,3.836c-0.064-0.04-0.124-0.084-0.189-0.122l-5.894-3.403c-0.201-0.115-0.449-0.114-0.649,0.004	l-6.556,3.883l-0.033-2.962l5.569-3.215C27.685,13.881,29.143,13.691,30.538,14.063z M27.045,22.197l0.40,3.538l-3.045,1.803	l-3.085-1.735l-0.40-3.538l3.045-1.803L27.045,22.197z M17.08,17.193c0-2.982,2.426-5.408,5.408-5.408	c1.356,0,2.631,0.589,3.509,1.599c-0.067,0.036-0.138,0.066-0.204,0.105l-5.895,3.403c-0.201,0.116-0.324,0.332-0.321,0.564	l0.085,7.619l-2.581-1.452L17.08,17.193z M12.125,23.306c-0.373-1.395-0.181-2.853,0.541-4.103c0.681-1.18,1.815-1.976,3.140-2.233	c-0.003,0.075-0.012,0.148-0.012,0.224V24c0,0.232,0.125,0.446,0.328,0.561l6.640,3.735l-2.548,1.509l-5.568-3.216	C13.394,25.868,12.499,24.702,12.125,23.306z M17.462,33.937c-1.396-0.374-2.561-1.269-3.283-2.519	c-0.677-1.173-0.803-2.572-0.368-3.838c0.065,0.041,0.126,0.086,0.192,0.124l5.894,3.403c0.099,0.057,0.21,0.086,0.321,0.086	c0.114,0,0.227-0.30,0.328-0.90l6.556-3.883l0.033,2.962l-5.569,3.215C20.316,34.119,18.858,34.311,17.462,33.937z M30.92,30.807	c0,2.982-2.426,5.408-5.408,5.408c-1.362,0-2.632-0.591-3.509-1.603c0.067-0.036,0.139-0.063,0.206-0.102l5.895-3.403	c0.201-0.116,0.324-0.332,0.321-0.564l-0.086-7.618l2.581,1.452V30.807z M35.334,28.797c-0.679,1.176-1.826,1.984-3.14,2.239	c0.003-0.077,0.012-0.152,0.012-0.229V24c0-0.232-0.125-0.446-0.328-0.561l-6.64-3.735l2.548-1.509l5.568,3.216	c1.251,0.722,2.146,1.888,2.52,3.283C36.248,26.089,36.056,27.547,35.334,28.797z"
            ></path>
          </svg>
        );
      case "gemini":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="8sl3bbNtWcumaCBCPc4S6a_rnK88i9FvAFO_gr1"
              x1="3.906"
              x2="45.428"
              y1="3.906"
              y2="45.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#ca5df5"></stop>
              <stop offset=".036" stopColor="#c05ff4"></stop>
              <stop offset=".293" stopColor="#806cea"></stop>
              <stop offset=".528" stopColor="#4d77e3"></stop>
              <stop offset=".731" stopColor="#297fdd"></stop>
              <stop offset=".895" stopColor="#1283da"></stop>
              <stop offset="1" stopColor="#0a85d9"></stop>
            </linearGradient>
            <path
              fill="url(#8sl3bbNtWcumaCBCPc4S6a_rnK88i9FvAFO_gr1)"
              d="M46.117,23.081l-0.995-0.04H45.12C34.243,22.613,25.387,13.757,24.959,2.88l-0.04-0.996	C24.9,1.39,24.494,1,24,1s-0.9,0.39-0.919,0.883l-0.04,0.996c-0.429,10.877-9.285,19.733-20.163,20.162l-0.995,0.04	C1.39,23.1,1,23.506,1,24s0.39,0.9,0.884,0.919l0.995,0.039c10.877,0.43,19.733,9.286,20.162,20.163l0.04,0.996	C23.1,46.610,23.506,47,24,47s0.9-0.39,0.919-0.883l0.04-0.996c0.429-10.877,9.285-19.733,20.162-20.163l0.995-0.039	C46.610,24.9,47,24.494,47,24S46.610,23.1,46.117,23.081z"
            ></path>
          </svg>
        );
      case "claude":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="Il_Yw9TpWsua81mVHsLWRa_zQjzFjPpT2Ek_gr1"
              x1="24"
              x2="24"
              y1="2.987"
              y2="45.013"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#d97757"></stop>
              <stop offset="1" stopColor="#db5b32"></stop>
            </linearGradient>
            <path
              fill="url(#Il_Yw9TpWsua81mVHsLWRa_zQjzFjPpT2Ek_gr1)"
              d="M11.239,30.934l8.264-4.637l0.139-0.403l-0.139-0.224h-0.403l-1.381-0.085l-4.722-0.128l-4.095-0.17l-3.968-0.213l-0.998-0.213	L3,23.628l0.096-0.615l0.839-0.564l1.203,0.105l2.657,0.182l3.988,0.275l2.893,0.17l4.285,0.445h0.681l0.096-0.275l-0.233-0.17	l-0.182-0.17l-4.127-2.796l-4.467-2.955l-2.34-1.702l-1.265-0.862l-0.638-0.808l-0.275-1.764l1.149-1.265l1.543,0.105l0.394,0.105	l1.563,1.203l3.338,2.584l4.359,3.21l0.638,0.53l0.255-0.182l0.031-0.128l-0.286-0.479l-2.371-4.285l-2.53-4.359L13.17,7.355	l-0.298-1.083c-0.105-0.445-0.182-0.82-0.182-1.276l1.307-1.775l0.723-0.233l1.744,0.233L17.2,3.858l1.083,2.479l1.756,3.902	l2.723,5.306l0.797,1.574l0.425,1.458l0.159,0.445h0.275v-0.255l0.224-2.989l0.414-3.67l0.403-4.722l0.139-1.33l0.658-1.594	L27.564,3.6l1.021,0.488l0.839,1.203l-0.116,0.777l-0.499,3.245l-0.978,5.082l-0.638,3.403h0.372l0.425-0.425l1.722-2.286	l2.893-3.616l1.276-1.435l1.489-1.585l0.956-0.754h1.807l1.33,1.977l-0.596,2.042l-1.86,2.36l-1.543,1.999l-2.212,2.978	l-1.381,2.382l0.128,0.19l0.329-0.031l4.997-1.064l2.7-0.488l3.222-0.553l1.458,0.681l0.159,0.692l-0.573,1.415l-3.446,0.851	l-4.041,0.808l-6.018,1.424l-0.074,0.054l0.085,0.105l2.711,0.255l1.16,0.062h2.839l5.287,0.394l1.381,0.913L45,28.26l-0.139,0.851	l-2.127,1.083l-2.87-0.681l-6.699-1.594l-2.297-0.573H30.55v0.19l1.914,1.872l3.508,3.168l4.393,4.084l0.224,1.01l-0.564,0.797	l-0.596-0.085l-3.86-2.904l-1.489-1.307l-3.372-2.839h-0.224v0.298l0.777,1.137l4.104,6.169l0.213,1.892l-0.298,0.615l-1.064,0.372	l-1.168-0.213l-2.402-3.372l-2.479-3.798l-1.999-3.403l-0.244,0.139l-1.18,12.709l-0.553,0.649l-1.276,0.488l-1.064-0.808	l-0.564-1.307l0.564-2.584l0.681-3.372l0.553-2.68l0.499-3.33l0.298-1.106l-0.02-0.074l-0.244,0.031l-2.51,3.446l-3.817,5.159	l-3.02,3.233l-0.723,0.286l-1.254-0.649l0.116-1.160l0.701-1.032l4.18-5.318l2.521-3.296l1.628-1.903l-0.011-0.275h-0.096	l-11.103,7.209l-1.977,0.255l-0.851-0.797l0.105-1.307l0.403-0.425l3.338-2.297l-0.011,0.011L11.239,30.934z"
              shapeRendering="optimizeQuality"
            ></path>
          </svg>
        );
      case "facebook":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-500"
          >
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-pink-500"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case "whatsapp":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-green-500"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.150-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0.16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.49" />
          </svg>
        );
      case "twitter":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-400"
          >
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.20-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-600"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "telegram":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-400"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.894 7.221l-1.97 9.28c-.145.658-.537.818-1.084.509l-3-2.21-1.446 1.394c-.157.16-.295.295-.605.295l.213-3.05 5.56-5.022c.241-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.652-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
          </svg>
        );
      case "discord":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-indigo-500"
          >
            <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.09.28.19.42.33a10.14 10.14 0 0 1-1.71.83 12.89 12.89 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
          </svg>
        );
      case "spreadsheet":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="PTsiEfj2THKtO9xz06mlla_qrAVeBIrsjod_gr1"
              x1="24"
              x2="24"
              y1="5"
              y2="43"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#21ad64"></stop>
              <stop offset="1" stopColor="#088242"></stop>
            </linearGradient>
            <path
              fill="url(#PTsiEfj2THKtO9xz06mlla_qrAVeBIrsjod_gr1)"
              d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"
            ></path>
            <path fill="#61e3a7" d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"></path>
            <path
              fill="#107c42"
              d="M39,16h-9c-0.473,0-0.917-0.168-1.257-0.444L39,27V16z"
            ></path>
            <path
              fill="#fff"
              d="M32,23H16c-0.553,0-1,0.448-1,1v12c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V24	C33,23.448,32.553,23,32,23z M17,29h4v2h-4V29z M23,29h8v2h-8V29z M31,27h-8v-2h8V27z M21,25v2h-4v-2H21z M17,33h4v2h-4V33z M23,35	v-2h8v2H23z"
            ></path>
            <path
              d="M32,22.5c0.827,0,1.5,0.673,1.5,1.5v12c0,0.827-0.673,1.5-1.5,1.5H16c-0.827,0-1.5-0.673-1.5-1.5V24 c0-0.827,0.673-1.5,1.5-1.5H32 M32,22H16c-1.103,0-2,0.897-2,2v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V24 C34,22.897,33.103,22,32,22L32,22z"
              opacity=".05"
            ></path>
            <path
              d="M32,23c0.553,0,1,0.448,1,1v12c0,0.552-0.447,1-1,1H16c-0.553,0-1-0.448-1-1V24c0-0.552,0.447-1,1-1	H32 M32,22.5H16c-0.827,0-1.5,0.673-1.5,1.5v12c0,0.827,0.673,1.5,1.5,1.5h16c0.827,0,1.5-0.673,1.5-1.5V24	C33.5,23.173,32.827,22.5,32,22.5L32,22.5z"
              opacity=".07"
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 w-full lg:w-1/2 h-full pointer-events-none z-10 overflow-hidden">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute opacity-30 hover:opacity-80 transition-all duration-700 hover:scale-110"
          style={{
            top: `${icon.y}%`,
            left: `${icon.x}%`,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            animation: `float ${icon.duration}s ease-in-out ${icon.delay}s infinite`,
          }}
        >
          {getIcon(icon.name)}
        </div>
      ))}
    </div>
  );
}
