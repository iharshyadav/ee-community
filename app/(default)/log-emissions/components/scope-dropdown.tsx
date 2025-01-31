import { ScopeContext } from "@/app/(context)/ScopeContext";
import { saveData } from "@/app/lib/actions";
import { FC, useContext } from "react";

interface scopeDropdownProps {
  name: string;
  setIsSubOpen: any;
  setIsMainOpen: any;
}

const Scopes = [
  {
    id: 0,
    type: "Scope-1",
  },
  {
    id: 1,
    type: "Scope-2",
  },
  {
    id: 2,
    type: "Scope-3",
  },
];

const ScopeDropdown: FC<scopeDropdownProps> = ({
  name,
  setIsSubOpen,
  setIsMainOpen,
}) => {
  const { setId } = useContext(ScopeContext);

  return (
    <div className="absolute right-full top-5 mr-2 mt-0 w-32 bg-[#1e293c] border text-white border-gray-700 rounded-md shadow-lg">
      {Scopes.map((scope, index) => (
        <button
          onClick={async () => {
            setIsMainOpen(false);
            setIsSubOpen(false);
            console.log(index);
            // value(index, name);
            const uniqueId = `${Date.now()}-${Math.floor(
              Math.random() * 10000
            )}`;
            setId(uniqueId);

            console.log(uniqueId);
            const data = scope.type;
            await saveData(data, name);
          }}
          className="block w-full text-left  px-4 py-2 hover:bg-[#162A4E]"
        >
          {scope.type}
        </button>
      ))}
    </div>
  );
};

export default ScopeDropdown;
