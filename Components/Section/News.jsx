import React from "react";

const News = () => {
  return (
    <div className="max-w-6xl m-auto bg-[#333333]">
      <div className="max-w-4xl m-auto text-white ">
        <h2 className="pt-10 pb-6 text-2xl font-bold">
          News and events for students
        </h2>
        <div class="grid grid-cols-3 gap-6 sm:grid-cols-1">
          <div className="text-black ">
            <div className="mb-6 bg-white">
              <h3 className="p-2 text-2xl font-bold">
                Newsticker: Information on the coronavirus
              </h3>
              <p className="px-2 py-6">Article | 11/10/22</p>
            </div>
            <div className="mb-6 bg-white">
              <img
                src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                alt=""
              />
              <p className="p-2">
                Everyone feels sometimes stressed during their studies. But what
                can you do against it? Constanza has a few tips.
              </p>
              <p className="flex p-2 mt-4">
                USUS blog <span>|</span> <span>1/4/23</span>{" "}
                <span>
                  <img
                    className="ml-16 rounded-full "
                    src="../../one.png"
                    alt=""
                  />
                </span>
              </p>ma
            </div>
            <div className="px-4 pt-4 bg-white pb-14">
              <img
                className="rounded-full"
                src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
                alt=""
              />
              <h2 className="p-2 text-2xl font-bold">
                Sim & Tech solve their 3rd case.
              </h2>
              <p className="p-2 mt-4">
                News <span>|</span> <span>12/19/22</span>
              </p>
            </div>
          </div>

          <div className="text-black ">
            <div className="mb-6 bg-white ">
              <img
                src="https://www.uni-stuttgart.de/universitaet/aktuelles/img/IRGE_Uni-Stuttgart_HdK_Rote-Stadtbalkone_Cansu-Coban_Paul-Menz.jpg?__scale=w:320,h:320,cx:0,cy:0,cw:2000,ch:2000"
                alt=""
              />
              <h2 className="p-2 text-2xl font-bold">
                Exhibition in the House of Cultures Stuttgart at the City Hall
              </h2>
              <p className="p-2">Event|1/12-1/25/23</p>
            </div>
            <div className="px-4 pt-4 mb-6 bg-white ">
              <img
                className="rounded-full"
                src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
                alt=""
              />
              <h2 className="p-2 text-2xl font-bold">
                The University of Stuttgart's five most beautiful Instagram
                pictures
              </h2>
              <p className="p-2">
                Article <span>|</span>12/21/22
              </p>
              <p className="mt-6 mb-0 text-xs">
                Photo: Addictive Stock / photocase.de
              </p>
            </div>
            <div className="px-4 pt-4 bg-white">
              <img
                className="rounded-full"
                src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
                alt=""
              />
              <h2 className="p-2 text-2xl font-bold">
                Diversity calendar makes diversity visible
              </h2>
              <p className="p-2">
                News <span>|</span>12/15/22
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-10 ">
              <p className="p-2 text-center text-white border mt-14">
                ALL NEWS
              </p>
              <p className="p-2 text-center text-white border mt-14">
                ALL EVENTS
              </p>
            </div>
          </div>
          <div className="text-black ">
            <div className="mb-6 bg-white">
              <div className="bg-[#01509f]">
                <img
                  src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
                  alt=""
                />
              </div>
              <h2 className="p-2 text-2xl font-bold">
                Latest episode: "Intelligent systems will help us in crises and
                in the future
              </h2>
              <p className="p-2">Video|YouTube</p>
            </div>
            <div className="mb-6 bg-white ">
              <h2 className="p-2 text-2xl font-bold">
                Impressive research in the field of business administration
              </h2>
              <p className="p-2">
                News <span>|</span>12/21/22
              </p>
            </div>
            <div className="bg-white ">
              <img
                className="p-4 rounded-full"
                src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
                alt=""
              />

              <h2 className="p-2 text-2xl font-bold">
                Impressive research in the field of business administration
              </h2>
              <p className="p-2">
                Article <span>|</span>12/15/22
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
