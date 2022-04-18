import React from 'react';
import ReactLoading from 'react-loading';

interface LoadingProps{
    type: 'fullpage' | 'content'
}

function LoadingComponent ({type = 'content'}: LoadingProps) {
    return <div className={`${type === 'content' ? 'w-full h-full' : 'w-screen h-screen'} flex items-center align-middle justify-center`}>
        <ReactLoading type="spin" color="#4f2aad" height={type === 'content' ? '5%' : '2%'} width={type === 'content' ? '5%' : '2%'} />
    </div>;
}

export default React.memo(LoadingComponent);