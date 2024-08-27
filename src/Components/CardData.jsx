let CardData = ({ quote, author, onChangeQuote }) => {
  
    return (
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <div className="md:flex">
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-xl font-semibold text-gray-900">{quote}</h1>        
            <h4 className="text-gray-600 mt-2">{author}</h4>  
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
              onClick={onChangeQuote}
            >
              Change Quote
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardData;
  