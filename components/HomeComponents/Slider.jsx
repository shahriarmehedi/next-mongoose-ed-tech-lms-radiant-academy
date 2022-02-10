import Image from "next/image";

const SliderSection = () => {


    return (
        <>
            <div className="w-5/6 mx-auto">
                <div className="flex flex-col justify-center items-center lg:flex-row lg:my-20">
                    <div className="w-5/6 lg:w-[50%] py-14 xl:pl-10">
                        <div>
                            <div>
                                <h2 className="text-6xl font-bold">Problem Solving</h2>
                                <p className="py-5 text-2xl lg:w-3/4 xl:w-1/2">We have got 20+ online solutions for programmers, who is excited?</p>
                            </div>
                        </div>
                        <button className="bg-rose-500 rounded-md text-white px-7 py-3 my-5">
                            Try it out
                        </button>
                    </div>
                    <div className="w-5/6 lg:w-[50%] py-5">
                        <div className="w-5/6 mx-auto">
                            <Image
                                src="/img/hero.png"
                                width="500"
                                height="432"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderSection;