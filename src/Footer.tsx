export default function Footer() {
    return (
        <footer className="bg-yellow-100 text-green-950 pt-32 pb-10 relative mt-10">
            
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4">
                <div className="bg-green-900 px-6 pt-6 pb-8 space-y-5 rounded-md shadow-lg">
                    <h3 className="text-white text-xl md:text-2xl font-semibold">
                        <span className="text-yellow-500">Subscribe</span> to our newsletter
                    </h3>

                    <div className="flex flex-col md:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-5 py-3 bg-white text-green-900 placeholder:text-gray-500 rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
                        />

                        <button className="flex items-center justify-center gap-2 bg-green-950 text-white px-6 py-3 rounded-md hover:opacity-80 transition">
                            <span>Subscribe</span>
                            <i className="ri-send-plane-2-fill"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-10 mt-16 mb-10  ">
                <div className="border-b border-green-500 relative">
                    <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
                        <div className="bg-yellow-100 text-lg text-center space-x-2 md:text-2xl lg:text-3xl xxl:text-4xl">
                            <i className="ri-facebook-fill  cursor-pointer hover:text-yellow-500"></i>
                            <i className="ri-twitter-x-line cursor-pointer hover:text-yellow-500 "></i>
                            <i className="ri-instagram-line cursor-pointer hover:text-yellow-500 "></i>
                            <i className="ri-linkedin-fill  cursor-pointer hover:text-yellow-500  "></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
                <div>
                    <div className="text-7xl text-green-700 text-center inline-block">
                        <i className="ri-leaf-fill"></i>
                        <p className="text-xl sm:text-2xl">IndorePlants</p>
                    </div>
                </div>

                <div>
                    <p className="mb-5 font-bold text-xl ">
                        Quick Link
                    </p>

                    <div className="flex flex-col gap-1">
                        <a href="#">Plants</a>
                        <a href="#">Flowers</a>
                        <a href="#">Gardening</a>
                        <a href="#">Seeds</a>
                        <a href="#">Shipping</a>

                    </div>
                </div>

                <div>
                    <p className="mb-5 font-bold text-xl ">
                        Quick Link
                    </p>

                    <div className="flex flex-col gap-1">
                        <a href="#">Popular services</a>
                        <a href="#">Tree Planting</a>
                        <a href="#">Grass cutting</a>
                        <a href="#">Weeds control</a>
                        <a href="#">Project</a>

                    </div>
                </div>

                <div>
                    <p className="mb-5 font-bold text-xl ">
                        Quick Link
                    </p>

                    <div className="flex flex-col gap-1">
                        <a href="#">Contact us</a>
                        <a href="#">+ 822 333 43 902</a>
                        <a href="#">plant@gamil.com</a>
                        <br />
                        <p>123 tailwind awe,css city, webland 56478 ,usa</p>

                    </div>
                </div>
            </div>
        </footer>
    );
}
