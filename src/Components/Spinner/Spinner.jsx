import { TailSpin } from 'react-loader-spinner';

export const Spinner = () => {
    const style = {
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
    };
    return (
        <div style={style}>
            <TailSpin
            height="100"
            width="90"
            color="#000200"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          
            />
        </div>
    )
};