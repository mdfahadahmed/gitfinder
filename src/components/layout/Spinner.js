import React, {Fragment} from 'react'
import spainner from "./spainer-loading.gif"

const Spinner = () => {
  return ( <Fragment>
        <img src={spainner} alt='Loading..' style={{width:"200px", margin:"auto", display:"block"}}/>
    </Fragment>
  );
};

export default Spinner;