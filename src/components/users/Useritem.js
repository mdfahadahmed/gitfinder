import React from 'react'

const Useritem = ({users}) => {
  return (
    users.map((user) =>(

      <div key={user.id} className="shadow-md rounded-md py-5 px-3 w-[30%] hover:bg-slate-200">
        <div>
        <img  className="rounded-full w-32 mx-auto  text-center" src={user.avatar_url} alt="#"/>
        </div>
        <div className='py-2 mb-3'>
            <h3  className="text-center text-[20px] font-bold uppercase">{user.login}</h3>
        </div>
        <div className="text-center ">
            <a className="text-[18px] font-medium bg-blue-500 text-white py-3 px-5 rounded-md" href={user.html_url}>Leran More</a>
        </div>
      </div>

     ))

  )
}


export default Useritem;
