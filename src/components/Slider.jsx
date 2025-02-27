


const Slider = ({title}) => {


    return (
        <div className="relative w-full h-[135px]">
            <img src="./images/subheaderbg.jpg" alt="Subheader" className="h-full w-full object-cover" />
            
            
            <h2 
                className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[#1E3A8A] text-5xl font-bold" 
                
            >
                {title}
            </h2>
        </div>
    );
};

export default Slider ;
