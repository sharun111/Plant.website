export default function About(){
    return(
        <section className="relative overflow-hidden mt-20">
        <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20" >
            <h2 className="font-Lobstar text-yellow-500 text-2xl md:text-3xl xl:text-4xl">About Us</h2>
            <p className="max-w-2xl">Follow instruction for more</p>
        </div>

        <div className="px-5  xl:space-y-0">
            <div className="flex flex-col items-center lg:flex-row gap-5">
                <div className="w-full lg:w-1/2">
                    <img src="/oo.png" alt="" className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto xxl:w-2/4"/>
                    
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="space-y-5 xxl:px-20"> 
                        <h3 className="text-xl md:text-3xl xl:text-4xl">
                            Make your <span className="text-yellow-500">organic</span> <br />
                            garden
                        </h3>
                        <p className="text-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis officia quibusdam impedit amet quisquam! Culpa error soluta veritatis libero esse reiciendis amet enim, quis voluptatibus, laboriosam molestias magnam neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-5  xl:space-y-0">
            <div className="flex flex-col items-center lg:flex-row-reverse gap-5">
                <div className="w-full lg:w-1/2 ">
                    <img src="/oo.png" alt="" className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto xxl:w-2/4"/>
                    
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="space-y-5 xxl:px-20"> 
                        <h3 className="text-xl md:text-3xl xl:text-4xl">
                            Come with us <br /> <span className="text-yellow-500">grow up </span> 
                            your plant
                        </h3>
                        <p className="text-slate-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis officia quibusdam impedit amet quisquam! Culpa error soluta veritatis libero esse reiciendis amet enim, quis voluptatibus, laboriosam molestias magnam neque.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    )
}