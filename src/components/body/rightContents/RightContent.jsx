

const RightContent = ({bookmark}) => {
    const {name, price} = bookmark
    return (
        <div className='bg-slate-200 p-4 my-4 rounded'>
            <h4>{name}</h4>
            <p>{price}</p>
        </div>
    );
};

export default RightContent;