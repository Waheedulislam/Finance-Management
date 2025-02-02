const Features = () => {
    const features = [
        {
            title: "Full-suite solutions",
            description:
                "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
            icon: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format", // Replace with an actual icon component if needed
            bgColor: "bg-blue-100",
        },
        {
            title: "Simplify the complex",
            description:
                "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
            icon: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format", // Replace with an actual icon component if needed
            bgColor: "bg-green-100",
        },
        {
            title: "Cutting-edge tech",
            description:
                "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
            icon: "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format", // Replace with an actual icon component if needed
            bgColor: "bg-red-100",
        },
    ];

    return (
        <div className=" bg-[#f7f9fc] pb-24">
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#eff3f8] p-7 rounded-xl shadow-md max-w-sm justify-start "
                    >
                        <div
                            className={`w-12 h-12 flex  rounded-full ${feature.bgColor}  mb-4`}
                        >

                            <img src={feature.icon} alt="" />
                        </div>
                        <h3 className="text-3xl my-6 font-semibold text-gray-900 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-[#164377] text-lg  mt-4">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
