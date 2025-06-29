const Suggestion = ({
  suggestions = [],
  highlight,
  dataKey,
  onSuggestionClick,
}) => {
  const getHighlightedText = (text, selected) => {
    const parts = text.split(new RegExp(`(${selected})`, "gi"));

    return (
      <span>
        {parts.map((part, idx) => {
          return part.toLowerCase() === selected.toLowerCase() ? (
            <b key={idx} className="text-blue-800">
              {part}
            </b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <div className="absolute z-10  w-[100%]  bg-white  border-l border-r border-b border-gray-300 shadow-lg rounded-b">
      <ul className="py-2">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            className={`px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 cursor-pointer`}
            onClick={() => onSuggestionClick(suggestion)}
          >
            {getHighlightedText(suggestion[dataKey], highlight)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestion;
