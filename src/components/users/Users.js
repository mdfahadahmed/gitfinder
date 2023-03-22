import React, { Fragment } from 'react'
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) => {
    //  const users = [

    //   { id: 1,
    //     login: "mojombo",
    //     avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo",
    //   },

    //   { id: 2,
    //     login: "defunkt",
    //     avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    //     html_url: "https://github.com/defunkt",
    //   },

    //   { id: 3,
    //     login: "pjhyett",
    //     avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    //     html_url: "https://github.com/pjhyett",
    //   },

    //  ];

      if(loading){
        return <Spinner/>
      } 
      else{
        return <Fragment>
          <div className="flex justify-between flex-wrap gap-4">
            <Useritem users={users} />
          </div>
        </Fragment>

      }


};



export default Users;