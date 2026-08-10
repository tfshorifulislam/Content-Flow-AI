import { DropdownMenuAvatar } from "./DropDownMenuAvatar";
import { SearchInput } from "./SearchInput";

const Navbar = () => {
    return (
        <div className="bg-[#F7FAF8] py-3 px-8 flex justify-between items-center border-b border-r border-[#BEC9C5]">
            <div>
                <SearchInput />
            </div>
            <div>
                <DropdownMenuAvatar />
            </div>
        </div>
    );
};

export default Navbar;