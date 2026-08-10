
const Sidebar = () => {
    return (
        <div className="bg-[#F7FAF8] border border-[#BEC9C5] py-6 px-4 min-h-screen max-w-64">
            <div className="flex items-center gap-3">
                <div className="text-[#94E5D5] font-bold text-lg leading-6 text-center bg-[#00695C] rounded-md flex justify-center items-center w-10 h-10">
                    C
                </div>
                <div>
                    <h1 className="text-[#004F45] font-bold leading-6 text-lg ">
                        ContentFlow AI
                    </h1>
                    <p className="font-medium text-sm leadin-3 text-[#6E7976] ">
                        Pro Workspace
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;