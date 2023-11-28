
import { isJwtTokenPresent } from './Helper'

const ProtectRoute = ({children}) => {
  
        if (!isJwtTokenPresent()) {
            if(typeof window !== 'undefined'){
              window.location.href = '/';
              return null;
            }
          }
        

    return(
        <div>{children}</div>
    )
}

export default ProtectRoute