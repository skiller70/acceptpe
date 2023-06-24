import React from 'react'

function AcceptCard(props) {

    const {img,text,title} = props
    return (
        <>





            <div className="   max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="w-10 h-10 mb-2" src={img} alt="" />
               
                    <h5 className=" mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
              
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{text}</p>
          
            </div>



        </>
    )
}

export default AcceptCard