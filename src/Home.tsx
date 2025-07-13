export default function Home() {
    return(
        <section className="py-20 md:py-28">
            <div className="conatainer">
                <div className="flex flex-col px-5 gap-10 lg:flex-row">
                    <div className="w-full space-y-5 xxl:mt-20 xxl:ml-30 lg:ml-11 lg:mt-10">
                        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
                            <span className="text-yellow-500">Plants</span> make a <br/>
                            positive
                            <span className="text-yellow-500">Impact</span> on <br/>
                            your environment
                        </h1>
                        <p className="text-slate-300 font-Lobster xxl:w-[600] xxl:text-2xl ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Itaque fugiat sapiente ratione quod libero sit eum dolores
                              illo nesciunt soluta. Rerum earum modi eum reiciendis. 
                              
                        </p>

                        <div className="flex flex-col gap-2 sm:flex-row">
                            <button className="border border-yellow-500 bg-yellow-500 rounded-md px-5 py-2 hover:opacity-90 outline-bg-transparent ">
                                <span className="font-bold">Shop Now </span>
                            <i className="ri-leaf-line"></i>
                            </button>
                            <button className="border border-yellow-500 bg-transparent rounded-md px-5 py-2 hover:bg-yellow-500 hover:text-white outline-bg-transparent ">
                                <span>Know More </span>
                            <i className="ri-leaf-line"></i>
                            </button>
                        </div>
                        <p className="text-xs font-lobstar text-slate-300 xxl:text-2xl">
                            You will get 30 days trial.
                        </p>
                        <div className="flex items-center gap-5 text-lg xxl:text-2xl">
                            <i className="ri-facebook-fill text-slate-300 hover:text-yellow-500 cursor-pointer"></i>
                            <i className="ri-twitter-fill text-slate-300 hover:text-yellow-500 cursor-pointer"></i>
                            <i className="ri-instagram-fill text-slate-300 hover:text-yellow-500 cursor-pointer"></i>
                            <i className="ri-linkedin-fill text-slate-300 hover:text-yellow-500 cursor-pointer"></i>
                        </div>
                    </div>
                    <div className="xxl:mr-70 xxl:mt-20 relative xxl:w-[900] lg:mt-10 lg:mr-10">
                        <img src="/download.png" alt="" />
                    </div>
                    <div className="absolute bottom-45 right-5 text-yellow-500 text-5xl opacity-30 lg:mb-120  ">
                        <i className="ri-leaf-line"></i>
                    </div>
                    <div className=" absolute -bottom-33 left-2 text-yellow-500 text-5xl opacity-30 lg:mb-140 lg:ml-120" >
                        <i className="ri-flower-line"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}