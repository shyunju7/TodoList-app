import React, {useEffect} from 'react';
import { Snackbar } from "../Styled/toast/toast-styled";

const Toast = ({isActive, setIsActive, msg}) => {


    useEffect(() => {
        if (isActive === true)
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
    });

    return<>{isActive ? <Snackbar show={true}>{msg}</Snackbar> : <Snackbar show={false} />}</>;

};

export default Toast;

