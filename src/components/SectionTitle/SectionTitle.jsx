
const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="grid justify-center my-24 text-center">
            <p className="text-[#b8dfda]">{subheading}</p>
            <hr />
            <h1 className="my-4 text-[#fcc2c0] font-semibold text-3xl">{heading}</h1>
            <hr />
        </div>
    );
};

export default SectionTitle;

