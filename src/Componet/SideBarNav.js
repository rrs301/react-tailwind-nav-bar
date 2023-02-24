import React, { useState } from 'react'

function SideBarNav() {
    const [open,setOpen]=useState(true);
    const menuList = [
        { title: "Dashboard", src: "Chart_fill" },
        { title: "Inbox", src: "Chat" },
        { title: "Accounts", src: "User", gap: true },
        { title: "Schedule ", src: "Calendar" },
        { title: "Search", src: "Search" },
        { title: "Analytics", src: "Chart" },
        { title: "Files ", src: "Folder", gap: true },
        { title: "Setting", src: "Setting" },
      ];
  return (
    <div className='flex'>
        <div className={`${open?'w-72':'w-20'} h-screen transition-all duration-500 relative p-4 bg-dark-purple`}>
            <img src={require('./../Assets/control.png')} 
            onClick={()=>setOpen(!open)}
            className={`w-[20px] absolute 
            -right-3 border-2 rounded-full transition-all duration-500
             border-dark-purple bg-dark-purple ${!open && "rotate-180"} `}/>
            <div className='flex gap-4'>
                <img src={require('./../Assets/youtube.png')}
                className={`w-[40px] duration-500 ${!open && "rotate-[360deg]"} `}/>
               {open? <h3 className='text-white font-bold text-[20px]'>Tubeguruji</h3>:null}
            </div>

            <ul className='mt-10'>
                {menuList.map((item)=>(
                    <li className={`flex gap-4 p-2
                    cursor-pointer
                    ${!open && "justify-center"}
                    group hover:bg-blue-800 rounded-md transition-all duration-300
                    ${item.gap?"mt-9":"mt-2"} `}>
                        <img src={require(`./../Assets/${item.src}.png`)}
                        className="group-hover:scale-110"
                        />
                      {open?  <span className='text-white group-hover:font-bold'>{item.title}</span>:null}
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SideBarNav