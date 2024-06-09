import RightContent from "./RightContent";


const RightContents = ({bookMarks}) => {
    return (
        <div className='w-1/3'>
            <h2 className='bg-amber-300'>This is right contents</h2>
            <h2>{bookMarks.length}</h2>
            {
                bookMarks.map(bookmark => <RightContent key={bookmark.id} bookmark={bookmark}></RightContent>)
            }

            
        </div>
    );
};

export default RightContents;