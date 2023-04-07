import React, { useEffect, useState } from "react";
import { IProps } from "../../interface/product";
import { Carousel, Image } from "antd";
const HomePage: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    width: "100%",
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };
  return (
    <div className="container px-12 md:mx-auto bg-black">
      <Carousel autoplay>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/hinh-nen-toi-gian-1.jpg"
          />
        </div>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-toi-gian-minimalist.jpg"
          />
        </div>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://thuthuatnhanh.com/wp-content/uploads/2022/04/Hinh-nen-toi-gian.jpg"
          />
        </div>
        <div style={contentStyle}>
          <Image
            style={{ width: "1500px", height: "400px" }}
            preview={false}
            src="https://demoda.vn/wp-content/uploads/2022/01/hinh-nen-toi-gian-minimalist-hoat-hinh.jpg"
          />
        </div>
      </Carousel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-24 items-center">
        <div className="">
          <div className="text-white text-base">Hello, I'm</div>
          <h1 className="text-white text-5xl md:text-7xl">VannHaii</h1>
          <div className="text-green-500 py-2.5 text-xl">
            Full stack developer
          </div>
          <div className="text-white text-base">
            I'm a computer techniclan with a focus on web development with
            JavaScript
          </div>
          <button className="text-white px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">
            Contact
          </button>
        </div>
        <div className="hidden md:block">
          <div>
            <img
              id="anh"
              className="w-810 h-540 transition-opacity"
              src="../img/image5.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-14 text-center md:text-left">
        <div className="">
          <div>
            <h2 className="text-2xl text-white border-b-red-500 border-b-2 inline">
              About me
            </h2>

            <div className="py-4 text-lg text-white">
              My name is VannHaii, I'm a computer technician with a great
              passion for programming.
            </div>
            <div className="py-4 text-lg text-white">
              Improved my skills as a Front-End and Back-End developer
            </div>
            <div className="py-4 text-lg text-white">
              I develop websites and applications using HTML, CSS, and
              JavaScript.
            </div>
            <div className="py-4 text-lg text-white">
              I'm always improving myself with each project I get my hands on.
            </div>
            <div className="py-4 text-lg text-white">
              I am a dedicated person who pursues his dreams, hardworking and
              results oriented, I always seek to achieve my best version.
            </div>
            <div className="text-green-500 text-lg">
              Here are my main skills:
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <img className="px-3" src="../img/1.png" alt="" />
            <img className="px-3" src="../img/Group.png" alt="" />
            <img className="px-3" src="../img/3.png" alt="" />
            <img className="px-3" src="../img/4.png" alt="" />
            <img className="px-3" src="../img/6.png" alt="" />
            <img className="px-3" src="../img/7.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <img
            className="w-200 h-56 md:w-810 md:h-540"
            src="../img/180274506_637381227204981_7076703519571390408_n.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-white my-16 text-center text-4xl">My portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
        <div className="text-white border border-primary rounded-lg block bg-primary flex flex-col px-4">
          <div className="flex justify-between pt-4">
            <div>
              <img src="../img/122.png" alt="" />
            </div>
            <div>
              <img src="../img/111232.png" alt="" />
            </div>
          </div>
          <div className="w-full h-full pt-10">
            <div>FCalendar</div>
            <div className="pt-4">
              Uma aplicação Web realizada durante o Hackathon do programa de
              formação da.
            </div>
            <div>
              Esta aplicação serve para ajudar na volta do trabalho remoto para
              o presencial.
            </div>
          </div>
          <div className="flex mt-4 mb-4">
            <div className="pr-4 text-sm">Node</div>
            <div className="pr-4 text-sm">Express</div>
            <div className="pr-4 text-sm">MySql</div>
            <div className="pr-4 text-sm">Ejs</div>
          </div>
        </div>
        <div className="text-white border border-primary rounded-lg block bg-primary flex flex-col px-4">
          <div className="flex justify-between pt-4">
            <div>
              <img src="../img/122.png" alt="" />
            </div>
            <div className="flex justify-between">
              <div>
                <img className="pr-2" src="../img/111232.png" alt="" />
              </div>
              <div className="">
                <img src="../img/11111111.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-full pt-10">
            <div>Github Searcher</div>
            <div className="pt-4">
              Uma versão mais agradável para ver seu perfil do GitHub,
            </div>
            <div>inclui visualização de dados, repositórios,</div>
            <div>compartilhamento entre outros.</div>
          </div>
          <div className="flex mt-4 mb-4">
            <div className="pr-4 text-sm">React</div>
            <div className="pr-4 text-sm">Typescript</div>
            <div className="pr-4 text-sm">Styled Components</div>
          </div>
        </div>
        <div className="text-white border border-primary rounded-lg block bg-primary flex flex-col px-4">
          <div className="flex justify-between pt-4">
            <img src="../img/122.png" alt="" />
            <img src="../img/11111111.png" alt="" />
          </div>
          <div className="w-full h-full pt-10">
            <div>Sunnyside agency</div>
            <div className="pt-4">
              Uma lading page de uma empresa fictícia proposta pelo
            </div>
            <div className="border-b-green-500 border-b-2 inline">
              Frontend Mentor.
            </div>
          </div>
          <div className="flex mt-4 mb-4">
            <div className="pr-4 text-sm">Html</div>
            <div className="pr-4 text-sm">Css</div>
            <div className="pr-4 text-sm">JavaScript</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="text-white border border-primary rounded-lg block bg-primary flex flex-col px-4">
          <div className="flex justify-between pt-4">
            <div>
              <img src="../img/122.png" alt="" />
            </div>
            <div>
              <img src="../img/11111111.png" alt="" />
            </div>
          </div>
          <div className="w-full h-full pt-10">
            <div>Portfólio V1</div>
            <div className="pt-4">
              Uma versão alternativa de meu portfólio, utilizando VueJs.
            </div>
            <div></div>
          </div>
          <div className="flex mt-4 mb-4">
            <div className="pr-4 text-sm">VueJs</div>
            <div className="pr-4 text-sm">JavaScript</div>
          </div>
        </div>
        <div className="text-white border border-primary rounded-lg block bg-primary flex flex-col px-4">
          <div className="flex justify-between pt-4">
            <div>
              <img src="../img/122.png" alt="" />
            </div>
            <div>
              <img src="../img/11111111.png" alt="" />
            </div>
          </div>
          <div className="w-full h-full pt-10">
            <div>Dtmoney</div>
            <div className="pt-4">
              Um gerenciador de finanças para analisar seus ganhos, gastos e ter
              um controle maior de suas finanças.
            </div>
          </div>
          <div className="flex mt-4 mb-4">
            <div className="pr-4 text-sm">VueJs</div>
            <div className="pr-4 text-sm">JavaScript</div>
          </div>
        </div>
        <div className="text-white border border-primary rounded-lg block bg-primary flex flex-col px-4">
          <div className="flex justify-between pt-4">
            <div>
              <img src="../img/122.png" alt="" />
            </div>
            <div className="flex justify-between">
              <div>
                <img className="pr-2" src="../img/111232.png" alt="" />
              </div>
              <div>
                <img src="../img/11111111.png" alt="" />
              </div>
            </div>
          </div>
          <div className="w-full h-full pt-10">
            <div>Music Library</div>
            <div className="pt-4">
              Uma interface para uma biblioteca de músicas, semelhante ao
              Spotify.
            </div>
          </div>
          <div className="flex mt-4 mb-4">
            <div className="pr-4 text-sm">Html</div>
            <div className="pr-4 text-sm">Css</div>
            <div className="pr-4 text-sm">JavaScript</div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-white text-4xl mt-12">Contact me</h1>
        <div className="text-green-400 mb-12">
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <button className="bg-green-500 rounded-xl w-56 h-20 m-2 flex flex-col md:flex-row justify-center items-center hover:bg-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            hainvph20104@fpt.edu.vn
          </button>
          <button className="bg-green-500 rounded-xl w-56 h-20 m-2 flex flex-col md:flex-row justify-center items-center hover:bg-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (+84)0971397545
          </button>
        </div>
      </div>
      <div className="text-center mt-32">
        <h2 className="text-white text-xl">
          Get in touch using the form below
        </h2>
        <form action="" className="flex flex-col justify-center items-center">
          <input
            className="text-white bg-black rounded-xl border-white border px-4 py-1 w-80 md:w-96"
            type="text"
            placeholder="Email"
          />
          <textarea
            className="px-4 bg-black text-white border-white border my-5 w-80 md:w-96 rounded-xl"
            name=""
            id=""
          >
            Leave your message
          </textarea>
        </form>
        <button className="text-white px-12 py-2 rounded-3xl bg-green-500 my-9 text-base hover:bg-green-800">
          TO SEND
        </button>
      </div>
    </div>
  );
};

export default HomePage;
