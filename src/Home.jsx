import React, { useEffect, useState } from "react";

function Home({ toggleContentt }) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const applicant_head = [
    {
      name: 'Full Name',
      check: <input className="w-[24px] h-[24px]" type="checkbox" />
    },
    {
      name: 'score',
      check: ""
    },
    {
      name: 'Hiring stage',
      check: ""
    },
    {
      name: 'Applied Date',
      check: ""
    },
    {
      name: 'Action',
      check: ""
    },
  ]

  const applicants = [
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/empty_star.png" alt="" />
      ,
      img_star2: '',
      score: '0.0',

      status: "In Review",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/empty_star.png" alt="" />
      ,
      img_star2: '',
      score: '0.0',

      status: "In Review",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/star_fill.png" alt="" />
      ,
      img_star2: '',
      score: '4.0',

      status: "Shortlisted",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/star_fill.png" alt="" />
      ,
      img_star2: '',
      score: '5.0',

      status: "Hired",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/star_fill.png" alt="" />
      ,
      img_star2: '',
      score: '2.0',

      status: "Rejected",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/star_fill.png" alt="" />
      ,
      img_star2: '',
      score: '4.0',

      status: "Rejected",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/star_fill.png" alt="" />
      ,
      img_star2: '',
      score: '3.0',

      status: "Interview",

      date: '13 July, 2021'
    },
    {
      img: <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
      ,
      name: 'John Doe',
      img_star1: <img className="w-[24px] " src="./images/employer/star_fill.png" alt="" />
      ,
      img_star2: '',
      score: '4.0',

      status: "Rejected",


      date: '13 July, 2021'
    },
  ]



  return (
    <div className="  ">

      <div className="w-[100%] max-h-[80vh] flex flex-col gap-4 relative   ">
        <div className="">
          <div className="flex w-[100%] px-[32px] py-[24px] justify-between items-center bg-[#fff] ">
            <div className="flex items-center gap-[24px]">
              <img className="w-[40px]" src="./images/employer/icon_left.png" alt="" />
              <div className="flex flex-col items-start gap-[8px]">
                <p className="text-[#333]  font-[500] text-[24px] leading-relaxed">Assistant Manager</p>
                <div className="flex justify-center items-center gap-[8px]">
                  <p className="font-[600]">Customer Support</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#333333" />
                  </svg>
                  <p className="font-[600]">Full-Time</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#333333" />
                  </svg>
                  <p className="font-[600]">4 / <span className="text-[#646464]">11 Hired</span></p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[8px]">
              <img className="w-[24px] " src="./images/employer/share.png" alt="" />
              <p className="text-[20px] text-[#646464]">Share</p>
            </div>
          </div>

          <div className="flex   px-[16px] py-[0px] items-start gap-[40px] bg-[#fff]">
            <div className="flex flex-col items-center gap-[7px] shadow-border">
              <p className="text-[16px] font-[600]">Applicants</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="89" height="4" viewBox="0 0 89 4" fill="none">
                <path d="M0 4C0 1.79086 1.79086 0 4 0H85C87.2091 0 89 1.79086 89 4H0Z" fill="#06A9EF" />
              </svg>
            </div>
            <p className="text-[16px] text-[#646464] font-[600]">Job Details</p>
            <p className="text-[16px] text-[#646464] font-[600]">Analytics</p>
          </div>

          <div className="flex py-[24px] px-[16px] justify-between items-center bg-[#fff]">
            <p className="font-[600] text-[16px]">Total Applicants : 19</p>
            <div className="flex items-start gap-[8px]">
              <div className="w-[314px] flex py-[12px] px-[16px] gap-[16px] rounded-[6px] border border-[#D6DDEB] bg-[#fff]">
                <img className="w-[24px]" src="./images/employer/icon_search.png" alt="" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="flex py-[12px] px-[16px] justify-center gap-[8px] rounded-[6px] border border-[#D6DDEB]">
                <img className="w-[24px]" src="./images/employer/Icon_filter.png" alt="" />
                <p className="font-[600]">Filter</p>
              </div>
            </div>  
          </div>
          <div className="flex p-[16px] w-[100%] items-start justify-between  bg-[#fff] border border-[#D6DDEB] ">
            {
              applicant_head.map((applicant_head) => (
                <div className="flex w-full gap-6">
                  <div>
                    {applicant_head.check}
                  </div>


                  <div className="flex  justify-between items-center gap-[8px]">
                    <p className="text-[16px] font-[600]">{applicant_head.name}</p>
                    <img className="w-[24px]" src="./images/employer/down_arrow.png" alt="" />
                  </div>
                </div>

              ))
            }
          </div>
        </div>
        <div className="flex flex-col gap-[16px] items-start bg-[#fff]  overflow-y-auto">


          {applicants.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((applicants, index) => (
            <>


              <div className="flex w-[100%] p-[16px] justify-between items-center" style={{ background: index % 2 == 0 ? "#EFFAFF" : "#fff" }}>
               
                <div className="  gap-[24px] w-[100%] justify-between flex items-center">
                  <div className="flex justify-center text-[14px] font-[600] items-center gap-[16px]">
                  <input className="w-[24px] h-[24px]" type="checkbox" />
                    <img className="w-[40px]" src="./images/employer/profile_icon.png" alt="" />
                    <p className="text-[16px] font-[600]">{applicants.name}</p>
                  </div>
                  <div className="flex w-[172px] items-center gap-[8px]">
                    {applicants.img_star1}
                    {applicants.img_star2}


                    <p className="text-[14px] font-[600]">{applicants.score}</p>
                  </div>
                  <div className={`flex py-[6px] px-[10px] text-[14px] font-semibold justify-center items-center gap-[8px] rounded-[80px] border ${applicants.status === "Interview" ? 'text-[#26A4FF] border-[#26A4FF]' :
                    applicants.status === "Hired" ? 'text-[#56CDAD] border-[#56CDAD]' :
                      applicants.status === "Shortlisted" ? 'text-[#4640DE] border-[#4640DE]' : applicants.status === "Rejected" ? 'text-[#FF6550] border-[#FF6550]' :
                        applicants.status === "In Review" ? 'text-[#FFB836] border-[#FFB836]' : ''}`}>

                    {applicants.status}

                  </div>


                  <p className="text-[14px] font-[600]">{applicants.date}</p>
                  <div className="flex justify-center items-center gap-[16px]">
                    <button onClick={toggleContentt} className="flex py-[12px] px-[24px] justify-center items-center gap-[10px] rounded-[6px] border border-[#06A9EF] bg-[#E7F8FF] ">See Application</button>
                    <img className="w-[24px]" src="./images/employer/three-dot.png" alt="" />
                  </div>
                </div>
              </div>
            </>
          ))
          }
        </div>


      


      </div>


    </div>
  )
}
export default Home