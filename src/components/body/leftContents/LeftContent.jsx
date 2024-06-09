
const LeftContent = ({ book, handleAddToBookmarks}) => {
    const { id, name, img, published_year } = book;
    return (
        <div className='mr-4 mb-12'>
            <img className='w-full' src={img}></img>
            <div className='flex justify-between mt-1'>
                <div className='flex'>
                    <div className='mr-4'>
                        <img className='w-16' src={img}></img>
                    </div>
                    <div>
                        <h4>{name}</h4>
                        <p>{published_year}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <button onClick={() => handleAddToBookmarks(book)} className='bg-green-400 font-extrabold px-6 rounded-full text-white'>Bookmarks</button>
                    <img className='w-24' src={img}></img>
                </div>
            </div>
            <h2>{id}</h2>
            <p>{published_year}</p>
        </div>
    );
};

export default LeftContent;